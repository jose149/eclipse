import styles from "../page.module.css";
import FormUnavailable from "../components/formUnavailable/FormUnavailable";

export default function FormPage() {
  return (
    <div className={styles.page}>
      <FormUnavailable />
    </div>
  );
}