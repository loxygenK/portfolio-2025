import type { FC } from "react";
import { Section } from "../../../layout/Section";
import { Heading } from "../../../layout/Heading";
import { Paragraph } from "../../../ui/Paragraph";
import { SkillPerLevel } from "../components/SkillPerLevel";
import { techs, utilities } from "../content";

import styles from "./EngineeringSkill.module.css";
import { TechList } from "../components/Tech";

export const EngineeringSkill: FC = () => {
  return (
    <Section className={styles.root}>
      <Heading subText="ENGINEERING SKILLS">
        エンジニアとしてのスキルについて
      </Heading>
      <Paragraph>
        相当特異なものでない限り、必要に応じてキャッチアップして基礎程度はある程度使えるようになるほどのベースはあります!
        <br />
        ここに書いてある技術スタックでなくても、対応は可能かもしれません。
      </Paragraph>
      {(["okay", "interested"] as const).map((level) => (
        <SkillPerLevel level={level} tech={techs[level]} key={level} />
      ))}
      <aside className={styles.aside}>
        <Paragraph>
          普段はこんなツールスタックにお世話になりながらコードを書いています。
        </Paragraph>
        <TechList techs={utilities} className={styles.toolsList} />
      </aside>
    </Section>
  );
};
