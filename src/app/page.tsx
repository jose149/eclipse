"use client";

import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Banner from "./components/banner/Banner";
import Link1 from "./components/Link1";
import Link2 from "./components/Link2";
import Link3 from "./components/Link3";
import { useAppContext } from "./providers/AppContext";
import styles from "./page.module.css";

export default function Home() {
  const { language, setLanguage, activeTab, setActiveTab } = useAppContext();

  return (
      <div className={styles.page}>
        <Header />

        <main className={styles.main}>
          {activeTab === "home" && <Banner />}
          {activeTab === "link1" && <Link1 />}
          {activeTab === "link2" && <Link2 />}
          {activeTab === "link3" && <Link3 />}
        </main>

        <Footer />
      </div>
  );
}