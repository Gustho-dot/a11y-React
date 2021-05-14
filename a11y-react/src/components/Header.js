import React from 'react';
import {
    Link
} from "react-router-dom";



const Header = () => {
    return (
        <section class="nav-section">
            <img class="logo" src="./images/logo.png" alt="logo"></img>
            <nav class="nav">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Link to="/Contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
        </section>
    );
}

export default Header;