const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    uid: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    photoURL: { type: String }, 
});

module.exports = mongoose.model("User", UserSchema);