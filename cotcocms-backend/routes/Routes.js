import express from "express";
import { getPosts, addPost, removePost } from "../controllers/PostController.js";

const router = express.Router();

router.get("/posts", getPosts);
router.post("/posts", addPost);
router.delete("/posts/:id", removePost);

export default router;
