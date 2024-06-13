import { useState } from 'react';
import axios from 'axios';

const PostForm = ({ onPostAdded }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = { title, body, userId: 1 };
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
            onPostAdded(response.data); // Llamamos a la función onPostAdded para agregar el nuevo post
            setTitle(''); // Limpiamos el campo title después de agregar el post
            setBody(''); // Limpiamos el campo body después de agregar el post
            console.log('Nuevo Post:');
            console.log(response.data); // Mostramos el nuevo post en la consola
            alert('¡Post agregado exitosamente!'); // Mostramos una alerta de éxito
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border rounded p-2"
                    required
                />
            </div>
            <div>
                <label className="block">Body</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="w-full border rounded p-2"
                    required
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white rounded p-2">Add Post</button>
        </form>
    );
};

export default PostForm;
