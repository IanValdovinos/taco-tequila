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
            <Navbar additionalClassNames={styles.navBar} background={'transparent'} page={'about'}></Navbar>
            

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
                        <ParagraphOne additionalClassNames={styles.contentParagraph}>
                            After the succession of Taco Tienda restaurant, we want to welcome you to Taco Tequila Y Mas, where tradition meets modernity. Our restaurant is dedicated to preserving the rich, authentic flavors of Mexico while infusing them with a modern, stylish twist. We take pride in crafting each dish with time-honored recipes and the freshest ingredients, resulting in tacos that burst with genuine flavor and character. Complement your meal with our curated selection of premium tequilas, each carefully chosen to enhance your dining experience. At Taco Tequila Y Mas, we celebrate the vibrant essence of Mexican cuisine in an elegant, inviting atmosphere that reflects our passion for both tradition and innovation.
                        </ParagraphOne>
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