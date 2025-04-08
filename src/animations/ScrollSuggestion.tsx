import { FC } from "react";

import styles from "./ScrollSuggestion.module.css";

export const ScrollSuggestions: FC = () => {
  return (
    <p className={styles.root}>
      <span>
        SCROLL DOWN
      </span>
      <span>
        ↓
      </span>
    </p>
  );
};
