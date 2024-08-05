import React from 'react';
import { NavLink } from "react-router-dom";

// Import styles
import styles from './Navbar.module.css';

function Navbar({additionalClassNames, background}) {
    return ( 
        <div className={`${additionalClassNames} ${styles.navBar}`} style={{backgroundColor: background}} >
            <ul>
                <NavLink className={styles.navOption} to="/">Home</NavLink>
                <NavLink className={styles.navOption} to="/menu">Menu</NavLink>
                <NavLink className={styles.navOption} to="/gallery">Gallery</NavLink>
            </ul>
        </div>
     );
}

export default Navbar;