import type { FC, ReactNode } from "react";

import styles from "./Thing.module.css";

type Props = {
  title: string;
  children: ReactNode;
};

export const Thing: FC<Props> = ({ children, title }) => {
  return (
    <div>
      <h3 className={styles.title}>{title}</h3>
      {children}
    </div>
  );
};
