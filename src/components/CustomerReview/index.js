import React from 'react';

// Import styles
import styles from './CustomerReview.module.css';

// Import components
import ParagraphOne from '../ParagraphOne';

function CustomerReview({name, children, src, additionalClassNames}) {
    return ( 
        <div className={`${additionalClassNames} ${styles.customerReview}`}>
            <div className={styles.customerReviewInner}>
                {/* Front of the card */}
                <div className={styles.customerReviewFront}>
                    <img src={src} alt="reviewer potrait" className={styles.customerPotrait} />
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