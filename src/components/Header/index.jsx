import { Link, useLocation } from 'react-router-dom';
import './style.css';
import Home from "../../pages/Home";

function Header() {
    const location = useLocation()

    return (
        <header id="header" className="site-scaffold-background">
            <Link to="/" className="header-links">
                <h2 id="header-name" ref={Home}>Nicholas Poon</h2>
            </Link>
            
            <nav id="header-links-row">
                <Link to="/" className={`header-links ${location.pathname === "/" ? "active-header" : ""}`}>Home</Link>
                <Link to="/experience" className={`header-links ${location.pathname === "/experience" ? "active-header" : ""}`}>Experience</Link>
                <Link to="/education" className={`header-links ${location.pathname === "/education" ? "active-header" : ""}`}>Education</Link>
                <Link to="/projects" className={`header-links ${location.pathname === "/projects" ? "active-header" : ""}`}>Projects</Link>
            </nav>
        </header>
    )
}

export default Header;
