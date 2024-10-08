import React from "react";
import {Link} from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <h1>THRIVER<br></br> CODERS<br></br> 03</h1>
                </div>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="about" className="nav-link">About</Link>
                    <Link to="projectlist" className="nav-link">Projects</Link>
                    <Link to="skills" className="nav-link">Skills</Link>
                    <Link to="contact" className="nav-link">Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;