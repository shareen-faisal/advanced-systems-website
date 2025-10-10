"use client";

import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <span className={styles.logoIcon}>▲</span>
        <span className={styles.logoText}>Advanced Systems Limited</span>
      </div>

      {/* Menu Links and Buttons in a single container */}
      <div className={styles.navMenuAndActions}>
        {/* Menu Links */}
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/#products">Products</Link></li>
          <li><Link href="/">About Us</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
          {/* <li><Link href="/testimonial">Testimonial</Link></li> */}
          {/* <li><Link href="/faq">FAQ</Link></li> */}
        </ul>

        {/* Buttons */}
        <div className={styles.actions}>
          {/* <Link href="/login" className={styles.login}>Login</Link>
          <Link href="/signup" className={styles.signup}>Sign up</Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;