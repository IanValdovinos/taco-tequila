import React from "react";
import styles from './BaseButton.module.css';

function BaseButton({additionalClassNames, text, onClick, color}) {

    return ( 
        <div className={`${additionalClassNames} ${styles.baseButton}`} onClick={onClick} style={{backgroundColor: color}}>
            <p>{text}</p>
        </div>
     );
}

export default BaseButton;