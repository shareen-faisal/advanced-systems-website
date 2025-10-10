"use client";

import React from "react";
import styles from "../styles/ProductPage.module.css";
import { ProductData } from "@/app/data/productsData";

interface ProductPageProps {
  product: ProductData;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  return (
    <div className={styles.wrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.tagline}>{product.tagline}</p>
          <div className={styles.usps}>
            {product.usps.map((usp, idx) => (
              <span key={idx} className={styles.usp}>
                {usp}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src={product.image1} alt={product.title} />
        </div>
      </section>

      {/* Hero Image + Features Row */}
      <section className={styles.heroWithFeatures}>
        <div className={styles.heroImage}>
          <img src={product.image2} alt={product.title} />
        </div>
        <div className={styles.features}>
          <h2>Key Features</h2>
          <div className={styles.featureGrid}>
            {product.features.map((feature, idx) => (
              <div key={idx} className={styles.featureCard}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + Specs Row */}
      <section className={styles.benefitsSpecsRow}>
        <div className={styles.benefits}>
          <h2>Why Choose {product.title}?</h2>
          <ul>
            {product.benefits.map((benefit, idx) => (
              <li key={idx}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div className={styles.specs}>
          <h2>Technical Specifications</h2>
          <table className={styles.specsTable}>
            <tbody>
              {product.specs.map((spec, idx) => (
                <tr key={idx}>
                  <td>{spec.label}</td>
                  <td>{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
