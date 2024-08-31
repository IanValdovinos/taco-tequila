import React from 'react';

// Import styles
import styles from './Navbar.module.css';

import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';

function Navbar({additionalClassNames, background, position}) {
    

    return ( 
        <div>
            {/* DESKTOP NAVIGATION BAR */}
            <NavBarDesktop additionalClassNames={`${additionalClassNames} ${styles.navBarDesktop}`} background={background} position={position}/>

            {/* MOBILE NAVIGATION BAR */}
            <NavBarMobile additionalClassNames={`${additionalClassNames} ${styles.navBarMobile}`} background={background} position={position}/>

        </div>
     );
}

export default Navbar;