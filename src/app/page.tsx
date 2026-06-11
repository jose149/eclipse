"use client";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Banner from "./components/home/Home";
import Information from "./components/information/Information";
import DressCode from "./components/dressCode/DressCode";
import { useAppContext } from "./providers/AppContext";
import styles from "./page.module.css";

export default function Home() {
  const { language, setLanguage, activeTab, setActiveTab } = useAppContext();

  return (
      <div className={styles.page}>
        <Header />

        <main className={styles.main}>
          {activeTab === "home" && <Banner />}
          {activeTab === "information" && <Information />}
          {activeTab === "dresscode" && <DressCode />}
        </main>

        <Footer />
      </div>
  );
}