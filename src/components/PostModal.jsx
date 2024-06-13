import { useEffect, useState } from 'react';
import axios from 'axios';

const PostModal = ({ post, onClose }) => {
    const [postData, setPostData] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}`);
                setPostData(response.data);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };
        fetchPost();
    }, [post.id]);

    if (!postData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-2xl font-bold mb-4">{postData.title}</h2>
                <p className="mb-4">ID: {postData.id}</p>
                <p className="mb-4">{postData.body}</p>
                <button onClick={onClose} className="bg-blue-500 text-white rounded p-2">Close</button>
            </div>
        </div>
    );
};

export default PostModal;
