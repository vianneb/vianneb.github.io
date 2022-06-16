import React, { useState } from "react";

export function Navbar(props) {
    //state to track whether hamburger is clicked
    const [isClicked, setIsClicked] = useState(false);

    return (

        <nav className="NavbarItems mb-5">
            <h1 className="navbar-logo">VIANNE BUINGUYEN</h1>
            <div className="menu-icon" onClick={() => setIsClicked(!isClicked)}>
                <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>

                <li className="nav-links">
                    <a href="" className="link">
                        Resume
                    </a>
                </li>

                <li className="nav-links">
                    <a href="mailto: vianneb@uw.edu" className="link">

                        <i className="fa-solid fa-envelope fa-lg nav-icon"></i>

                    </a>
                </li>

                <li className="nav-links">
                    <a href="https://www.linkedin.com/in/viannebuinguyen/" className="link">
                        <i className="fa-brands fa-linkedin fa-lg nav-icon"></i>
                    </a>
                </li>

                <li className="nav-links">
                    <a href="https://github.com/vianneb" className="link">
                        <i className="fa-brands fa-github fa-lg nav-icon"></i>
                    </a>
                </li>

            </ul>
        </nav>

    )
}