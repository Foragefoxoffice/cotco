import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { findUserByEmail } from "../models/UserModel.js";

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Login request:", email, password);

        const user = await findUserByEmail(email);

        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        if (password !== user.password) {
            console.log("Password mismatch:", password, user.password);
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({
            message: "Login successful",
            token,
            user: { id: user.id, email: user.email }
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


