import { createTimeline } from "animejs";
import { Sketch } from "../sketch/Sketch";
import { useSubAnimation } from "./hooks/useAnimeJs";
import { SubAnimationFC } from "./type";

import styles from "./Background.module.css";

export const Background: SubAnimationFC = (props) => {
  useSubAnimation(
    props.registerAnimation,
    () => createTimeline()
      .add(`.${styles.sketch}`, {
        backgroundColor: [
          { to: "#222", delay: 0, duration: 0, },
          { to: "#000", delay: 7980, duration: 0, },
          { to: "#333", delay: 5380, duration: 0, },
          { to: "#0000", delay: 3000, duration: 1500, },
        ]
      }),
  );

  return (
    <Sketch className={styles.sketch} />
  )
};

