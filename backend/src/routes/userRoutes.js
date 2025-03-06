const express = require("express");
const User = require("../models/User.model");

const router = express.Router();

// ✅ 1️⃣ Save or Update User in MongoDB (after Firebase Login)
router.post("/login", async (req, res) => {
    const { uid, email, firstName, lastName, photoURL } = req.body;

    try {
        let user = await User.findOne({ uid });

        if (!user) {
            // Create new user if not found
            user = new User({ uid, email, firstName, lastName, photoURL });
            await user.save();
        } else {
            // Update existing user details
            user.firstName = firstName;
            user.lastName = lastName;
            user.photoURL = photoURL;
            await user.save();
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: "Failed to save user" });
    }
});

// ✅ 2️⃣ Get User Profile by UID
router.get("/:uid", async (req, res) => {
    try {
        const user = await User.findOne({ uid: req.params.uid });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch user" });
    }
});

module.exports = router;
