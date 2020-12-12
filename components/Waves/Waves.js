import styles from "./Waves.module.css";

const defaultImage = "/images/wave--infinite.svg";

export default function Waves({ flip, image }) {
  return (
    <div
      className={`${styles.waveContainer} ${
        flip ? styles.waveContainerTop : styles.waveContainerBottom
      }`}
    >
      <div
        className={styles.wave}
        style={{
          backgroundImage: `url(${image || defaultImage})`,
        }}
      />
      <div
        className={styles.wave}
        style={{
          backgroundImage: `url(${image || defaultImage})`,
        }}
      />
      <div
        className={styles.wave}
        style={{
          backgroundImage: `url(${image || defaultImage})`,
        }}
      />
    </div>
  );
}
