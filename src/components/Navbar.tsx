"use client";

import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#")) {
      e.preventDefault();

      const elementId = href.substring(2); 
      const element = document.getElementById(elementId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    closeMobileMenu();
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img
          className={styles.logoIcon}
          src="/logo.png"
          alt="advanced-systems-logo"
        />
        <span className={styles.logoText}>Advanced Systems Limited</span>
      </div>

      {/* --- Desktop Menu --- */}
      <div className={styles.desktopMenu}>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/" onClick={(e) => handleNavClick(e, "/")}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/#products"
              onClick={(e) => handleNavClick(e, "/#products")}
            >
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={(e) => handleNavClick(e, "/about")}>
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={(e) => handleNavClick(e, "/contact")}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className={styles.actions}></div>
      </div>

      {/* --- Hamburger Button --- */}
      <button
        className={styles.hamburgerButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* --- Mobile Menu (Dropdown) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ul className={styles.mobileNavLinks}>
              <li>
                <Link href="/" onClick={(e) => handleNavClick(e, "/")}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#products"
                  onClick={(e) => handleNavClick(e, "/#products")}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={(e) => handleNavClick(e, "/about")}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={(e) => handleNavClick(e, "/contact")}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className={styles.mobileActions}></div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
