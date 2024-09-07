import React from 'react';

// Styles
import styles from './NavBarMobile.module.css';

// Import Media
import TransparentLogo from '../../assets/transparent_logo.png';
import HamburgerIcon from '../../assets/icons/white_hamburger_icon_with_border.png';

function NavBarMobile({additionalClassNames, background, position}) {
    /* Open when someone clicks on the span element */
    function handleOpenClick() {
        document.getElementById("overlayNav").style.width = "100%";
        document.body.style.overflow = 'hidden';
    }

    return ( 
        <div className={`${additionalClassNames} ${styles.navBar}`} style={{backgroundColor: background, position: position}}>
            {/* -------- Navigation Bar -------- */}
            {/* Logo */}
            <img className={styles.logo} src={TransparentLogo} alt='Logo'/>

            {/* Hamburger icon */}
            <img className={styles.hamburger} src={HamburgerIcon} alt='Hamburger Icon (open menu)' onClick={handleOpenClick}/>

        </div>
    );
}

export default NavBarMobile;