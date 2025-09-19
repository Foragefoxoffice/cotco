import express from "express";
import { getPosts, addPost, removePost } from "../controllers/PostController.js";
import { loginUser } from "../controllers/UserController.js";

const router = express.Router();

// Post routes
router.get("/posts", getPosts);
router.post("/posts", addPost);
router.delete("/posts/:id", removePost);

// Auth routes
router.post("/auth/login", loginUser);

export default router;
