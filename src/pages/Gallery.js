import React from 'react';

// Import styles
import styles from './Gallery.module.css';

// Import components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuickAccessBar from '../components/QuickAccessBar';

// Import media
import PhotoOne from '../assets/gallery/ddh_birria_burrito_upper_view.jpg';
import PhotoTwo from '../assets/gallery/ddh_chip_salsa_guacamole.jpg';
import PhotoThree from '../assets/gallery/ddh_modelo.jpg';
import PhotoFour from '../assets/gallery/ddh_shrimps.jpg';
import PhotoFive from '../assets/gallery/ddh_arroz_con_leche.jpg';
import PhotoSix from '../assets/gallery/ddh_burrito_upper_view.jpg';
import PhotoSeven from '../assets/gallery/ddh_three_tacos.jpg';
import PhotoEight from '../assets/gallery/ddh_clay_pot_chips.jpg';
import PhotoNine from '../assets/gallery/ddh_enchiladas_poblanas.jpg';
import PhotoTen from '../assets/gallery/ddh_chocolate_cake.jpg';
import PhotoEleven from '../assets/gallery/ddh_pozole.jpg';
import PhotoTwelve from '../assets/gallery/ddh_fajitas_top_down.jpg';

function Gallery() {
    return ( 
        <div>
            {/* ########## NAVIGATION BAR ########## */}
            <div className={styles.navBarContainer}>
                <Navbar additionalClassNames={styles.navBar} background={'transparent'} page={'gallery'}></Navbar>
            </div>

            {/* ########## QUICK ACCESS BAR ########## */}
            <QuickAccessBar/>

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