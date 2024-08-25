import React from 'react';

// Import styles
import styles from './Gallery.module.css';

// Import components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import media
import PhotoOne from '../assets/gallery/test_birria.jpeg';
import PhotoTwo from '../assets/gallery/test_burrito.jpeg';
import PhotoThree from '../assets/gallery/test_chile_relleno.jpeg';
import PhotoFour from '../assets/gallery/test_ench.jpeg';
import PhotoFive from '../assets/gallery/test_enfrijoladas.jpeg';
import PhotoSix from '../assets/gallery/test_taco_combo.jpeg';
import PhotoSeven from '../assets/gallery/test_tacos_dorados.jpeg';
import PhotoEight from '../assets/gallery/test_tacos.jpeg';
import PhotoNine from '../assets/gallery/test_tamal.jpeg';
import PhotoTen from '../assets/gallery/test_birria.jpeg';
import PhotoEleven from '../assets/gallery/test_burrito.jpeg';
import PhotoTwelve from '../assets/gallery/test_chile_relleno.jpeg';

function Gallery() {
    return ( 
        <div>
            {/* ########## NAVIGATION BAR ########## */}
            <div className={styles.navBarContainer}>
                <Navbar additionalClassNames={styles.navBar} background={'transparent'}></Navbar>
            </div>

            {/* ########## GALLERY CONTENT ########## */}
            <div className={styles.mediaContent}>
                {/* Left Column */}
                <div className={styles.mediaContentColumn}>
                    <div className={`${styles.pictureFrame} ${styles.horizontalPicture}`}>
                        <img src={PhotoOne} alt={'food'}/>
                    </div>

                    <div className={`${styles.pictureFrame} ${styles.verticalPicture}`}>
                        <img src={PhotoTwo} alt={'food'}/>
                    </div>

                    <div className={`${styles.pictureFrame} ${styles.squarePicture}`}>
                        <img src={PhotoThree} alt={'food'}/>
                    </div>

                    <div className={`${styles.pictureFrame} ${styles.horizontalPicture}`}>
                        <img src={PhotoFour} alt={'food'}/>
                    </div>
                </div>

                {/* Middle Column */}
                <div  className={styles.mediaContentColumn}>
                    <div className={`${styles.pictureFrame} ${styles.verticalPicture}`}>
                        <img src={PhotoFive} alt={'food'}/>
                    </div>

                    <div className={`${styles.pictureFrame} ${styles.squarePicture}`}>
                        <img src={PhotoSix} alt={'food'}/>
                    </div>

                    <div className={`${styles.pictureFrame} ${styles.horizontalPicture}`}>
                        <img src={PhotoSeven} alt={'food'}/>
                    </div>

                    <div className={`${styles.pictureFrame} ${styles.horizontalPicture}`}>
                        <img src={PhotoEight} alt={'food'}/>
                    </div>
                </div>

                {/* Right Column */}
                <div className={`${styles.mediaContentColumn} ${styles.rightColumn}`}>
                    <div className={`${styles.pictureFrame} ${styles.horizontalPicture}`}>
                        <img src={PhotoNine} alt={'food'}/>
                    </div>

                    <div className={`${styles.pictureFrame} ${styles.squarePicture}`}>
                        <img src={PhotoTen} alt={'food'}/>
                    </div>

                    <div className={`${styles.pictureFrame} ${styles.horizontalPicture}`}>
                        <img src={PhotoEleven} alt={'food'}/>
                    </div>

                    <div className={`${styles.pictureFrame} ${styles.verticalPicture}`}>
                        <img src={PhotoTwelve} alt={'food'}/>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer></Footer>
        </div>
     );
}

export default Gallery;