import Image from "next/image";
import { Waves } from "../../components";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div>
        <h1>Grow your business</h1>
        <p>
          <span className={styles.highlight}>Designs</span> products and
          experience for users.
        </p>
        <button className={styles.buttonSecondary} type="button">
          Contact us today
        </button>
      </div>
      <div>
        <Image src="/images/heroboard.png" height="448" width="797" />
      </div>
      <Waves />
    </section>
  );
}
