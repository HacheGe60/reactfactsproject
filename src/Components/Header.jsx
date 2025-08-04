export default function Header() {
    return (
        <header className="header">
            <img src="./src/react-logo.png" alt="React logo" className="react-logo" />
            <nav>
                <ul className="nav-links">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}