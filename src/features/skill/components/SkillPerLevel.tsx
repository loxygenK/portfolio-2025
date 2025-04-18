import type { FC } from "react";
import type { Level, Tech } from "../type";

import styles from "./SkillPerLevel.module.css";
import { TechList } from "./Tech";
import classNames from "classnames";

type Props = {
  level: Level;
  tech: Tech[];
};

const levelProperty = {
  okay: {
    className: styles.okay,
    title: "だいたいわかる + 好き",
    description: "長い間使っていて、手に馴染んだ技術です。",
  },
  interested: {
    className: styles.sortaOkay,
    title: "興味がある",
    description:
      "基本はとりあえず使えますが、応用はまだ興味ありという段階の技術です。",
  },
  "for-reference": {
    className: styles.knowsFeeling,
    title: "使ったことがある",
    description:
      "そこまで好んでいるというわけではないですが、一応使ったことがあります。",
  },
};

export const SkillPerLevel: FC<Props> = ({ level, tech }) => {
  return (
    <div className={classNames(styles.root, levelProperty[level].className)}>
      <hgroup className={styles.heading}>
        <h4 className={styles.levelName}>{levelProperty[level].title}</h4>
        <span className={styles.description}>
          {levelProperty[level].description}
        </span>
      </hgroup>
      <TechList techs={tech} className={styles.list} />
    </div>
  );
};
