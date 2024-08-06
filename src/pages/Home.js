import React, { useState, useEffect } from 'react';

// Import styles
import styles from './Home.module.css';

// Import components
import Navbar from '../components/Navbar';
import HeadingOne from '../components/HeadingOne';
import WindowPicture from '../components/WindowPicture';
import BaseButton from '../components/BaseButton';
import LearnMorePicture from '../components/LearnMorePicture';
import CustomerReview from '../components/CustomerReview';

// Import media
import LogoBlueBackground from '../assets/logo_blue_background.png';

import WindowOne from '../assets/frida_1.jpeg';
import WindowTwo from '../assets/chente.png';
import WindowThree from '../assets/cantinflas.jpg';
import WindowFour from '../assets/catrina_1.png';

import LearnMorePictureOne from '../assets/test_tacos_2.jpg';
import LearnMorePictureTwo from '../assets/tequila_shot.jpg';
import LearnMorePictureThree from '../assets/test_panda_restaurant.jpg';
import LearnMorePictureFour from '../assets/fajitas_pose.jpg';

import ReviewerOnePotrait from '../assets/test_reviewer_one.jpg';
import ReviewerTwoPotrait from '../assets/test_reviewer_two.jpg';
import ReviewerThreePotrait from '../assets/test_reviewer_three.jpg';


function Home() {
    // Use states for the navigation bar background color
    const [getNavBarBackgroundColor, setNavBarBackgroundColor] = useState('#9DBFC1');

    // Use effect to update the navigation bar background color
    useEffect(() => {
        const handleScroll = () => {
            // Get the current scroll position
            const scrollPosition = window.scrollY;

            // Set the scroll threshold (change this value to the point you want the color to change)
            const changeColorPoint = 800;

            // Update the background color based on scroll position
            if (scrollPosition > changeColorPoint) {
                setNavBarBackgroundColor('rgba(255, 255, 255, 0.5)'); // New background color after scroll point
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
            {/* ########## BANNER ########## */}
            <div className={styles.upperBanner}></div>

            <div className={styles.navBar}><Navbar background={getNavBarBackgroundColor}/></div>

            <div className={styles.lowerBanner}>
                <div className={styles.custom_shape_divider_bottom_1722811643}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles.shape_fill}></path>
                    </svg>
                </div>
            </div>

            {/* ########## FIRST CTA SECTION ########## */}
            <div className={styles.firstCTA}>
                {/* Logo */}
                <div className={styles.firstCTALogoContainer}>
                    <img src={LogoBlueBackground} alt='Taco Tequila Y Mas Logo'></img>
                </div>

                {/* Heading */}
                <HeadingOne additionalClassNames={styles.firstCTAHeading}>JOIN US TODAY FOR AN UNFORGETABLE TIME</HeadingOne>

                {/* Window pictures */}
                <div className={styles.windowPictureContainer}>
                    <WindowPicture src={WindowOne}/>
                    <WindowPicture src={WindowTwo}/>
                    <WindowPicture src={WindowThree}/>
                    <WindowPicture src={WindowFour}/>
                </div>

                {/* Order Now Button */}
                <BaseButton additionalClassNames={styles.firstCTAButton} text={'ORDER NOW'} color={'black'}/>

                {/* Bottom curved divider */}
                <div className={styles.custom_shape_divider_bottom_1722894654}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shape_fill}></path>
                    </svg>
                </div>
            </div>

            {/* ########## LEARN MORE PICTURES ########## */}
            <div className={styles.learnMorePicturesSection}>
                <div className={styles.learnMorePicturesContainer}>
                    <LearnMorePicture additionalClassNames={styles.learnMorePictureOne} title={'First time'} src={LearnMorePictureOne}>TACOS</LearnMorePicture>
                    <LearnMorePicture additionalClassNames={styles.learnMorePictureTwo} title={'First time'} src={LearnMorePictureTwo}>TEQUILA</LearnMorePicture>
                    <LearnMorePicture additionalClassNames={styles.learnMorePictureThree} title={'First time'} src={LearnMorePictureThree}>GREAT TIME</LearnMorePicture>
                    <LearnMorePicture additionalClassNames={styles.learnMorePictureFour} title={'First time'} src={LearnMorePictureFour}>AND MORE</LearnMorePicture>
                </div>
            </div>

            {/* ########## SECOND CTA SECTION ########## */}
            <div className={styles.secondCTA}>
                
            </div>

            {/* ########## CUSTOMER REVIEWS ########## */}
            <div className={styles.customerReviewsSection}>
                <div className={styles.customerReviewsContainer}>
                    <CustomerReview src={ReviewerOnePotrait} name={'Alex'}>
                        The street tacos here are the best outside of Detroit.
                        Services is quick and easy, menu as easy to navigate.
                        The ambience leaves a little bit desired, there are a couple of tables to eat your lunch, we often do takeout and take it with us.
                    </CustomerReview>

                    <CustomerReview src={ReviewerTwoPotrait} name={'Alex'}>
                        The street tacos here are the best outside of Detroit.
                        Services is quick and easy, menu as easy to navigate.
                        The ambience leaves a little bit desired, there are a couple of tables to eat your lunch, we often do takeout and take it with us.
                    </CustomerReview>

                    <CustomerReview src={ReviewerThreePotrait} name={'Alex'}>
                        The street tacos here are the best outside of Detroit.
                        Services is quick and easy, menu as easy to navigate.
                        The ambience leaves a little bit desired, there are a couple of tables to eat your lunch, we often do takeout and take it with us.
                    </CustomerReview>
                </div>
            </div>

        </div>
     );
}

export default Home;