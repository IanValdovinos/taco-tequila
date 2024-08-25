import React from 'react';
import styles from './Menu.module.css'

// Import components
import Navbar from '../components/Navbar';
import HeadingOne from '../components/HeadingOne';
import Footer from '../components/Footer';

// Import media 
import PageOne from '../assets/menu_pages/page_one.jpg';
import PageTwo from '../assets/menu_pages/page_two.jpg';
import PageThree from '../assets/menu_pages/page_three.jpg';
import PageFour from '../assets/menu_pages/page_four.jpg';

function Menu() {
    return ( 
        <div className={styles.menuPage}>
            {/* ########## NAVIGATION BAR ########## */}
            <Navbar additionalClassNames={styles.navBar} background={'transparent'}></Navbar>

            {/* Ghost space */}
            <div className={styles.ghostSpace}></div>

            {/* ########## MENU PAGES ########## */}
            <HeadingOne additionalClassNames={styles.menuPageTitle}>OUR MENU</HeadingOne>
            <div className={styles.menuPageContainer}>
                <img className={styles.singleMenuPage} src={PageOne} alt='Menu page one'/>
                <img className={styles.singleMenuPage} src={PageTwo} alt='Menu page two'/>
                <img className={styles.singleMenuPage} src={PageThree} alt='Menu page three'/>
                <img className={styles.singleMenuPage} src={PageFour} alt='Menu page four'/>
            </div>

            {/* ########## MENU PAGES ########## */}
            <Footer></Footer>
        </div>
     );
}

export default Menu;