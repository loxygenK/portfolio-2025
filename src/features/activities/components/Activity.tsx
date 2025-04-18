import type { FC, ReactNode } from "react";

import styles from "./Activity.module.css";

type Props = {
  title: string;
  month: [year: number, month: number];
  result?: string;
  children: ReactNode;
};

export const Activity: FC<Props> = ({
  children,
  month: [year, month],
  result,
  title,
}) => {
  const dateTime = `${year}-${month.toString().padStart(2, "0")}`;

  return (
    <div className={styles.root}>
      <hgroup className={styles.heading}>
        <h3 className={styles.title}>{title}</h3>
        <span>
          {result && <span>… {result} </span>}
          <time dateTime={dateTime}>
            ({year}/{month})
          </time>
        </span>
      </hgroup>
      {children}
    </div>
  );
};
