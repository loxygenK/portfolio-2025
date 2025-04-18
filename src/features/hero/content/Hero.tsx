import { type FC, useCallback, useState } from "react";
import { Driver } from "../components/Drivers";
import { ScrollSuggestion } from "../components/ScrollSuggestion";
import { WhereIWouldBe } from "../components/WhereIWouldBe";

import styles from "./Hero.module.css";
import classNames from "classnames";

type Props = {
  onInitialAnimationDone: () => void;
};

export const Hero: FC<Props> = ({ onInitialAnimationDone }) => {
  const [showContent, setShowContent] = useState(false);

  const handleInitialAnimationDone = useCallback(() => {
    setShowContent(true);
    onInitialAnimationDone();
  }, [onInitialAnimationDone]);

  return (
    <div className={classNames(styles.root, !showContent && styles.animating)}>
      <output className={styles.accessibility}>
        {showContent
          ? "フライさんのポートフォリオの、最初のアニメーションが完了しました。" +
            "メインコンテンツが利用可能です。"
          : "ページ読み込み後、20 秒ほどアニメーションが続きます。" +
            "キーボードのエスケープキーか、エンターキーを押すと、アニメーションをスキップできます。" +
            "フライさんのポートフォリオに訪れていただき、ありがとうございます！"}
      </output>
      <figure className={styles.animation} aria-hidden>
        <Driver onInitialAnimationDone={handleInitialAnimationDone} />
      </figure>
      {!showContent && <div className={styles.firstViewPadding} />}
      <div
        className={classNames(styles.firstView, !showContent && styles.hidden)}
      >
        {showContent && (
          <>
            <WhereIWouldBe />
            <ScrollSuggestion />
          </>
        )}
      </div>
    </div>
  );
};
