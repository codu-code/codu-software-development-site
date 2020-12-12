import Alert from "../alert";
import Meta from "../meta";

import { Footer } from "../../components";

import styles from "./Layout.module.css";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
