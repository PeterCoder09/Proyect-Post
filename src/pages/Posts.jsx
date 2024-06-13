import { useState } from 'react';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const handlePostAdded = (newPost) => {
        setPosts([...posts, newPost]);
    };

    return (
        <div className="p-4">
            <PostForm onPostAdded={handlePostAdded} />
            <PostList />
        </div>
    );
};

export default Posts;
