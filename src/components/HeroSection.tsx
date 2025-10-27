import React from "react";
import Icon from "./Icon";
import styles from "../styles/HeroSection.module.css";

const HeroSection: React.FC = () => {
  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContentWrapper}>
            <div className={styles.textContent}>
              <h1>
                Smart Comfort,
                <br />
                Smarter Living.
              </h1>
              <p>
                Experience effortless control over your water heating and air
                quality. Advanced Systems brings you intelligent geysers and air
                purifiers designed for efficiency and modern living.
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
