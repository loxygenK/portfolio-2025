import type { FC, ReactNode } from "react";

import styles from "./Sketch.module.css";
import classNames from "classnames";

type Props = {
  className?: string;
  children?: ReactNode;
  hidden?: boolean;
  id?: string;
};
export const Sketch: FC<Props> = ({ className, children, hidden, id }) => {
  return (
    <svg
      viewBox="0 0 1280 720"
      preserveAspectRatio="xMidYMid slice"
      className={classNames(styles.root, className, hidden && styles.hidden)}
      id={id}
      role="presentation"
    >
      {children}
    </svg>
  );
};
