import {useAuth} from "../context/AuthContext";
// import Loading from "../components/Loading";
import {Navigate} from "react-router-dom";
export default function PrivateRoute({children}){
    const {currentUser, loading} =  useAuth();
    if(loading){
        return <div>
            loading
        </div>
    }
    if(currentUser){
        return children;
    }
    return <Navigate to="/login" replace/>
}