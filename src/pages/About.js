import React from 'react';

// Import styles
import styles from './About.module.css';

// Import media
import FamilyPicture from '../assets/test_family.jpg';

// Import components
import Navbar from '../components/Navbar';
import HeadingOne from '../components/HeadingOne';
import HeadingTwo from '../components/HeadingTwo';
import ParagraphOne from '../components/ParagraphOne';
import BaseButton from '../components/BaseButton';
import Footer from '../components/Footer';

function About() {
    return ( 
        <div>
            {/* ########## NAVIGATION BAR ########## */}
            <Navbar additionalClassNames={styles.navBar} background={'transparent'}></Navbar>
            

            {/* ########## BANNER ########## */}
            <div className={styles.banner}>
                <HeadingOne additionalClassNames={styles.aboutTitle}>ABOUT US</HeadingOne>
            </div>

            {/* ########## ABOUT US CONTENT ########## */}
            <div className={styles.aboutUsContentContainer}>
                {/* Picture and title */}
                <div>
                    <HeadingTwo additionalClassNames={styles.famPhotoTitle}>AN AUTHENTIC EXPERIENCE BROUGHT BY AN AUTHENTIC FAMILY</HeadingTwo>
                    <div className={styles.familyPhotoContainer}>
                        <img src={FamilyPicture} alt='Family'></img>
                    </div>
                </div>
                
                {/* About Us text */}
                <div className={styles.aboutUsTextContainer}>
                    <div>
                        <ParagraphOne>BEGINNING IN 20XX WITH THE SUCCESS OF TACO TIENDA, WE NOW INTRODUCE OUR NEWEST VENTURE - TACO TEQUILA Y MAS.</ParagraphOne>
                        <ParagraphOne>OUR GOAL IS TO DELIVER A FUN MEXICAN EXPERIENCE WHILE MAINTAINING THE AUTHENTIC FLAVORS WE'RE KNOWN FOR.</ParagraphOne>
                        <ParagraphOne>WE LOOK FORWARD TO YOU EXPERIENCING THE MOST AUTHENTIC ATMOSPHERE AROUND</ParagraphOne>
                        <ParagraphOne>BEGINNING IN 20XX WITH THE SUCCESS OF TACO TIENDA, WE NOW INTRODUCE OUR NEWEST VENTURE - TACO TEQUILA Y MAS.</ParagraphOne>
                        <BaseButton color={'black'} text={'MAKE A RESERVATION'}></BaseButton>
                    </div>
                </div>
            </div>

            {/* ########## ABOUT US CONTENT ########## */}
            <Footer></Footer>
        </div>
     );
}

export default About;