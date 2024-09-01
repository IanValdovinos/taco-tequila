import React from 'react';

// Import styles 
import styles from './QuickAccessBar.module.css';

// Import media
import Bottle from '../../assets/bottle_icon_one.png';
import YelpLogo from '../../assets/icons/yelp_logo.png';
import MapsLogo from '../../assets/icons/maps_logo.png';

function QuickAccessBar() {
    return ( 
        <div className={styles.quickAccessBar}>
            <img className={styles.bottleImage} src={Bottle} alt={'Quick access bar'}/>

            <a href='https://www.yelp.com/' target='blank'><img className={styles.yelpLogo} src={YelpLogo} alt={'Yelp logo'}/></a>

            <a href='https://maps.app.goo.gl/sgtnxmo1kFb1AKNg7' target='blank'><img className={styles.mapsLogo} src={MapsLogo} alt={'Maps logo logo'}/></a>
            
        </div>
    );
}

export default QuickAccessBar;