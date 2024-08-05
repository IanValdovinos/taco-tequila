import React from 'react';

// Import styles
import styles from './LearnMorePicture.module.css';

// Import components
import HeadingOne from '../HeadingOne';

function LearnMorePicture({additionalClassNames, src, title, children}) {

    const learnMorePictureStyles = {
        backgroundImage: `url(${src})`
    }

    return ( 
        <div className={`${additionalClassNames} ${styles.learnMorePicture}`} style={learnMorePictureStyles}>
            <HeadingOne additionalClassNames={styles.learnMorePictureTitle}>{children}</HeadingOne>
        </div>
    );
}

export default LearnMorePicture;