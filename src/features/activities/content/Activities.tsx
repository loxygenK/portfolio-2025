import type { FC } from "react";
import { Section } from "../../../layout/Section";
import { Heading } from "../../../layout/Heading";

import styles from "./Activities.module.css";
import { Paragraph } from "../../../ui/Paragraph";
import { Activity } from "../components/Activity";

export const Activities: FC = () => {
  return (
    <Section className={styles.root}>
      <Heading subText="ACTIVITIES">これまでにやってみたこと</Heading>
      <Paragraph>出たイベントや資格等の記録です。</Paragraph>
      <Activity
        month={[2025, 3]}
        title="Web Speed Hackathon 2025"
        result="レギュレーション落ち"
      >
        <Paragraph>
          <u>スコア自体は</u> 10 位で悪くなかったのですが……
          仕様を一つ見落としてしまってレギュレーション落ちしました。
          普段使ったことがない技術にも触れることができ、学ぶことが多く楽しかったです。WSH2026
          も出ます！
        </Paragraph>
      </Activity>
      <Activity month={[2023, 4]} title="TOEIC IP" result="855 [L415, R440]">
        <Paragraph>
          古い数値ではあるのですが、今も英語はよく読むので実力は衰えていないはずです！
          アウトプット力は未知数です。
        </Paragraph>
      </Activity>
    </Section>
  );
};
