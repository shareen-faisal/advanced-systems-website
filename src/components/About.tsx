import Image from "next/image";
import styles from "../styles/About.module.css";
import {
  FaMicrochip,
  FaAward,
  FaCalendarAlt,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";
import { FC } from "react";

const About: FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <h4 className={styles.subtitle}>About Us</h4>
        {/* <h2 className={styles.title}>
          Where Quality Meets Excellent <span>Service.</span>
        </h2> */}
        <h2 className={styles.title}>
          Engineering Innovative Solutions Since <span>1992.</span>
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
            <h3>Quality Manufacturing</h3>
            <p>
              Specializing in low-volume production ensuring exceptional
              reliability and performance exceeding expectations.
            </p>
          </div>

          <div className={styles.featureItem}>
            <FaCalendarAlt className={styles.icon} />
            <h3>Proven Expertise</h3>
            <p>
              Providing trusted electronic solutions, from concept to
              manufacturing, across Pakistan since 1992.
            </p>
          </div>

          <div className={styles.featureItem}>
            <FaLightbulb className={styles.icon} />
            <h3>Innovation & R&D</h3>
            <p>
              Our experienced R&D team engineers cutting-edge, smarter products
              tailored to your needs.
            </p>
          </div>

          <div className={styles.featureItem}>
            <FaHandshake className={styles.icon} />
            <h3>Our Promise</h3>
            <p>
              Prioritizing your satisfaction with high-quality engineering and
              excellent service for lasting partnerships.
            </p>
          </div>
        </div>

        <h5 className={styles.footer}>
          Advanced Systems Limited:{" "}
          <span>Your Partner in Electronic Innovation.</span>
        </h5>
      </div>
    </section>
  );
};

export default About;
