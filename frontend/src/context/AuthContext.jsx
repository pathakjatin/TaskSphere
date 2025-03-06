import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

const googleProvider = new GoogleAuthProvider();

export const AuthProvide = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Register a user
    const registerUser = async (email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password);
    };

    // Login the user
    const loginUser = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password);
    };

    // Sign in with Google
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            let firstName = "";
            let lastName = "";
            if (user.displayName) {
                const nameParts = user.displayName.split(" ");
                firstName = nameParts[0];
                lastName = nameParts.slice(1).join(" ");
            }

            const userData = { 
                uid: user.uid,
                email: user.email,
                firstName,
                lastName,
                photoURL: user.photoURL
            };

            localStorage.setItem("user", JSON.stringify(userData)); // ✅ Save to localStorage
            setCurrentUser(userData);

            return userData;
        } catch (error) {
            console.error("Google Sign-In Error:", error);
        }
    };

    // Logout the user
    const logout = () => {
        localStorage.removeItem("user"); // ✅ Clear localStorage on logout
        return signOut(auth);
    };

    // Manage user session
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { email, displayName, photoURL, uid } = user;
    
                let firstName = "";
                let lastName = "";
    
                // If displayName exists (Google Sign-In), extract names
                if (displayName) {
                    const nameParts = displayName.split(" ");
                    firstName = nameParts[0];
                    lastName = nameParts.slice(1).join(" ");
                } else {
                    firstName = "User"; // Default first name if missing
                    lastName = "Unknown"; // Default last name if missing
                }
    
                const userData = {
                    uid,
                    email,
                    firstName,
                    lastName,
                    photoURL: photoURL || "" // Ensure photoURL is always defined
                };
    
                localStorage.setItem("user", JSON.stringify(userData)); // ✅ Store updated user data
                setCurrentUser(userData);
            } else {
                setCurrentUser(null);
                localStorage.removeItem("user");
            }
            setLoading(false);
        });
    
        return () => unsubscribe();
    }, []);
    

    const value = {
        currentUser,
        loading,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
