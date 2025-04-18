import type { FC } from "react";
import styles from "./Heading.module.css";

type Props = {
  subText: string;
  children: string;
};

export const Heading: FC<Props> = ({ children, subText }) => {
  return (
    <hgroup>
      <span className={styles.subText}>{subText}</span>
      <h2 className={styles.main}>{children}</h2>
    </hgroup>
  );
};
