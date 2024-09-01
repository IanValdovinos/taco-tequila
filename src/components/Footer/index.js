import React from 'react';

// Import styles
import styles from './Footer.module.css';

// Import components
import HeadingTwo from '../HeadingTwo';
import HeadingThree from '../HeadingThree';
import ParagraphOne from '../ParagraphOne';

function Footer() {
    return ( 
        <div className={styles.footer}>
            {/* Map */}
            <div className={styles.footerContainer}>
                <iframe className={styles.footerMap} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5880.771282581795!2d-83.10886052399698!3d42.525862124610676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824c50b52dd3f17%3A0x7af18acd06f603f1!2sTaco%20Tequila%20Y%20Mas!5e0!3m2!1sen!2sus!4v1723405951839!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Taco Tequika Y Mas Location'></iframe>
                <ParagraphOne additionalClassNames={styles.whaleMediaMobile}>Made by <a className={styles.companyNameLink} href='https://www.instagram.com/whale_media_agency/' target='blank'>Whale Media</a> 🐋</ParagraphOne>
            </div>

            {/* Contact information */}
            <div className={styles.contactInfoContainer}>
                <HeadingTwo>TACO TEQUILA Y MAS</HeadingTwo>
                <HeadingThree>CONTACT</HeadingThree>
                <ParagraphOne>31660 John R Rd, Madison Heights, MI 48071</ParagraphOne>
                <ParagraphOne>tacotequila@gmail.com</ParagraphOne>
                <ParagraphOne>(248) 333-3333</ParagraphOne>
                <ParagraphOne additionalClassNames={styles.whaleMediaDesktop}>Made by <a className={styles.companyNameLink} href='https://www.instagram.com/whale_media_agency/' target='blank'>Whale Media</a> 🐋</ParagraphOne>
            </div>

            {/* Hours */}
            <div className={styles.hoursContainer}>
                <HeadingThree>HOURS</HeadingThree>
                <ParagraphOne>Mon–Wed 6–11</ParagraphOne>
                <ParagraphOne>Mon–Wed 6–11</ParagraphOne>
                <ParagraphOne>Mon–Wed 6–11</ParagraphOne>
                <ParagraphOne>Mon–Wed 6–11</ParagraphOne>
                <ParagraphOne>Mon–Wed 6–11</ParagraphOne>
                <ParagraphOne>Mon–Wed 6–11</ParagraphOne>
                <ParagraphOne>Mon–Wed 6–11</ParagraphOne>
                <a href='https://www.opentable.com/'>Make a reservation</a>
            </div>
        </div>
    );
}

export default Footer;