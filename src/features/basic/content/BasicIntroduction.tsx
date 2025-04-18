import type { FC } from "react";
import { Section } from "../../../layout/Section";

import styles from "./BasicIntroduction.module.css";
import { INTRODUCTION } from "../../../assets/texts";
import { Me } from "../components/Me";
import { Paragraph } from "../../../ui/Paragraph";

export const BasicIntroduction: FC = () => {
  return (
    <Section className={styles.root}>
      <Me className={styles.me} />
      <div className={styles.texts}>
        <hgroup>
          <h2 className={styles.identity}>
            <span className={styles.name}>フライさん / Flisan</span>
            <span className={styles.identity}>
              <span className={styles.ipa}>/flɑɪsan/</span>
              <span className={styles.aka}>a.k.a.</span>
              <span className={styles.subIdentity}>loxygen.k, 液体酸素</span>
            </span>
          </h2>
          <p className={styles.job}>
            <span>プログラマー、</span>
            <span>
              フロントエンド<span className={styles.ambiguity}> (?) </span>
              エンジニア
            </span>
          </p>
        </hgroup>
        <p className={styles.vagueLifeCareer}>
          <span>Ibaraki → Tokyo, Japan</span>
          <span>・</span>
          <span>he/him</span>
          <span>・</span>
          <span>21 yo</span>
          <span>・</span>
          <span>高専本科卒</span>
        </p>
        <div className={styles.introduction}>
          <div className={styles.paragraphs}>
            {INTRODUCTION.map((line) => (
              <Paragraph key={line}>{line}</Paragraph>
            ))}
          </div>
          <Me className={styles.meAtIntroduction} />
        </div>
      </div>
    </Section>
  );
};
