import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import About from "@/components/About";

export default function Home() {
  return (
    <div className={styles.page}>
        
        <Navbar />
        <p>Home</p>
        <About />
    </div>
  );

}
