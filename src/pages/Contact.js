import React, { useState } from 'react';

// Import styles
import styles from './Contact.module.css';

// Import components
import Navbar from '../components/Navbar';
import HeadingOne from '../components/HeadingOne';
import Footer from '../components/Footer';

// Import media
import ContactUsImage from '../assets/test_phone_call.jpeg';

import StickerOne from '../assets/stickers/margarita.png';
import StickerTwo from '../assets/stickers/corn.png';


function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [poc, setPoc] = useState('');
    const [message, setMessage] = useState('');

    function handleFirstNameChange(e) {
        const name = e.target.value;
        setFirstName(name);
    }

    function handleLastNameChange(e) {
        const name = e.target.value;
        setLastName(name);
    }

    function handleEmailChange(e) {
        const emailVal = e.target.value;
        setEmail(emailVal);
    }

    function handlePhoneNumberChange(e) {
        const number = e.target.value;
        setPhoneNumber(number);
    }

    function handlePocChange(e) {
        const poc = e.target.value;
        setPoc(poc);
    }

    function handleMessageChange(e) {
        const message = e.target.value;
        setMessage(message);
    }

    return ( 
        <div className={styles.contactUsPage}>
            {/* ########## NAVIGATION BAR ########## */}
            <Navbar additionalClassNames={styles.navBar}></Navbar>

            {/* ########## PAGE CONTENT ########## */}
            <div className={styles.contactUsPageContent}>
                <div className={styles.contactUsPageContentContainer}>
                    {/* Image section */}
                    <div className={styles.imageSection}>
                        <div className={styles.imageContainer}>
                            <img src={ContactUsImage} alt='Phone call'></img>
                        </div>
                    </div>

                    {/* Form section */}
                    <div className={styles.formSection}>
                        <HeadingOne additionalClassNames={styles.contactUsTitle}>CONTACT US</HeadingOne>

                        <div className={styles.imageContainerMobileSection}>
                            <div className={styles.imageContainerMobile}>
                                <img src={ContactUsImage} alt='Phone call'></img>
                            </div>
                        </div>
                        

                        {/* Form */}
                        <div className={styles.formContainer}>
                            {/* Full name section */}
                            <p>Name</p>
                            <div className={styles.nameContainer}>
                                <div className={styles.nameContainerHalf}>
                                    {/* First Name  */}
                                    <label htmlFor="firstName">First name</label>
                                    <input className={styles.fullSizeInput} type="text" name="firstName" id="firstName" onChange={handleFirstNameChange} value={firstName}></input>
                                </div>
                                <div className={styles.nameContainerHalf}>
                                    {/* Last Name */}
                                    <label htmlFor="lastName">Last name</label>
                                    <input className={styles.fullSizeInput} type="text" name="lastName" id="lastName" onChange={handleLastNameChange} value={lastName}></input>
                                </div>
                            </div>

                            {/* Email */}
                            <div className={styles.inputSection}>
                                <label htmlFor="email">Email</label>
                                <input className={styles.fullSizeInput} type="text" name="email" id="email" onChange={handleEmailChange} value={email}></input>
                            </div>

                            {/* Phone */}
                            <div className={styles.inputSection}>
                                <label htmlFor="phone">Phone</label>
                                <input className={styles.fullSizeInput} type="tel" name="phone" id="phone" placeholder="888 888 8888" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" maxlength="12"  title="Ten digits code" onChange={handlePhoneNumberChange} value={phoneNumber}></input>
                            </div>

                            {/* How did you hear about us? */}
                            <p>How did you hear about us?</p>
                            <div className={styles.inputSection}>
                                <select className={styles.fullSizeInput} name="poc" id="poc" onChange={handlePocChange} value={poc}>
                                    <option value="volvo">Option 1</option>
                                    <option value="saab">Option 2</option>
                                    <option value="mercedes">Option 3</option>
                                </select>
                            </div>

                            {/* Message area */}
                            <div className={styles.inputSection}>
                                <label for="message">Message</label>
                                <textarea className={styles.messageTextArea} id="message" name="message" rows="4" cols="50"></textarea>
                            </div>
                        </div>
                    </div>
                </div> 

                {/* Stickers */}
                <img className={styles.stickerOne} src={StickerOne} alt='Decorative sticker'/>
                <img className={styles.stickerTwo} src={StickerTwo} alt='Decorative sticker'/>
            </div>

            {/* ########## FOOTER ########## */}
            <Footer></Footer>
        </div>
     );
}

export default Contact;