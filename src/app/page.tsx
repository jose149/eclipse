"use client";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Banner from "./components/home/Home";
import Information from "./components/information/Information";
import DressCode from "./components/dressCode/DressCode";
import PasswordGate from "./components/passwordGate/PasswordGate";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <PasswordGate>
        <Header />

        <main className={styles.main}>
          <Banner />
          <Information />
          <DressCode />
        </main>

        <Footer />
      </PasswordGate>
    </div>
  );
}