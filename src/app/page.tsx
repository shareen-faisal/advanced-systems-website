import styles from "./page.module.css";
import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import ProductList from '@/components/ProductList'

export default function Home() {
  return (
    <div className={styles.page}>
        <HeroSection />
        <ProductList/>
        <About />
    </div>
  );

}
