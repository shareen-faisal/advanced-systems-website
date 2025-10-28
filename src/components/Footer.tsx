"use client";

import React from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top navigation links */}
      <div className={styles.topLinks}>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/#products">Products</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Divider */}
      <hr className={styles.divider} />

      {/* Description */}
      <p className={styles.description}>
        Advanced Systems (Pvt) Limited can do low volume manufacturing of electronics products. 
        We assure our customers that the products/equipment researched, designed and developed 
        by us shall outperform in the field. The quality of engineering in products developed 
        by us shall exceed your expectations.
      </p>

      {/* Social Icons */}
      <div className={styles.socialIcons}>
        <a href="https://www.facebook.com/profile.php?id=61558843654387#"><FaFacebookF /></a>
        <a href="https://advanced.com.pk/"><FaGoogle /></a>
        <a href="https://www.linkedin.com/company/advance-system-pk/?originalSubdomain=pk"><FaLinkedinIn /></a>
      </div>

      {/* Copyright */}
      <div className={styles.bottom}>
        © 2025 Copyright: <a href="https://yourwebsite.com"> YourWebsite.com</a>
      </div>
    </footer>
  );
}




// "use client";

// import React from "react";
// import styles from "../styles/Footer.module.css";
// import {
//   FaFacebookF,
//   // FaTwitter,
//   FaGoogle,
//   FaLinkedinIn,
// } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className={styles.footer}>
//       {/* Top navigation links */}
//       <div className={styles.topLinks}>
//         <a href="#">Home</a>
//         <a href="#">About Us</a>
//         <a href="/#products">Products</a>
//         {/* <a href="#">Services</a> */}
//         <a href="/contact">Contact</a>
//       </div>

//       {/* Divider */}
//       <hr className={styles.divider} />

//       {/* Description */}
//       <p className={styles.description}>
//       Advanced Systems (Pvt) Limited can do low volume manufacturing of electronics products. 
//       We assure our customers that the products/equipment researched, designed and developed 
//       by us shall outperform in the field. The quality of engineering in products developed 
//       by us shall exceed your expectations.
//       </p>

//       {/* Social Icons */}
//       <div className={styles.socialIcons}>
//         <a href="#"><FaFacebookF /></a>
//         {/* <a href="#"><FaTwitter /></a> */}
//         <a href="#"><FaGoogle /></a>
//         <a href="#"><FaLinkedinIn /></a>
//       </div>

//       {/* Copyright */}
//       <div className={styles.bottom}>
//         © 2025 Copyright: <a href="https://yourwebsite.com"> YourWebsite.com</a>
//       </div>
//     </footer>
//   );
// }

