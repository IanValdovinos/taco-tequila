import React from 'react';

import styles from './HeadingThree.module.css';

function HeadingThree({additionalClassNames, children}) {
    return ( <h3 className={`${additionalClassNames} ${styles.headingThreeText}`}>{children}</h3> );
}

export default HeadingThree;