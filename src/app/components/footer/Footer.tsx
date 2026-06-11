import styles from "@/app/page.module.css";

export default function Home() {
  return (
    <footer className={styles.page}>
      <img
        className={styles.logo}
        src="/logo.jpg"
        alt="Next.js logo"
        width={100}
        height={20}
      />
    </footer>
  );
}
