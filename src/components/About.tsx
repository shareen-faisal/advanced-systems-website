import Image from "next/image";
import styles from "../styles/About.module.css";
import { FaMicrochip, FaAward } from "react-icons/fa";
import { FC } from "react";

const About: FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <h4 className={styles.subtitle}>About Us</h4>
        <h2 className={styles.title}>
          Where Quality Meets Excellent <span>Service.</span>
        </h2>
        <p className={styles.description}>
          We provide complete solutions from concept to manufacturing to our
          esteemed customers since 1992. Systems designed, developed and
          manufactured by us are in use across Pakistan. We understand
          customer’s requirements and provide with the best solutions. Our R&D
          team consists of highly experienced engineers, technicians and
          engineering support staff.
        </p>
        <p className={styles.description}>
          Advanced Systems (Pvt) Limited can do low volume manufacturing of
          electronics products. We assure our customers that the
          products/equipment researched, designed and developed by us shall
          outperform in the field. The quality of engineering in products
          developed by us shall exceed your expectations.
        </p>

        {/* Features row */}
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <FaMicrochip className={styles.icon} />
            <h3>Manufacturing</h3>
            <p>Low-volume electronics manufacturing tailored to clients.</p>
          </div>

          <div className={styles.featureItem}>
            <FaAward className={styles.icon} />
            <h3>Excellence</h3>
            <p>High-quality engineering that exceeds expectations.</p>
          </div>

          <div className={styles.featureItem}>
            <FaAward className={styles.icon} />
            <h3>Excellence</h3>
            <p>High-quality engineering that exceeds expectations.</p>
          </div>

          <div className={styles.featureItem}>
            <FaAward className={styles.icon} />
            <h3>Excellence</h3>
            <p>High-quality engineering that exceeds expectations.</p>
          </div>
        </div>

        <h5 className={styles.footer}>
          Advanced Systems <span>CUSTOMER SATISFACTION IS OUR PRIORITY.</span>
        </h5>
      </div>
    </section>
  );
};

export default About;
