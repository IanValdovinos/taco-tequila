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
            <div className={styles.galleryContainer}>
                {/* Row 1 */}
                <div className={styles.photoContainer}>
                    <img src={PhotoOne} alt='Gallery item'></img>
                </div>
                <div className={styles.photoContainer}>
                    <img src={PhotoTwo} alt='Gallery item'></img>
                </div>
                <div className={styles.photoContainer}>
                    <img src={PhotoThree} alt='Gallery item'></img>
                </div>

                {/* Row 2 */}
                <div className={styles.photoContainer}>
                    <img src={PhotoFour} alt='Gallery item'></img>
                </div>
                <div className={styles.photoContainer}>
                    <img src={PhotoFive} alt='Gallery item'></img>
                </div>
                <div className={styles.photoContainer}>
                    <img src={PhotoSix} alt='Gallery item'></img>
                </div>

                {/* Row 3 */}
                <div className={styles.photoContainer}>
                    <img src={PhotoSeven} alt='Gallery item'></img>
                </div>
                <div className={styles.photoContainer}>
                    <img src={PhotoEight} alt='Gallery item'></img>
                </div>
                <div className={styles.photoContainer}>
                    <img src={PhotoNine} alt='Gallery item'></img>
                </div>

                {/* Row 4 */}
                <div className={styles.photoContainer}>
                    <img src={PhotoTen} alt='Gallery item'></img>
                </div>
                <div className={styles.photoContainer}>
                    <img src={PhotoEleven} alt='Gallery item'></img>
                </div>
                <div className={styles.photoContainer}>
                    <img src={PhotoTwelve} alt='Gallery item'></img>
                </div>
            </div>

            {/* Footer */}
            <Footer></Footer>
        </div>
     );
}

export default Gallery;