import { Link, useLocation } from 'react-router-dom';
import './style.css';
import Home from "../../pages/Home";
import { Drawer } from '@mui/material';
import { useEffect, useState } from 'react';

function Header() {
    const location = useLocation()
    const [ drawerOpen, setDrawerOpen ] = useState(false);

    const dismissDrawer = () => (setDrawerOpen(false))

    useEffect(() => {
        const mediaQuery = window.matchMedia('(width >= 992px)');

        const dismissOnLargeScreen = (event) => {
            if (event.matches) {
                dismissDrawer()
            }
        }

        mediaQuery.addEventListener("change", dismissOnLargeScreen);

        return () => {
            mediaQuery.removeEventListener("change", dismissOnLargeScreen);
        }
    }, []);

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

            {/* Hamburger button for smaller screens */}
            <i id="hamburger-menu" className="bi bi-list" onClick={() => (setDrawerOpen(true))}></i>

            <Drawer
                slotProps={{
                    paper: {className: "drawer"}
                }}
                anchor="right"
                open={drawerOpen}
                onClose={() => (dismissDrawer())}
            >
                <Link to="/" className={`header-links ${location.pathname === "/" ? "active-header" : ""}`} onClick={() => (dismissDrawer())}>Home</Link>
                <Link to="/experience" className={`header-links ${location.pathname === "/experience" ? "active-header" : ""}`} onClick={() => (dismissDrawer())}>Experience</Link>
                <Link to="/education" className={`header-links ${location.pathname === "/education" ? "active-header" : ""}`} onClick={() => (dismissDrawer())}>Education</Link>
                <Link to="/projects" className={`header-links ${location.pathname === "/projects" ? "active-header" : ""}`} onClick={() => (dismissDrawer())}>Projects</Link>
            </Drawer>
        </header>
    )
}

export default Header;
