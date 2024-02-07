import axios from "axios";
import { useState, useEffect } from 'react';
import classes from "../sass/index.module.sass"

const PostPage = (  ) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/posts?limit=3');
                setPosts(response.data.posts);
                console.log(response.data);

            } catch (error) {
                console.error('Ошибка при получении постов:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className={classes.post}>
            <h1>Post</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostPage;