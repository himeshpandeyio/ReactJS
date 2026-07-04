function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <h2>MovieFlix</h2>
            </div>

            <ul className="nav-links">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/movies">Movies</a>
                </li>
                <li>
                    <a href="/series">Series</a>
                </li>
                <li>
                    <a href="/favorites">Favorites</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
