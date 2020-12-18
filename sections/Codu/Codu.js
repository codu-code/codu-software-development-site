import Image from "next/image";
import styles from "./Codu.module.css";

export default function Codu() {
  return (
    <section className={styles.container}>
      <div className={styles.contentWrap}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h3>“Codú” is Irish for “Coding”</h3>
            <p>
              We are passionate developers, designers and business leaders who
              have made it our mission to provide high quality and reliable
              software solutions. It is our mission to carve out your path to
              success and create something that will help your business stand
              out from the crowd and thrive above the competition. By investing
              in your digital experience you are creating a stable future for
              you and your organisation by connecting people to you and your
              content.
            </p>
          </div>
        </div>
        <div className={`${styles.imageLeft} ${styles.image}`}>
          <Image
            src="/images/codu.png"
            alt={`card icon for second card`}
            height={444}
            width={748}
          />
        </div>
        <div className={`${styles.imageRight} ${styles.image}`}>
          <Image
            src="/images/codu.png"
            alt={`card icon for second card`}
            className={styles.imageRight}
            height={444}
            width={748}
          />
        </div>
      </div>
    </section>
  );
}
