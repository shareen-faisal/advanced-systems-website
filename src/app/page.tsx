import styles from "./page.module.css";
import About from "@/components/About";
import ProductList from '@/components/ProductList'

export default function Home() {
  return (
    <div className={styles.page}>
        <ProductList/>
        <About />
    </div>
  );

}
