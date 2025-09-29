import Image from "next/image";
import styles from "../styles/About.module.css";
import { FaMicrochip, FaAward } from "react-icons/fa";
import { FC } from "react";

const About: FC = () => {
  return (
    <section className={styles.about}>
      {/* Left side - Image */}
      <div className={styles.imageWrapper}>
        <Image
          src="/download.jpg"
          alt="About Us"
          width={500}
          height={400}
          className={styles.image}
          priority
        />
      </div>

      {/* Right side - Content */}
      <div className={styles.content}>
        <h4 className={styles.subtitle}>About Us</h4>
        <h2 className={styles.title}>
          Where Quality Meets Excellent <span>Service.</span>
        </h2>
        <p className={styles.description}>
          We provide research, design, development, and manufacturing services
          covering a broad spectrum of engineering. Since 1992, systems
          developed by us have been in use across Pakistan.
        </p>
        <p className={styles.description}>
          Our R&D team of engineers and technicians ensures customer needs are
          met with reliable, innovative solutions.
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
        </div>

        <h5 className={styles.footer}>
          Advanced Systems <span>CUSTOMER SATISFACTION IS OUR PRIORITY.</span>
        </h5>
      </div>
    </section>
  );
};

export default About;




// import Image from "next/image";
// import styles from "../styles/About.module.css";
// import { FaUtensils, FaStar, FaMicrochip, FaAward } from "react-icons/fa";
// import { FC } from "react";

// const About: FC = () => {
//   return (
//     <section className={styles.about}>
//       {/* Left side - Image */}
//       <div className={styles.imageWrapper}>
//         <Image
//           src="/burger.png"
//           alt="Delicious Burger"
//           width={500}
//           height={400}
//           className={styles.image}
//           priority
//         />
//       </div>

//       {/* Right side - Content */}
//       <div className={styles.content}>
//         <h4 className={styles.subtitle}>About Our Food</h4>
//         <h2 className={styles.title}>
//           Where Quality Meet Excellent <span>Service.</span>
//         </h2>
//         <p className={styles.description}>
//          We provide research, design, development and manufacturing services covering a broad spectrum of engineering. We provide complete solutions from concept to manufacturing to our esteemed customers since 1992. Systems designed, developed and manufactured by us are in use across Pakistan. 
//         </p> 
//         <p className={styles.description}>
//          We understand customer's requirements and provide with the best solutions. Our R&D team consists of highly experienced engineers, technicians and engineering support staff.
//         </p>

//         {/* <div className={styles.features}>
//           <div className={styles.feature}>
//             <FaUtensils className={styles.icon} />
//             <div>
//               <h5>Super Quality Food</h5>
//               <p>
//                 A team of dreamers and doers building unique interactive music
//                 and art.
//               </p>
//             </div>
//           </div>

//           <div className={styles.feature}>
//             <FaStar className={styles.icon} />
//             <div>
//               <h5>Well Reputation</h5>
//               <p>
//                 A team of dreamers and doers building unique interactive music
//                 and art.
//               </p>
//             </div>
//           </div>
//         </div> */}
//         <div className={styles.features}>
//           <div className={styles.featureItem}>
//             <FaMicrochip className={styles.icon} />
//             <h3>Electronics Manufacturing</h3>
//             <p>
//               Advanced Systems (Pvt) Limited can do low-volume manufacturing of
//               electronics products tailored to customer needs.
//             </p>
//           </div>

//           <div className={styles.featureItem}>
//             <FaAward className={styles.icon} />
//             <h3>Engineering Excellence</h3>
//             <p>
//               We assure our customers that our products and equipment shall
//               outperform in the field. The quality of engineering will exceed
//               your expectations.
//             </p>
//           </div>
//         </div>

//         <h5 className={styles.footer}>
//           Flavour Town <span>CUSTOMER'S EXPERIENCE IS OUR HIGHEST PRIORITY.</span>
//         </h5>
//       </div>
//     </section>
//   );
// };

// export default About;
