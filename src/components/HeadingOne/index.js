import React from 'react';
import styles from './HeadingOne.module.css';

function HeadingOne({additionalClassNames, children}) {
    return ( <h1 className={`${additionalClassNames} ${styles.headingOneText}`}>{children}</h1> );
}

export default HeadingOne;