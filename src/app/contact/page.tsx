// "use client";

// import React, { useState } from "react";
// import styles from "../../styles/Contact.module.css";
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaFacebookF,
//   FaGoogle,
//   FaLinkedinIn,
// } from "react-icons/fa";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const [isLoading, setIsLoading] = useState(false);
//   const [statusMessage, setStatusMessage] = useState("");

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setStatusMessage("Sending...");

//     try {
//       const response = await fetch("/api/send-email", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setStatusMessage("Message sent successfully!");
//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           phone: "",
//           subject: "",
//           message: "",
//         });
//       } else {
//         const errorData = await response.json();
//         setStatusMessage(
//           `Error: ${errorData.error || "Failed to send message."}`
//         );
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//       setStatusMessage("Error: Could not send message.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <section className={styles.contactSection}>
//       <div className={styles.header}>
//         <h2>Get in Touch</h2>
//         <p>Any question or remarks? Just write us a message!</p>
//       </div>

//       <div className={styles.contactContainer}>
//         {/* Left Info Panel */}
//         <div className={styles.contactInfo}>
//           <h2>Contact Information</h2>
//           <div className={styles.infoItem}>
//             <FaPhoneAlt />
//             <div className={styles.phoneNumbers}>
//               <span>+92.336.467.2466</span>
//               <span>+92.55.325.8993</span>
//               <span>+92.55.325.4518</span>
//             </div>
//           </div>
//           <div className={styles.infoItem}>
//             <FaEnvelope /> <span>sales@advanced.com.pk</span>
//           </div>
//           <div className={styles.infoItem}>
//             <FaMapMarkerAlt />
//             <span>
//               132 Dartmouth Street Boston,
//               <br />
//               Massachusetts 02156 United States
//             </span>
//           </div>
//           <div className={styles.socialIcons}>
//             <a href="#">
//               <FaFacebookF />
//             </a>
//             <a href="#">
//               <FaGoogle />
//             </a>
//             <a href="#">
//               <FaLinkedinIn />
//             </a>
//           </div>
//         </div>

//         {/* Right Form Panel */}
//         <form className={styles.contactForm} onSubmit={handleSubmit}>
//           <div className={styles.row}>
//             <div className={styles.inputGroup}>
//               <label htmlFor="firstName">First Name</label>
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 placeholder="John"
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className={styles.inputGroup}>
//               <label htmlFor="lastName">Last Name</label>
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 placeholder="Doe"
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//           </div>

//           <div className={styles.row}>
//             <div className={styles.inputGroup}>
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="you@example.com"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className={styles.inputGroup}>
//               <label htmlFor="phone">Phone Number</label>
//               <input
//                 type="text"
//                 id="phone"
//                 name="phone"
//                 placeholder="+1 012 3456 789"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>

//           <div className={styles.inputGroup}>
//             <label htmlFor="subject">Subject</label>
//             <input
//               type="text"
//               id="subject"
//               name="subject"
//               placeholder="Write your subject.."
//               value={formData.subject}
//               onChange={handleInputChange}
//               required
//             />
//           </div>

//           <div className={styles.inputGroup}>
//             <label htmlFor="message">Message</label>
//             <textarea
//               id="message"
//               name="message"
//               placeholder="Write your message.."
//               value={formData.message}
//               onChange={handleInputChange}
//               required
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className={styles.submitBtn}
//             disabled={isLoading}
//           >
//             {isLoading ? "Sending..." : "Send Message"}
//           </button>

//           {statusMessage && (
//             <p className={styles.statusMessage}>{statusMessage}</p>
//           )}
//         </form>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import styles from "../../styles/Contact.module.css"; // Corrected path
import {
  FaPhoneAlt, // Corrected icon name
  FaEnvelope,
  FaMapMarkerAlt, // Corrected icon name
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa"; // Corrected package
import { motion, AnimatePresence } from "framer-motion";

// ... (Interface definitions remain the same) ...
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({
    visible: false,
    message: "",
    type: "success" as "success" | "error",
  });

  // ... (All functions: validateField, handleInputChange, handleBlur, validateForm, handleSubmit, useEffect timer... remain exactly the same) ...
  // --- Real-time Validation ---
  const validateField = (name: keyof FormData, value: string) => {
    let error = "";
    // All fields except 'phone' are required
    if (value.trim() === "" && name !== "phone") {
      error = "This field is required";
    } else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = "Please enter a valid email address";
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as {
      name: keyof FormData;
      value: string;
    };
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Validate on every keystroke
    validateField(name, value);
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as {
      name: keyof FormData;
      value: string;
    };
    // Validate when the user leaves the field
    validateField(name, value);
  };

  // --- Form Submission ---
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // Check all fields
    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      validateField(key, formData[key]);
      if (errors[key] || (!formData[key] && key !== "phone")) {
        isValid = false;
        if (!errors[key] && !formData[key] && key !== "phone") {
          newErrors[key] = "This field is required";
        }
      }
    });

    setErrors((prev) => ({ ...prev, ...newErrors }));
    return isValid && Object.values(errors).every((error) => !error);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      setNotification({
        visible: true,
        message: "Please correct the errors in the form.",
        type: "error",
      });
      return; // Stop submission
    }

    setIsLoading(true);
    setNotification((prev) => ({ ...prev, visible: false })); // Hide old notifications

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setNotification({
          visible: true,
          message: "Message sent successfully!",
          type: "success",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        const errorData = await response.json();
        setNotification({
          visible: true,
          message: errorData.error || "Failed to send message.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setNotification({
        visible: true,
        message: "Error: Could not send message.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // --- Notification Timer ---
  useEffect(() => {
    if (notification.visible) {
      const timer = setTimeout(() => {
        setNotification((prev) => ({ ...prev, visible: false }));
      }, 4000); // Hide after 4 seconds
      return () => clearTimeout(timer);
    }
  }, [notification.visible]);

  return (
    <>
      <section className={styles.contactSection}>
        <div className={styles.header}>
          <h2>Get in Touch</h2>
          <p>Any question or remarks? Just write us a message!</p>
        </div>

        <div className={styles.contactContainer}>
          {/* Left Info Panel */}
          <div className={styles.contactInfo}>
            <h2>Contact Information</h2>
            <div className={styles.infoItem}>
              <FaPhoneAlt /> {/* Corrected icon */}
              <div className={styles.phoneNumbers}>
                <span>+92.336.467.2466</span>
                <span>+92.55.325.8993</span>
                <span>+92.55.325.4518</span>
              </div>
            </div>
            <div className={styles.infoItem}>
              <FaEnvelope /> <span>sales@advanced.com.pk</span>
            </div>
            <div className={styles.infoItem}>
              <FaMapMarkerAlt /> {/* Corrected icon */}
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
              <a href="#">
                <FaGoogle />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Right Form Panel */}
          <form
            className={styles.contactForm}
            onSubmit={handleSubmit}
            noValidate // Disable browser validation bubbles
          >
            {/* ... (All form inputs and error messages remain exactly the same) ... */}
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.firstName}
                  className={errors.firstName ? styles.invalidInput : ""}
                />
                {errors.firstName && (
                  <span className={styles.errorText}>{errors.firstName}</span>
                )}
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.lastName}
                  className={errors.lastName ? styles.invalidInput : ""}
                />
                {errors.lastName && (
                  <span className={styles.errorText}>{errors.lastName}</span>
                )}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.email}
                  className={errors.email ? styles.invalidInput : ""}
                />
                {errors.email && (
                  <span className={styles.errorText}>{errors.email}</span>
                )}
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="phone">Phone Number (Optional)</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="+1 012 3456 789"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Write your subject.."
                value={formData.subject}
                onChange={handleInputChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.subject}
                className={errors.subject ? styles.invalidInput : ""}
              />
              {errors.subject && (
                <span className={styles.errorText}>{errors.subject}</span>
              )}
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message.."
                value={formData.message}
                onChange={handleInputChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.message}
                className={errors.message ? styles.invalidInput : ""}
              ></textarea>
              {errors.message && (
                <span className={styles.errorText}>{errors.message}</span>
              )}
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      {/* --- Notification "Toast" --- */}
      <AnimatePresence>
        {notification.visible && (
          <motion.div
            className={`${styles.notification} ${
              styles[notification.type]
            }`}
            /* ✅ UPDATED ANIMATION VALUES */
            initial={{ opacity: 0, y: -50, scale: 0.9 }} // y: -50 (from top)
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }} // y: -20 (to top)
          >
            {notification.type === "success" ? (
              <FaCheckCircle />
            ) : (
              <FaExclamationCircle />
            )}
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

