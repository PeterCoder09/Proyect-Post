import { Link } from 'react-router-dom';

const Header = () => (
    <header className="bg-gray-800 text-white p-4">
        <nav className="flex justify-between">
            <Link to="/" className="text-xl">Bienvenido</Link>
            <div>
                <Link to="/posts" className="mr-4">Posts</Link>
            </div>
        </nav>
    </header>
);

export default Header;
