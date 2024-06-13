import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
                setPost(response.data);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };
        fetchPost();
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p>ID: {post.id}</p>
            <p>{post.body}</p>
            <button onClick={() => navigate(-1)} className="bg-blue-500 text-white rounded p-2">Back</button>
        </div>
    );
};

export default PostDetail;
