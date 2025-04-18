import type { FC } from "react";
import type { Tech } from "../type";

import styles from "./Tech.module.css";
import classNames from "classnames";

type Props = {
  className?: string;
  techs: Tech[];
};
export const TechList: FC<Props> = ({ className, techs }) => {
  return (
    <ul className={classNames(styles.root, className)}>
      {techs.map((tech) => (
        <li key={tech.name}>
          <span
            className={classNames(styles.item, tech.prefer && styles.prefer)}
          >
            {tech.name}
          </span>
        </li>
      ))}
    </ul>
  );
};
