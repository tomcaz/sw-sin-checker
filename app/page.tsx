import SinValidator from "./components/SinValidator/SinValidator";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <SinValidator />
      </main>
    </div>
  );
}
