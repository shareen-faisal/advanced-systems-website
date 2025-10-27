"use client";

import React from "react";
import styles from "../styles/ProductPage.module.css";
import { ProductData } from "@/app/data/productsData";
import { useState } from "react";

interface ProductPageProps {
  product: ProductData;
  // searchParams?: { [key: string]: string | string[] | undefined };
}

const FeatureIcon: React.FC<{ icon: string }> = ({ icon }) => (
    <svg className={styles.featureIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        {icon === 'intelligent' && <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M12 5.25v.01M16.5 8.25v.01M12 12v.01M12 16.5v.01M4.875 12a7.125 7.125 0 0114.25 0H4.875z" />}
        {icon === 'timer' && <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />}
        {icon === 'protection' && <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
        {icon === 'durable' && <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.73-.626 1.196-.626h.178c.47 0 .897.242 1.196.626l2.496 3.03M11.42 15.17L9.36 12.417c-.364-.464-.903-.742-1.484-.742a2.08 2.08 0 00-1.484.742L3 21m0 0h18" />}
        {icon === 'mobile' && <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />}
    </svg>
);

const CheckmarkIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
    const [activeImage, setActiveImage] = useState(product.image1);
    const images = [product.image1, product.image2];

    const getIconForFeature = (title: string): string => {
        const lowerTitle = title.toLowerCase();
        if (lowerTitle.includes("intelligent")) return "intelligent";
        if (lowerTitle.includes("time")) return "timer";
        if (lowerTitle.includes("protection")) return "protection";
        if (lowerTitle.includes("durable")) return "durable";
        if (lowerTitle.includes("mobile")) return "mobile";
        return "protection";
    };

  return (
    <>
    
      <div className={styles.productPageContainer}>
        {/* --- Hero Section --- */}
        <section className={styles.productHero}>
          <div className={styles.imageGallery}>
            <div className={styles.mainImage}>
              <img 
                src={activeImage} 
                alt={`${product.title} - main view`} 
                onError={(e) => { e.currentTarget.src = `https://placehold.co/600x600/e2e8f0/334155?text=Image+Not+Found`; }}
              />
            </div>
            <div className={styles.thumbnailList}>
              {images.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`${styles.thumbnail} ${activeImage === img ? styles.thumbnailActive : ''}`}
                  onClick={() => setActiveImage(img)}
                >
                  <img 
                    src={img} 
                    alt={`${product.title} - thumbnail ${idx + 1}`} 
                    onError={(e) => { e.currentTarget.src = `https://placehold.co/150x150/e2e8f0/334155?text=Error`; }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.productDetails}>
            <h1 className={styles.productTitle}>{product.title}</h1>
            <p className={styles.productTagline}>{product.tagline}</p>
            <div className={styles.productBenefitsList}>
                <h3>Key Benefits:</h3>
                <ul>
                    {product.benefits.map((benefit, idx) => (
                        <li key={idx}><CheckmarkIcon /><span>{benefit}</span></li>
                    ))}
                </ul>
            </div>
          </div>
        </section>

        {/* --- Features Section --- */}
        <section className={styles.featuresSection}>
            <h2 className={styles.sectionTitle}>Advanced Smart Features</h2>
            <div className={styles.featuresGrid}>
                {product.features.map((feature, idx) => (
                    <div key={idx} className={styles.featureCard}>
                        <FeatureIcon icon={getIconForFeature(feature.title)} />
                        <h3 className={styles.featureTitle}>{feature.title}</h3>
                        <p className={styles.featureDescription}>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* --- USPs & Specs Section --- */}
        <section className={styles.uspsAndSpecsSection}>
            <div className={styles.uspsContainer}>
                <h2 className={styles.sectionTitle}>Why Choose e-NORIS?</h2>
                <div className={styles.uspsGrid}>
                    {product.usps.map((usp, idx) => (
                        <div key={idx} className={styles.uspItem}>
                            <FeatureIcon icon="protection" />
                            <span>{usp}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.specsContainer}>
                <h2 className={styles.sectionTitle}>Technical Specifications</h2>
                <table className={styles.specsTable}>
                    <tbody>
                        {product.specs.map((spec, idx) => (
                            <tr key={idx}><td>{spec.label}</td><td>{spec.value}</td></tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
      </div>
    </>
  );
};

export default ProductPage;


// const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
//   return (
//     <div className={styles.wrapper}>
//       {/* Hero Section */}
//       <section className={styles.hero}>
//         <div className={styles.heroContent}>
//           <h1 className={styles.title}>{product.title}</h1>
//           <p className={styles.tagline}>{product.tagline}</p>
//           <div className={styles.usps}>
//             {product.usps.map((usp, idx) => (
//               <span key={idx} className={styles.usp}>
//                 {usp}
//               </span>
//             ))}
//           </div>
//         </div>
//         <div className={styles.heroImage}>
//           <img src={product.image1} alt={product.title} />
//         </div>
//       </section>

//       {/* Hero Image + Features Row */}
//       <section className={styles.heroWithFeatures}>
//         <div className={styles.heroImage}>
//           <img src={product.image2} alt={product.title} />
//         </div>
//         <div className={styles.features}>
//           <h2>Key Features</h2>
//           <div className={styles.featureGrid}>
//             {product.features.map((feature, idx) => (
//               <div key={idx} className={styles.featureCard}>
//                 <h3>{feature.title}</h3>
//                 <p>{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits + Specs Row */}
//       <section className={styles.benefitsSpecsRow}>
//         <div className={styles.benefits}>
//           <h2>Why Choose {product.title}?</h2>
//           <ul>
//             {product.benefits.map((benefit, idx) => (
//               <li key={idx}>{benefit}</li>
//             ))}
//           </ul>
//         </div>

//         <div className={styles.specs}>
//           <h2>Technical Specifications</h2>
//           <table className={styles.specsTable}>
//             <tbody>
//               {product.specs.map((spec, idx) => (
//                 <tr key={idx}>
//                   <td>{spec.label}</td>
//                   <td>{spec.value}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ProductPage;
