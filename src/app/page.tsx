import Image from "next/image";
import Footer from "./components/Footer";
import Banner from "./components/banner/Banner";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
      </main>
      <Banner />
      <Footer />
    </div>
  );
}
