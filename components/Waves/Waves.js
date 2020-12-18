import t from "prop-types";
import styles from "./Waves.module.css";

const defaultImage = "/images/wave--infinite.svg";

import Wave from "./wave--infinite.svg";

export default function Waves({
  flip,
  image,
  id,
  heights = [25, 22, 20, 15, 12],
  opacity = [0.5, 0.5, 0.5, 0.5, 1],
  saturation = [80, 80, 80, 0, 0],
  lightness = [50, 60, 50, 100, 98],
  widths = [1200, 2400, 3600, 1200, 1000],
  speeds = [50, 40, 30, 20, 30],
  hues = [230, 280, 180, 280, 300],
}) {
  return (
    <div
      className={`${styles.waveContainer} ${
        flip ? styles.waveContainerTop : styles.waveContainerBottom
      }`}
    >
      {new Array(widths.length).fill().map((w, index) => (
        <Wave
          key={`wave-${id || new Date().getTime()}-${index}`}
          className={styles.wave}
          style={{
            "--height": heights[index],
            "--width": widths[index],
            "--opacity": opacity[index],
            "--speed": speeds[index] * 0.25,
            "--hue": hues[index],
            "--saturation": saturation[index],
            "--lightness": lightness[index],
            // backgroundImage: `url(${image || defaultImage})`,
          }}
        />
      ))}
    </div>
  );
}

Waves.propTypes = {
  widths: t.arrayOf(t.number),
  speeds: t.arrayOf(t.number),
  opacity: t.arrayOf(t.number),
  heights: t.arrayOf(t.number),
};
