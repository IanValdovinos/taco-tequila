import React from 'react';

// Import styles
import styles from './CustomerReview.module.css';

// Import components
import ParagraphOne from '../ParagraphOne';

// Import media
import Frame from '../../assets/frame_one.png';

function CustomerReview({name, children, src, additionalClassNames}) {
    return ( 
        <div className={`${additionalClassNames} ${styles.customerReview}`}>
            <div className={styles.customerReviewInner}>
                {/* Front of the card */}
                <div className={styles.customerReviewFront}>
                    <div className={styles.frameContainer}>
                        <img src={src} alt="reviewer potrait" className={styles.customerPotrait} />
                        
                        <img src={Frame} alt='reviewer potrait frame' className={styles.customerPotraitFrame}></img>
                    </div>
                </div>

                {/* Back of the card */}
                <div className={styles.customerReviewBack}>
                    <p>{name}</p>
                    <ParagraphOne>{children}</ParagraphOne>
                </div>
            </div>
        </div>
    );
}

export default CustomerReview;