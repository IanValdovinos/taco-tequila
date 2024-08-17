import React from "react";
import styles from './BaseButton.module.css';

function BaseButton({additionalClassNames, text, onClick, color}) {
    // style={{backgroundColor: color}}
    return ( 
        <div className={`${additionalClassNames} ${styles.baseButton}`} onClick={onClick}>
            <p>{text}</p>
        </div>
     );
}

export default BaseButton;