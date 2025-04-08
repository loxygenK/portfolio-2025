import { createTimeline, Timeline } from "animejs";
import styles from "./WhereIWouldBe.module.css";
import { stagger } from "animejs";
import { FC, useRef } from "react";
import { useAnimation } from "./hooks/useAnimation";

const PHRASE = `
数億のトランジスタが論理を奏で、数兆のコンピュータがまた論理を奏でる、
この論理で満ちた世界。それと、論理なんかに従わない、自由で不合理的で、
感情に満ちた私たち人間が織りなす創造の世界。相反さえしそうな二つの
世界が、ソフトウェアエンジニアリングを通じて交わり、創造は論理によって
スケールし、論理は創造によって新たな形を得る。お互いがお互いの力で、
まだ見ぬものを見出していく。そんな創造と論理の交わりが起こるところに、
それを起こすために、そして見届けるために、私はきっとそこにいます!
`.trim();

const EASE = "cubicBezier(.1,1,.95,1)";

const STAGGER = 30;

export const WhereIWouldBe: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useAnimation(
    ref,
    () => addAnimationByWord(createTimeline())
      .add(
        `.${styles.shortPhraseMain}`,
        {
          delay: stagger(STAGGER),
          ease: EASE,
          y: { from: "-1em", to: 0, duration: 2000, },
          opacity: [
            { to: "100%", duration: 4000, delay: stagger(STAGGER), },
          ],
        },
        "<-=1000",
      )
      .add(
        `.${styles.whyEngineerMain}`,
        {
          duration: 1000,
          ease: EASE,
          y: { from: "-10px", to: 0, duration: 1000, delay: stagger(3) },
          opacity: [
            { to: "100%", duration: 1000, delay: stagger(3), },
          ],
        },
        "<<+=500",
      )
      .add(
        `.${styles.shortPhraseMaybe}`,
        {
          ease: EASE,
          opacity: [
            { to: "100%", ease: 'linear', duration: 1500, },
          ],
        },
        "<<",
      )
      .add(
        `.${styles.probably}`,
        {
          ease: EASE,
          opacity: [
            { to: "100%", ease: 'linear', duration: 1500, },
          ],
        },
        "<<",
      )
  );

  return (
    <div className={styles.root} ref={ref}>
      <h1 className={styles.mainPhrase}>
        <span>
          <aside>
            SELF-DISCOVERY INTERMEDIATE<br />
            OUTPUT V.20250410
          </aside>
          <span id="phrase-words" className={styles.where}>WHERE</span>
          <span id="phrase-words" className={styles.creativity}>CREATIVITY</span>
          <span id="phrase-words" className={styles.and}>AND</span>
        </span>
        <span>
          <span id="phrase-words" className={styles.logic}>LOGIC</span>
          <span id="phrase-words" className={styles.meet}>MEET &amp;</span>
          <span id="phrase-words" className={styles.unite}>UNITE</span>
        </span>
        <span id="phrase-words" className={styles.idbethere}>I'D BE THERE!</span>
        <span className={styles.probably}>(Probably)</span>
      </h1>
      <p className={styles.shortPhrase} ref={(elem) => console.log("Ref is valid now: ", elem)}>
        {"創造と論理が交わるところに、私はいます!".split("").map((char, i) => (
          <span className={styles.shortPhraseMain} key={`phrase-${char}-${i}`}>
            {char}
          </span>
        ))}
        <span className={styles.shortPhraseMaybe}>
          (たぶんね)
        </span>
      </p>
      <p className={styles.whyEngineer}>
        {PHRASE.split("").map((char, i) => (
          <span className={styles.whyEngineerMain} key={`eng-${char}-${i}`}>
            {char}
          </span>
        ))}
      </p>
    </div>
  );
}

const animations = [
  { className: styles.where,      from: [-1,  0], },
  { className: styles.creativity, from: [ 0, -1], },
  { className: styles.and,        from: [ 0,  1], },
  { className: styles.logic,      from: [ 0, -1], },
  { className: styles.meet,       from: [ 0,  1], },
  { className: styles.unite,      from: [ 1,  0], },
  { className: styles.idbethere,  from: [ 0,  1], },
]

function addAnimationByWord(timeline: Timeline): Timeline {
  for(let i = 0; i < animations.length; i++) {
    const { className, from: [x, y] } = animations[i];

    timeline.add(`.${className}`, {
      ease: EASE,
      x: { from: `${x * 3}cqmin`, duration: 1000, },
      y: { from: `${y * 3}cqmin`, duration: 1000, },
      opacity: [
        { from: "0", to: "1", ease: 'linear', duration: 1000, },
      ],
    }, i * 50);
  }

  return timeline;
}

