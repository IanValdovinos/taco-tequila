import React from 'react';

// Import styles
import styles from './Navbar.module.css';

import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';

function Navbar({additionalClassNames, background, position, page}) {

    // Scroll to top of the page upon page selection
    const handleOptionSelection = () => {
        window.scrollTo({
            top: 0
        });
    };
    

    return ( 
        <div>
            {/* DESKTOP NAVIGATION BAR */}
            <NavBarDesktop additionalClassNames={`${additionalClassNames} ${styles.navBarDesktop}`} background={background} position={position} page={page} onOptionSelect={handleOptionSelection}/>

            {/* MOBILE NAVIGATION BAR */}
            <NavBarMobile additionalClassNames={`${additionalClassNames} ${styles.navBarMobile}`} background={background} position={position}/>

        </div>
     );
}

export default Navbar;