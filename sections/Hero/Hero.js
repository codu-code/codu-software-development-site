import styles from "./Hero.module.css";

export default function () {
  return (
    <section className={styles.container}>
      <h1>Grow your business</h1>
      <p>
        <span className={styles.highlight}>Designs</span> products and
        experience for users.
      </p>
      <button className={styles.buttonSecondary} type="button">
        Contact us today
      </button>

      <div className={[styles.waveContainer, styles.waveContainerBottom]}>
        <div className={styles.wave} />
        <div className={styles.wave} />
        <div className={styles.wave} />
      </div>
    </section>
  );
}
