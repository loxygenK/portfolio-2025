import { type FC, useEffect, useRef } from "react";

import styles from "./ScrollSuggestion.module.css";
import { animate, onScroll } from "animejs";

export const ScrollSuggestion: FC = () => {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (root.current === null) {
      return undefined;
    }

    animate(`.${styles.root}`, {
      autoplay: onScroll({
        sync: true,
        enter: "92vh bottom",
        leave: "70vh top",
      }),
      opacity: {
        from: 1,
        to: 0,
      },
      x: {
        from: "-50%",
        to: "-50%",
      },
      y: {
        from: "0",
        to: "-=1em",
      },
    });
  }, []);

  return (
    <p className={styles.root} ref={root}>
      <span>SCROLL DOWN</span>
      <span>↓</span>
    </p>
  );
};
