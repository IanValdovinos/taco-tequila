import React from 'react';
import { NavLink } from "react-router-dom";

// Import styles
import styles from './Navbar.module.css';

// Import components
import BaseButton from '../BaseButton';

// Import media
import TransparentLogo from '../../assets/transparent_logo.png';

import InstagramLogo from '../../assets/icons/facebook_white.webp';
import FacebookLogo from '../../assets/icons/instagram_white.webp';

function Navbar({additionalClassNames, background}) {
    return ( 
        <div className={`${additionalClassNames} ${styles.navBar}`} style={{backgroundColor: background}}>
            {/* Logo */}
            <img className={styles.logo} src={TransparentLogo} alt='Logo'/>

            {/* Navigation Options */}
            <div className={styles.optionsContainer}>
                <NavLink className={styles.navbarLink} to="/">
                    Home
                </NavLink>

                <NavLink className={styles.navbarLink} to="/menu">
                    Menu
                </NavLink>

                <NavLink className={styles.navbarLink} to="/gallery">
                    Gallery
                </NavLink>

                <NavLink className={styles.navbarLink} to="/about">
                    About Us
                </NavLink>

                <NavLink className={styles.navbarLink} to="/contact">
                    Contact Us
                </NavLink>

                <img className={styles.socialMediaIcon} src={InstagramLogo} alt='Instagram logo'/>

                <img className={styles.socialMediaIcon} src={FacebookLogo} alt='Facebook logo'/>

                <BaseButton additionalClassNames={styles.navBarButton} color={'black'} text={'Order Now'}></BaseButton>
            </div>
        </div>
     );
}

export default Navbar;