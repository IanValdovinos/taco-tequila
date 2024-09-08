import React, { useState, useEffect } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Import styles
import styles from './Home.module.css';

// Import components
import Navbar from '../components/Navbar';
import HeadingOne from '../components/HeadingOne';
import WindowPicture from '../components/WindowPicture';
import BaseButton from '../components/BaseButton';
import LearnMorePicture from '../components/LearnMorePicture';
import CustomerReview from '../components/CustomerReview';
import SlideShowOne from '../components/SlideShowOne';
import Footer from '../components/Footer';
import QuickAccessBar from '../components/QuickAccessBar';

// Import media
import LogoBlueBackground from '../assets/logo_blue_background.png';
import LogoTransparentBackground from '../assets/transparent_logo.png';

import UpperBannerCover from '../assets/test_tacos.jpg';
import UpperBannerVideo from '../assets/videos/test_cooking.mp4';

import WindowOne from '../assets/frida_1.jpeg';
import WindowTwo from '../assets/chente.png';
import WindowThree from '../assets/cantinflas.jpg';
import WindowFour from '../assets/catrina_1.png';

import LearnMorePictureOne from '../assets/test_tacos_2.jpg';
import LearnMorePictureTwo from '../assets/tequila_shot.jpg';
import LearnMorePictureThree from '../assets/test_panda_restaurant.jpg';
import LearnMorePictureFour from '../assets/fajitas_pose.jpg';

import SpinningPlateLearnMoreSection from '../assets/test_two_taco.webp';

import SpinningPlateOne from '../assets/test_top_down_tacos.webp';
import SpinningPlateTwo from '../assets/test_top_down_tacos_4.webp';

import ReviewerOnePotrait from '../assets/test_reviewer_one.jpg';
import ReviewerTwoPotrait from '../assets/test_reviewer_two.jpg';
import ReviewerThreePotrait from '../assets/test_reviewer_three.jpg';

import DoorDashLogo from '../assets/icons/door_dash_logo.png';
import UberEatsLogo from '../assets/icons/uber_eats_logo.png';
import GrubhubLogo from '../assets/icons/grub_hub_logo.png';


function Home() {
    // Use states for the navigation bar background color
    const [getNavBarBackgroundColor, setNavBarBackgroundColor] = useState('#9DBFC1');

    // Use state for the visibility of the easy access bar
    const [getEasyAccessBarOpacity, setEasyAccessBarOpacity] = useState('0');

    // Use effect to update the navigation bar background color
    useEffect(() => {
        const handleScroll = () => {
            // Get the specific element
            const targetElement = document.getElementById('homePageNavBar');

            if (targetElement) {
                // Get the element's position relative to the viewport
                const rect = targetElement.getBoundingClientRect();
                
                // Check if the element is at the top of the viewport
                if (rect.top <= 0) {
                    setNavBarBackgroundColor('transparent'); // New background color when element reaches the top
                    setEasyAccessBarOpacity('1'); // Display quick access bar
                } else {
                    setNavBarBackgroundColor('#9DBFC1'); // Original background color
                    setEasyAccessBarOpacity('0'); // Hide quick access bar
                }
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
        <div className={styles.homePage}>
            {/* ########## BANNER ########## */}
            <div className={styles.upperBanner}>
                {/* Background video */}
                <div className={styles.bannerVideo}>
                    <video className={styles.bannerVideoContent} autoPlay muted loop poster={UpperBannerCover}>
                        <source src={UpperBannerVideo} type="video/webm" />
                        Your browser is not supported!
                    </video>

                    {/* Logo in upper banner */}
                    <img className={styles.bannerLogo} src={LogoTransparentBackground} alt='Banner logo'></img>
                </div> 
            </div>

            <div id='homePageNavBar' className={styles.navBar}><Navbar background={getNavBarBackgroundColor} page={'home'}/></div>

            <div className={styles.lowerBanner}>
                <div className={styles.custom_shape_divider_bottom_1722811643}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles.shape_fill}></path>
                    </svg>
                </div>
            </div>

            {/* ########## QUICK ACCESS BAR ########## */}
            <QuickAccessBar opacity={getEasyAccessBarOpacity}/>

            <div className={styles.homePageContent}>
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
                    <div className={styles.firstCTAButtonContainer}>
                        <BaseButton additionalClassNames={styles.firstCTAButton} text={'ORDER NOW'} color={'black'}/>
                        <BaseButton additionalClassNames={styles.firstCTAButton} text={'RESERVE NOW'} color={'black'}/>
                    </div>

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

                        <img className={styles.learnMoreSpinningPlate} src={SpinningPlateLearnMoreSection} alt='Spinning taco decorative item'/>
                    </div>

                    <img className={styles.spinningPlateOne} src={SpinningPlateOne} alt='Spinning plate one'/>
                    <img className={styles.spinningPlateTwo} src={SpinningPlateTwo} alt='Spinning plate two'/>
                </div>

                {/* ########## SLIDESHOW ########## */}
                <SlideShowOne />

                {/* ########## THIRD PARTY APPS ########## */}
                <div className={styles.deliveryAvailableSection}>
                    <HeadingOne>Delivery Available</HeadingOne>
                    <div className={styles.deliveryAvailableContainer}>
                        <a href='https://www.doordash.com' target='blank'><img className={styles.deliveryAvailableSectionDD} src={DoorDashLogo} alt='Door Dash Logo'/></a>
                        <a href='https://www.ubereats.com' target='blank'><img className={styles.deliveryAvailableSectionUE} src={UberEatsLogo} alt='Uber Eats Logo'/></a>
                        <a href='https://www.grubhub.com' target='blank'><img className={styles.deliveryAvailableSectionDD} src={GrubhubLogo} alt='Grubhub Logo'/></a>
                    </div>

                    {/* <img className={styles.stickerOne} src={StickerOne} alt='Decorative sticker'/> */}
                </div>


                {/* ########## CUSTOMER REVIEWS ########## */}
                <div className={styles.customerReviewsSection}>
                    <HeadingOne additionalClassNames={styles.reviewsTitle}>CUSTOMER REVIEWS</HeadingOne>

                    {/* DESKTOP VIEW */}
                    <div className={styles.customerReviewsContainer}>
                        <CustomerReview src={ReviewerOnePotrait} name={'Alex'}>
                            The street tacos here are the best outside of Detroit.
                            Services is quick and easy, menu as easy to navigate.
                        </CustomerReview>

                        <CustomerReview src={ReviewerTwoPotrait} name={'Alex'}>
                            The street tacos here are the best outside of Detroit.
                            Services is quick and easy, menu as easy to navigate.
                        </CustomerReview>

                        <CustomerReview src={ReviewerThreePotrait} name={'Alex'}>
                            The street tacos here are the best outside of Detroit.
                            Services is quick and easy, menu as easy to navigate.
                        </CustomerReview>

                        <CustomerReview src={ReviewerThreePotrait} name={'Alex'}>
                            The street tacos here are the best outside of Detroit.
                            Services is quick and easy, menu as easy to navigate.
                        </CustomerReview>
                    </div>

                    {/* MOBILE VIEW */}
                    <div className={styles.customerReviewsContainerCarousel}>
                        <Carousel infiniteLoop={true} showIndicators={false} preventMovementUntilSwipeScrollTolerance='true' swipeScrollTolerance='50'>
                            <CustomerReview src={ReviewerOnePotrait} name={'Alex'}>
                                The street tacos here are the best outside of Detroit.
                                Services is quick and easy, menu as easy to navigate.
                            </CustomerReview>

                            <CustomerReview src={ReviewerTwoPotrait} name={'Alex'}>
                                The street tacos here are the best outside of Detroit.
                                Services is quick and easy, menu as easy to navigate.
                            </CustomerReview>

                            <CustomerReview src={ReviewerThreePotrait} name={'Alex'}>
                                The street tacos here are the best outside of Detroit.
                                Services is quick and easy, menu as easy to navigate.
                            </CustomerReview>

                            <CustomerReview src={ReviewerThreePotrait} name={'Alex'}>
                                The street tacos here are the best outside of Detroit.
                                Services is quick and easy, menu as easy to navigate.
                            </CustomerReview>       
                        </Carousel>
                    </div>

                    {/* Curved divider */}
                    <div className={styles.custom_shape_divider_bottom_1723407545}>
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={styles.shape_fill}></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={styles.shape_fill}></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={styles.shape_fill}></path>
                        </svg>
                    </div>
                </div>

                {/* ########## FOOTER ########## */}
                <Footer></Footer>

            </div>
        </div>
     );
}

export default Home;