import React from 'react';

// Import styles
import styles from './WindowPicutre.module.css';

function WindowPicture({src, alt}) {
    return ( 
        <div className={styles.windowPicture}>
            <img src={src} alt={alt}></img>
        </div>
     );
}

export default WindowPicture;