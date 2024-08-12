import React from 'react';

// Import styles
import styles from './HeadingTwo.module.css';

function HeadingTwo({additionalClassNames, children}) {
    return ( <h2 className={`${additionalClassNames} ${styles.headingTwoText}`}>{children}</h2> );
}

export default HeadingTwo;