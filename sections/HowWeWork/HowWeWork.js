import styles from "./HowWeWork.module.css";

export default function HowWeWork() {
  return (
    <section className={styles.container}>
      <div className={styles.waveContainer}>
        <svg
          className={styles.wave}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 508 52.917"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0s40.955 23.283 63.5 23.283S104.455 0 127 0s40.955 23.283 63.5 23.283S231.455 0 254 0s40.955 23.283 63.5 23.283S358.455 0 381 0s40.955 23.283 63.5 23.283S508 0 508 0v52.917H0z"
            fill="purple"
          ></path>
        </svg>
        <svg
          className={styles.wave}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 508 52.917"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0s40.955 23.283 63.5 23.283S104.455 0 127 0s40.955 23.283 63.5 23.283S231.455 0 254 0s40.955 23.283 63.5 23.283S358.455 0 381 0s40.955 23.283 63.5 23.283S508 0 508 0v52.917H0z"
            fill="purple"
          ></path>
        </svg>
        <svg
          className={styles.wave}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 508 52.917"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0s40.955 23.283 63.5 23.283S104.455 0 127 0s40.955 23.283 63.5 23.283S231.455 0 254 0s40.955 23.283 63.5 23.283S358.455 0 381 0s40.955 23.283 63.5 23.283S508 0 508 0v52.917H0z"
            fill="purple"
          ></path>
        </svg>
      </div>
      <div className={styles.title}>
        <h3>How we work</h3>
        <p>
          With software expertise at Codú, you can rest assured you are in good
          hands at every stage of the process.
        </p>
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>
          The definition helps us to know your vision and business needs before
          we can propose a software solution to you. Every business has its own
          unique needs, so at Codú, we spend time to understand your business.
        </div>
        <div className={styles.card}>
          The definition helps us to know your vision and business needs before
          we can propose a software solution to you. Every business has its own
          unique needs, so at Codú, we spend time to understand your business.
        </div>
        <div className={styles.card}>
          The definition helps us to know your vision and business needs before
          we can propose a software solution to you. Every business has its own
          unique needs, so at Codú, we spend time to understand your business.
        </div>
        <div className={styles.card}>
          The definition helps us to know your vision and business needs before
          we can propose a software solution to you. Every business has its own
          unique needs, so at Codú, we spend time to understand your business.
        </div>
      </div>
    </section>
  );
}
