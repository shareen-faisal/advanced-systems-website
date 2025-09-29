"use client";

import React from "react";
import styles from "../../styles/Contact.module.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  // FaTwitter,
  FaGoogle,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.header}>
        <h2>Get in Touch</h2>
        <p>Any question or remarks? Just write us a message!</p>
      </div>

      <div className={styles.contactContainer}>
        {/* Left Info Panel */}
        <div className={styles.contactInfo}>
          <h2>Contact Information</h2>
          {/* <p>Say something to start a live chat!</p> */}

          <div className={styles.infoItem}>
            <FaPhoneAlt /> <span>+92.336.467.2466</span>{" "}
            <span>+92.55.325.8993</span>
            <span>+92.55.325.4518</span>
          </div>
          <div className={styles.infoItem}>
            <FaEnvelope /> <span>sales@advanced.com.pk</span>
          </div>
          <div className={styles.infoItem}>
            <FaMapMarkerAlt />
            <span>
              132 Dartmouth Street Boston,
              <br />
              Massachusetts 02156 United States
            </span>
          </div>

          <div className={styles.socialIcons}>
            <a href="#">
              <FaFacebookF />
            </a>
            {/* <a href="#"><FaTwitter /></a> */}
            <a href="#">
              <FaGoogle />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Right Form Panel */}
        <form className={styles.contactForm}>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>First Name</label>
              <input type="text" placeholder="John" />
            </div>
            <div className={styles.inputGroup}>
              <label>Last Name</label>
              <input type="text" placeholder="Doe" />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Email</label>
              <input type="email" placeholder="you@example.com" />
            </div>
            <div className={styles.inputGroup}>
              <label>Phone Number</label>
              <input type="text" placeholder="+1 012 3456 789" />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Subject</label>
            <input type="text" placeholder="Write your subject.." />
          </div>

          <div className={styles.inputGroup}>
            <label>Message</label>
            <textarea placeholder="Write your message.."></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
