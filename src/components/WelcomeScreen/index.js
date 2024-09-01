import React from 'react';

// Import styles
import styles from './WelcomeScreen.module.css';

// Import components
import WelcomeScreenMobile from './WelcomeScreenMobile';

function WelcomeScreen() {
    return ( 
        <div>
            <WelcomeScreenMobile />
        </div>
    );
}

export default WelcomeScreen;