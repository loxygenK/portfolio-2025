import type { FC, ReactNode } from "react";
import styles from "./DecorativeText.module.css";
import classNames from "classnames";

type Props = {
  children?: ReactNode;
  text: string;
  helperClassName?: string;
};

export const SplitByChar: FC<Props> = ({ children, text, helperClassName }) => {
  return (
    <p aria-label={text} className={styles.root}>
      <span className={styles.translated} aria-hidden>
        翻訳
      </span>
      <span aria-hidden className={styles.decorativeText} translate="no">
        {children}
      </span>
      <span
        aria-hidden
        lang="ja"
        className={classNames(styles.descriptiveText, helperClassName)}
      >
        {text}
      </span>
    </p>
  );
};
