import pool from "../config/db.js";

// Get all posts
export const getPosts = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM posts ORDER BY createdAt DESC");
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: "Error fetching posts", error: error.message });
    }
};


// Add a new post
export const addPost = async (req, res) => {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required" });
        }

        // Example post object (replace with DB insert later)
        const newPost = {
            id: Date.now(), // temporary ID
            title,
            content,
        };

        res.status(201).json({ message: "Post added successfully", post: newPost });
    } catch (error) {
        res.status(500).json({ message: "Error adding post", error });
    }
};

// Delete a post details
export const removePost = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: "Post ID is required" });
        }

        const [result] = await pool.query("DELETE FROM posts WHERE id = ?", [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: `No post found with ID ${id}` });
        }

        res.status(200).json({ message: `Post with ID ${id} deleted successfully` });
    } catch (error) {
        console.error("Delete post error:", error);
        res.status(500).json({ message: "Error deleting post", error: error.message });
    }
};