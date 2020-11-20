import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";

import styles from "./Services.module.css";
import { data, buttons } from "./ServicesData";

export default function Services() {
  const [[panel, direction], setPanel] = useState([0, 0]);
  const index = wrap(0, data.length, panel);

  const paginate = (newDirection) => {
    setPanel([panel + newDirection, newDirection]);
  };

  const variants = {
    enter: () => {
      return {
        x: direction > 0 ? -1000 : 1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: () => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const displayPanel = (key) => {
    return (
      <div className={styles.servicesContainer}>
        <div className={styles.service}>
          <div className={styles.summaryContainer}>
            <div className={styles.summary}>
              <h4>{data[key].title}</h4>
              <p>{data[key].summary}</p>
            </div>
          </div>
          <div className={styles.details}>
            {data[key].details.map((item) => (
              <>
                <h4>{item.title}</h4>
                <ul>
                  {item.points.map((point) => (
                    <li>{point}</li>
                  ))}
                </ul>
              </>
            ))}
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h1>Services</h1>
        <p>
          We always bring our “A” game to all projects! With our swift delivery
          method, you’ll be part of the building process, and you’ll be aware of
          every step taken, to ensure optimum satisfaction.
        </p>
      </div>
      <div className={styles.buttonGroup}>
        {buttons.map((button, i) => (
          <button
            key={button}
            className={i === index ? styles.active : ""}
            onClick={() => setPanel([i, -1])}
          >
            {button}
          </button>
        ))}
      </div>

      <div style={{ position: "relative" }}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            dragConstraints={{ left: 0, right: 0 }}
            style={{
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            key={panel}
            drag="x"
            dragElastic={1}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(-1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(1);
              }
            }}
          >
            {displayPanel(index)}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
