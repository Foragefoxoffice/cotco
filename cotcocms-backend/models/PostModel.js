import pool from "../config/dbConfig.js";

export const getAllPosts = async () => {
    const [rows] = await pool.query("SELECT * FROM posts ORDER BY createdAt DESC");
    return rows;
};

export const createPost = async (title, content) => {
    const [result] = await pool.query(
        "INSERT INTO posts (title, content) VALUES (?, ?)",
        [title, content]
    );
    return { id: result.insertId, title, content };
};

export const deletePost = async (id) => {
    await pool.query("DELETE FROM posts WHERE id = ?", [id]);
    return { message: "Post deleted" };
};
