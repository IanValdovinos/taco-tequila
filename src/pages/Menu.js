import React from 'react';
import styles from './Menu.module.css'

// Import components
import Navbar from '../components/Navbar';
import HeadingOne from '../components/HeadingOne';
import Footer from '../components/Footer';
import QuickAccessBar from '../components/QuickAccessBar';

// Import media 
import PageOne from '../assets/menu_pages/menu_one.JPG';
import PageTwo from '../assets/menu_pages/menu_two.JPG';

function Menu() {
    return ( 
        <div className={styles.menuPage}>
            {/* ########## NAVIGATION BAR ########## */}
            <Navbar additionalClassNames={styles.navBar} background={'transparent'} page={'menu'}></Navbar>

            {/* ########## QUICK ACCESS BAR ########## */}
            <QuickAccessBar/>

            {/* Ghost space */}
            <div className={styles.ghostSpace}></div>

            {/* ########## MENU PAGES ########## */}
            <HeadingOne additionalClassNames={styles.menuPageTitle}>OUR MENU</HeadingOne>
            <div className={styles.menuPageContainer}>
                <img className={styles.singleMenuPage} src={PageOne} alt='Menu page one'/>
                <img className={styles.singleMenuPage} src={PageTwo} alt='Menu page two'/>
            </div>

            {/* ########## MENU PAGES ########## */}
            <Footer></Footer>
        </div>
     );
}

export default Menu;