import React, { useState, useEffect } from 'react';

// Import styles
import styles from './BannerDesktop.module.css';

// Import components
import Navbar from '../Navbar';

function Banner() {
    const [getNavBarBackgroundColor, setNavBarBackgroundColor] = useState('#9DBFC1'); // Initial background color

    useEffect(() => {
        const handleScroll = () => {
            // Get the current scroll position
            const scrollPosition = window.scrollY;

            // Set the scroll threshold (change this value to the point you want the color to change)
            const changeColorPoint = 1500;

            // Update the background color based on scroll position
            if (scrollPosition > changeColorPoint) {
                setNavBarBackgroundColor('orange'); // New background color after scroll point
            } else {
                setNavBarBackgroundColor('#9DBFC1'); // Original background color
            }
        };
    
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        // Clean up event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);
      
    return ( 
        <div>
            <div className={styles.upperBanner}></div>

            <div className={styles.navBar}><Navbar background={getNavBarBackgroundColor}/></div>

            <div className={styles.lowerBanner}>
                <div className={styles.custom_shape_divider_bottom_1722811643}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles.shape_fill}></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Banner;