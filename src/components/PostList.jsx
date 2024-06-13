import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
            setPosts(posts.filter(post => post.id !== id));
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    const handlePostAdded = (newPost) => {
        setPosts([...posts, newPost]); // Agregamos el nuevo post al estado de posts
    };

    return (
        <div>
            {posts.map(post => (
                <div key={post.id} className="border p-4 mb-4">
                    <h2 className="text-xl font-bold">{post.title}</h2>
                    <p>ID: {post.id}</p>
                    <p>{post.body}</p>
                    <Link to={`/posts/${post.id}`} className="mr-4 text-blue-500">View</Link>
                    <button onClick={() => handleDelete(post.id)} className="text-red-500">Delete</button>
                </div>
            ))}
        </div>
    );
};

export default PostList;
