import React from 'react';

// Import styles
import styles from './Contact.module.css';

// Import components
import Navbar from '../components/Navbar';
import HeadingOne from '../components/HeadingOne';
import Footer from '../components/Footer';

// Import media
import ContactUsImage from '../assets/test_phone_call.jpeg';

function Contact() {
    return ( 
        <div className={styles.contactUsPage}>
            {/* ########## NAVIGATION BAR ########## */}
            <Navbar additionalClassNames={styles.navBar}></Navbar>

            {/* ########## PAGE CONTENT ########## */}
            <div className={styles.contactUsPageContent}>
                <div className={styles.contactUsPageContentContainer}>
                    {/* Image section */}
                    <div>
                        <div className={styles.imageContainer}>
                            <img src={ContactUsImage} alt='Phone call'></img>
                        </div>
                    </div>

                    {/* Form section */}
                    <div className={styles.formContainer}>
                        <HeadingOne additionalClassNames={styles.contactUsTitle}>CONTACT US</HeadingOne>
                    </div>
                </div> 
            </div>
            

            {/* ########## FOOTER ########## */}
            <Footer></Footer>
        </div>
     );
}

export default Contact;