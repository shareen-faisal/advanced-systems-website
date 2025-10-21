import React from 'react';
import  Icon  from './Icon';
import styles from "../styles/HeroSection.module.css";

const HeroSection: React.FC = () => {
  return (
    <>
      
      <div className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContentWrapper}>
            {/* Left Side: Text Content */}
            <div className={styles.textContent}>
              <h1>
                 Master Your
                <br />
                Home Environment.
              </h1>
              <p>
                From purifying the air you breathe to heating the water you use, take complete control of your home's essential elements.
              </p>
              {/* <button className={styles.heroButton}>
                See Our Collection
              </button> */}
              <a href="/#products" className={styles.heroButton}>
                See Our Collection
              </a>
            </div>
            {/* Right Side: Icon */}
            <div className={styles.iconContainer}>
              <Icon className={styles.smartDropletIcon} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default HeroSection;