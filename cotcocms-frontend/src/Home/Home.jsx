import { useState, useEffect } from "react";
import { getPosts, removePost } from "../Api/action";
import { message } from "antd";

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPostsData();
    }, []);

    const getPostsData = async () => {
        try {
            const response = await getPosts();
            setPosts(response?.data || []);
            console.log("getPosts", response);
        } catch (error) {
            console.log("getPosts error:", error);
        }
    };

    const removePostData = async (id) => {
        try {
            const response = await removePost(id);
            console.log("Removed", response.data);
            message.success("Deleted Successfully!");
            getPostsData();
        } catch (error) {
            console.log("Remove error:", error);
            message.error("Failed to delete post!");
        }
    };

    return (
        <>
            {posts.map((post) => (
                <div key={post.id}>
                    <span>{post.createdAt}</span>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <button onClick={() => removePostData(post.id)}>Remove</button>
                </div>
            ))}
        </>
    );
}
