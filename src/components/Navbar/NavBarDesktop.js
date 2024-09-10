import React from 'react';
import { NavLink } from "react-router-dom";

// Import styles
import styles from './NavBarDesktop.module.css';

// Import components
import BaseButton from '../BaseButton';
import ParagraphOne from '../ParagraphOne';

// Import media
import TransparentLogo from '../../assets/transparent_logo.png';

import FacebookLogo from '../../assets/icons/facebook_white.webp';
import InstagramLogo from '../../assets/icons/instagram_white.webp';
import ReservationIcon from '../../assets/icons/white_calendar_icon_two.jpg';

function NavBarDesktop({additionalClassNames, background, position, page, onOptionSelect}) {

    let homeLink;
    if (page === 'home') {
        homeLink = <NavLink onClick={onOptionSelect} className={`${styles.navbarLink} ${styles.selectedNavbarLink}`} to="/"><ParagraphOne>Home</ParagraphOne></NavLink>
    } else {
        homeLink = <NavLink onClick={onOptionSelect} className={styles.navbarLink} to="/"><ParagraphOne>Home</ParagraphOne></NavLink>
    }

    let menuLink;
    if (page === 'menu') {
        menuLink = <NavLink onClick={onOptionSelect} className={`${styles.navbarLink} ${styles.selectedNavbarLink}`} to="/menu"><ParagraphOne>Menu</ParagraphOne></NavLink>
    } else {
        menuLink = <NavLink onClick={onOptionSelect} className={styles.navbarLink} to="/menu"><ParagraphOne>Menu</ParagraphOne></NavLink>
    }

    let galleryLink;
    if (page === 'gallery') {
        galleryLink = <NavLink onClick={onOptionSelect} className={`${styles.navbarLink} ${styles.selectedNavbarLink}`} to="/gallery"><ParagraphOne>Gallery</ParagraphOne></NavLink>
    } else {
        galleryLink = <NavLink onClick={onOptionSelect} className={styles.navbarLink} to="/gallery"><ParagraphOne>Gallery</ParagraphOne></NavLink>
    }

    let aboutLink;
    if (page === 'about') {
        aboutLink = <NavLink onClick={onOptionSelect} className={`${styles.navbarLink} ${styles.selectedNavbarLink}`} to="/about"><ParagraphOne>About</ParagraphOne></NavLink>
    } else {
        aboutLink = <NavLink onClick={onOptionSelect} className={styles.navbarLink} to="/about"><ParagraphOne>About</ParagraphOne></NavLink>
    }

    let contactLink;
    if (page === 'contact') {
        contactLink = <NavLink onClick={onOptionSelect} className={`${styles.navbarLink} ${styles.selectedNavbarLink}`} to="/contact"><ParagraphOne>Contact</ParagraphOne></NavLink>
    } else {
        contactLink = <NavLink onClick={onOptionSelect} className={styles.navbarLink} to="/contact"><ParagraphOne>Contact</ParagraphOne></NavLink>
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

                <a className={styles.socialMediaLink} href='https://www.facebook.com/profile.php?id=100092913590205' target='blank'><img className={styles.socialMediaIcon} src={FacebookLogo} alt='Facebook logo'/></a>

                <a className={styles.socialMediaLink} href='https://www.instagram.com/tacotequilaymas/' target='blank'><img className={styles.socialMediaIcon} src={InstagramLogo} alt='Instagram logo'/></a>

                <a className={styles.socialMediaLink} href='https://www.opentable.com/' target='blank'><img className={styles.socialMediaIconMedium} src={ReservationIcon} alt='Reservation icon'/></a>

                <BaseButton additionalClassNames={styles.navBarButton} color={'black'} text={'Order Now'}></BaseButton>
            </div>
        </div>
    );
}

export default NavBarDesktop;