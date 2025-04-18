import type { FC, ReactNode } from "react";

import styles from "./Paragraph.module.css";
import classNames from "classnames";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Paragraph: FC<Props> = ({ children, className }) => {
  return <p className={classNames(styles.root, className)}>{children}</p>;
};
