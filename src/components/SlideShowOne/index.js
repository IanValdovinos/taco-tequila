import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Import styles
import styles from './SlideShow.module.css';

// Import Components
import HeadingOne from '../HeadingOne';
import BaseButton from '../BaseButton';

// Import Media
// import CarouselPictureOne from '../../assets/test_tacos.jpg';
// import CarouselPictureTwo from '../../assets/test_carousel_one.jpg';
// import CarouselPictureThree from '../../assets/test_carousel_two.jpg';
// import CarouselPictureFour from '../../assets/test_carousel_three.jpg';

function SlideShowOne() {
    return ( 
        <div className={styles.slideShow}>
            <Carousel showThumbs={false} autoPlay={true} interval={3000} infiniteLoop={true} className={styles.slideShow}>
                <div className={`${styles.slide} ${styles.slideOne}`}>
                    <div className={styles.slideContent}>
                        <HeadingOne additionalClassNames={styles.slideTitle}>BEST TACOS IN TOWN</HeadingOne>
                        <BaseButton color={'black'} text={'ORDER NOW'}></BaseButton>
                    </div>
                </div>

                <div className={`${styles.slide} ${styles.slideTwo}`}>
                    <div className={styles.slideContent}>
                        <HeadingOne additionalClassNames={styles.slideTitle}>GREAT TIME WITH FAMILY AND FRIENDS</HeadingOne>
                        <BaseButton color={'black'} text={'ORDER NOW'}></BaseButton>
                    </div>
                </div>

                <div className={`${styles.slide} ${styles.slideThree}`}>
                    <div className={styles.slideContent}>
                        <HeadingOne additionalClassNames={styles.slideTitle}>AUTHENTIC MEXICAN FOOD</HeadingOne>
                        <BaseButton color={'black'} text={'ORDER NOW'}></BaseButton>
                    </div>
                </div>

                <div className={`${styles.slide} ${styles.slideFour}`}>
                    <div className={styles.slideContent}>
                        <HeadingOne additionalClassNames={styles.slideTitle}>REFRESHING DRINKS</HeadingOne>
                        <BaseButton color={'black'} text={'ORDER NOW'}></BaseButton>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default SlideShowOne;