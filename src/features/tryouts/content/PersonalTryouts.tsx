import type { FC } from "react";
import { Section } from "../../../layout/Section";
import { Heading } from "../../../layout/Heading";

import styles from "./PersonalTryouts.module.css";
import { Paragraph } from "../../../ui/Paragraph";
import { Thing } from "../components/Thing";

export const PersonalTryouts: FC = () => {
  return (
    <Section className={styles.root}>
      <Heading subText="HOBBIES">普段やっていること</Heading>
      <Paragraph>普段はこんなことをしています。</Paragraph>
      <Thing title="自作キーボード">
        <Paragraph>
          Lily58 Pro (SW: Kailh Box V2 Red Linear) と Keyball 58 (SW: Yushakobo
          Fairy Silent Linear) を愛用しています。
          リニア派、軽め派、数字列はないと困る派、十字キーはなくて OK 派です！
          最近新しいキーボードを作ろうとしています。
        </Paragraph>
      </Thing>
      <Thing title="花を見る">
        <Paragraph>
          植物が好きで、よく植物公園に行って植物を見ています。
          自然が産んだ美しい見た目は目を惹くものがあります！
        </Paragraph>
      </Thing>
      <Thing title="コメダに行く">
        <Paragraph>
          月 10,000 + 1000n 円程度コメダ珈琲店に費やしています。
          でも頼むメニューは毎回モーニング C とアイスラテです。ずっと一緒です。
          お昼ご飯は結構変わります。
        </Paragraph>
      </Thing>
    </Section>
  );
};
