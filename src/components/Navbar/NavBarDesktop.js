import React from 'react';
import { NavLink } from "react-router-dom";

// Import styles
import styles from './NavBarDesktop.module.css';

// Import components
import BaseButton from '../BaseButton';
import ParagraphOne from '../ParagraphOne';

// Import media
import TransparentLogo from '../../assets/transparent_logo.png';

import InstagramLogo from '../../assets/icons/facebook_white.webp';
import FacebookLogo from '../../assets/icons/instagram_white.webp';

function NavBarDesktop({additionalClassNames, background, position, page}) {

    let homeLink;
    if (page === 'home') {
        homeLink = <NavLink className={`${styles.navbarLink} ${styles.selectedNavbarLink}`} to="/"><ParagraphOne>Home</ParagraphOne></NavLink>
    } else {
        homeLink = <NavLink className={styles.navbarLink} to="/"><ParagraphOne>Home</ParagraphOne></NavLink>
    }

    let menuLink;
    if (page === 'menu') {
        menuLink = <NavLink className={`${styles.navbarLink} ${styles.selectedNavbarLink}`} to="/menu"><ParagraphOne>Menu</ParagraphOne></NavLink>
    } else {
        menuLink = <NavLink className={styles.navbarLink} to="/menu"><ParagraphOne>Menu</ParagraphOne></NavLink>
    }

    let galleryLink;
    if (page === 'gallery') {
        galleryLink = <NavLink className={`${styles.navbarLink} ${styles.selectedNavbarLink}`} to="/gallery"><ParagraphOne>Gallery</ParagraphOne></NavLink>
    } else {
        galleryLink = <NavLink className={styles.navbarLink} to="/gallery"><ParagraphOne>Gallery</ParagraphOne></NavLink>
    }

    let aboutLink;
    if (page === 'about') {
        aboutLink = <NavLink className={`${styles.navbarLink} ${styles.selectedNavbarLink}`} to="/about"><ParagraphOne>About</ParagraphOne></NavLink>
    } else {
        aboutLink = <NavLink className={styles.navbarLink} to="/about"><ParagraphOne>About</ParagraphOne></NavLink>
    }

    let contactLink;
    if (page === 'contact') {
        contactLink = <NavLink className={`${styles.navbarLink} ${styles.selectedNavbarLink}`} to="/contact"><ParagraphOne>Contact</ParagraphOne></NavLink>
    } else {
        contactLink = <NavLink className={styles.navbarLink} to="/contact"><ParagraphOne>Contact</ParagraphOne></NavLink>
    }

    return ( 
        <div className={`${additionalClassNames} ${styles.navBar}`} style={{backgroundColor: background, position: position}}>
            {/* Logo */}
            <img className={styles.logo} src={TransparentLogo} alt='Logo'/>

            {/* Navigation Options */}
            <div className={styles.optionsContainer}>

                { homeLink }

                { menuLink }

                { galleryLink }

                { aboutLink }

                { contactLink }

                <img className={styles.socialMediaIcon} src={InstagramLogo} alt='Instagram logo'/>

                <img className={styles.socialMediaIcon} src={FacebookLogo} alt='Facebook logo'/>

                <BaseButton additionalClassNames={styles.navBarButton} color={'black'} text={'Order Now'}></BaseButton>
            </div>
        </div>
    );
}

export default NavBarDesktop;