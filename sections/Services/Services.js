import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";

import styles from "./Services.module.css";
import data from "./ServicesData";

const Slideshow = () => {
  const [[panel, direction], setPanel] = useState([0, 0]);
  const testData = ["test", "sample", "other"];
  const index = wrap(0, testData.length, panel);

  const paginate = (newDirection) => {
    setPanel([panel + newDirection, newDirection]);
  };

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
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

  return (
    <div style={{ position: "relative" }}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          style={{
            height: 400,
            background: "blue",
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
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          {testData[index]}
        </motion.div>
      </AnimatePresence>

      <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </div>
  );
};

export default function Services() {
  const [panel, setActivePanel] = useState(0);

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
        <button className={styles.active} onClick={() => setActivePanel(0)}>
          Product Planning
        </button>
        <button onClick={() => setActivePanel(1)}>Product Development</button>
        <button onClick={() => setActivePanel(2)}>Product Launch</button>
        <button onClick={() => setActivePanel(3)}>Product Scaling</button>
      </div>
      {displayPanel(panel)}

      <Slideshow />
    </section>
  );
}
