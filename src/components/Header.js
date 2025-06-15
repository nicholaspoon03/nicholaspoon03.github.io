import { Link } from "react-router-dom";
import "../App.css";
import Home from "../pages/Home";

function Header() {
    return (
        <header className="header">
            <Link to="/" className="header-links">
                <h2 id="header-name" ref={Home}>Nicholas Poon</h2>
            </Link>
            
            <nav className="header-links-row">
                <Link to="/" className="header-links">Home</Link>
                <Link to="/experience" className="header-links">Experience</Link>
                <Link to="/education" className="header-links">Education</Link>
                <Link to="/projects" className="header-links">Projects</Link>
            </nav>

        </header>
    )
}

export default Header;
