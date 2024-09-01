import React from 'react';
import { NavLink } from 'react-router-dom';

// Import styles
import styles from './WelcomeScreenMobile.module.css';

// Import media
import TransparentLogo from '../../assets/transparent_logo.png';

// Import components
import BaseButton from '../BaseButton';

function WelcomeScreenMobile({additionalClassnames}) {

    function handleOptionSelect() {
        document.getElementById("welcomeScreenMobile").style.display = "none";
        document.body.style.overflow = 'auto';
    
        window.scrollTo({
            top: 0
        });
    }

    return ( 
        <div id='welcomeScreenMobile' className={styles.welcomeScreenMobile} style={{backgroundColor: 'transparent'}}>
            <div className={styles.blurredScreen}>
                <img className={styles.Logo} src={TransparentLogo} alt='Log'/>

                <div className={styles.optionsContainer}>
                    <NavLink className={styles.navLink} onClick={handleOptionSelect} to="/">
                        <p>Order Online</p>
                    </NavLink>

                    <NavLink className={styles.navLink} onClick={handleOptionSelect} to="/menu">
                        <p>View Menu</p>
                    </NavLink>
                    
                    <NavLink className={styles.navLink} onClick={handleOptionSelect} to="/home">
                        <p>Reservations</p>
                    </NavLink>
                    
                    <NavLink className={styles.navLink} onClick={handleOptionSelect} to="/home">
                        <p>Directions</p>
                    </NavLink>

                    <BaseButton text={"CONTINUE TO SITE"} onClick={handleOptionSelect}/>
                </div>
            </div>
        </div>
    );
}

export default WelcomeScreenMobile;