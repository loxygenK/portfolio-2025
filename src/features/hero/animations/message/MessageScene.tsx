import type { SubAnimationFC } from "../../type";

import styles from "./MessageScene.module.css";
import { createTimeline, svg } from "animejs";
import { useSubAnimation } from "../../hooks/useAnimeJs";
import { stagger } from "animejs";
import { PrismObject } from "../PrismObject";
import { Sketch } from "../../sketch/Sketch";
import { CreativityObject } from "../CreativityObject";

const LOGICAL_THINGS = [
  "RULES",
  "LAWS",
  "BINARIES",
  "BOOLEAN",
  "STRUCTURE",
  "LOGIC",
  "FRAMEWORK",
  "ORDER",
  "SYSTEM",
  "PRECISION",
  "ALGORITHMS",
  "FORMULAS",
  "PATTERNS",
  "FRAME",
  "CONTROL",
  "CONSTRAINTS",
  "PARAMETERS",
  "PROTOCOLS",
  "DETERMINISM",
  "REASONING",
];

const CREATIVE_THINGS = [
  "IDEAS",
  "AMBIGUITY",
  "FEEL",
  "ADLIB",
  "VIBES",
  "FLOW",
  "INSPIRATION",
  "IMAGINATION",
  "FREEDOM",
  "SPONTANEITY",
  "INTUITION",
  "CHAOS",
  "COLOR",
  "EXPRESSION",
  "WHIMSY",
  "MOOD",
  "METAPHOR",
  "STORYTELLING",
  "WANDER",
  "SUBTEXT",
];

export const MessageScene: SubAnimationFC = ({ registerAnimation, hidden }) => {
  useSubAnimation(registerAnimation, () =>
    createTimeline()
      .add(
        `.${styles.logic}`,
        {
          opacity: [
            {
              from: "0",
              to: stagger(-0.3, {
                start: 1,
                reversed: true,
                modifier: (value) => Math.max(value, 0.1),
              }),
              duration: 0,
              delay: stagger(80),
            },
            {
              to: 0,
              duration: 0,
              delay: stagger(-80, { start: 700 }),
            },
          ],
        },
        0,
      )
      .add(
        `.${styles.logicTexts}`,
        {
          y: {
            from: "-20rem",
            to: "0",
            duration: 1500,
            ease: "cubicBezier(.11,.83,.75,.94)",
          },
          frameRate: 10,
        },
        0,
      )
      .add(
        `.${styles.logicalThings}`,
        {
          x: {
            from: "-10em",
            to: "-=15em",
            duration: 8000,
            ease: "linear",
          },
          frameRate: 10,
        },
        0,
      )
      .add(
        `.${styles.logicalThings} > span`,
        {
          opacity: [
            { to: 1, duration: 0, delay: 0 },
            { to: 0, duration: 0, delay: 1200 },
            { to: 1, duration: 0, delay: 1200 },
          ],
        },
        0,
      )
      .add(
        `.${styles.prism}`,
        {
          opacity: [
            { to: "1", duration: 0 },
            { to: "0", duration: 0, delay: 500 },
          ],
          rotate: { from: "5deg", to: "+=2deg" },
          scale: { from: "2", to: "-=0.1" },
          duration: 500,
          ease: "linear",
          frameRate: 10,
        },
        700,
      )
      .add(
        svg.createDrawable("#msgline-1"),
        {
          draw: { from: "0 0.65", to: "0 0.7" },
          duration: 500,
          ease: "linear",
          frameRate: 10,
        },
        700,
      )
      .add(
        [svg.createDrawable("#msgline-2"), svg.createDrawable("#msgline-3")],
        {
          draw: { from: "0 0.12", to: "0 0.14" },
          duration: 500,
          ease: "linear",
          frameRate: 10,
        },
        700,
      )
      .add(
        `.${styles.creativity}`,
        {
          opacity: [
            {
              from: "0",
              to: stagger(-0.3, { start: 1, from: "first" }),
              duration: 0,
              delay: stagger(80),
            },
            {
              to: 0,
              duration: 0,
              delay: stagger(-80, { start: 700 }),
            },
          ],
        },
        1200,
      )
      .add(
        `.${styles.creativityTexts}`,
        {
          y: {
            from: "20rem",
            to: "0",
            duration: 1500,
            ease: "cubicBezier(.11,.83,.75,.94)",
          },
          frameRate: 10,
        },
        1200,
      )
      .add(
        `.${styles.creativeThings}`,
        {
          x: {
            from: "-20em",
            to: "+=15em",
            duration: 8000,
            ease: "linear",
          },
          frameRate: 10,
        },
        1200,
      )
      .add(
        `.${styles.creativeThings} > span`,
        {
          opacity: { to: 1, duration: 0 },
        },
        1200,
      )
      .add(
        `.${styles.shapes}`,
        {
          opacity: [{ to: "1", duration: 0 }],
          scale: { from: "2", to: "-=0.1" },
          duration: 500,
          ease: "linear",
          frameRate: 10,
        },
        1900,
      )
      .add(
        "#msgshapes",
        {
          duration: 700,
          opacity: [
            { to: 1, duration: 0 },
            { to: 0, duration: 0, delay: 500 },
          ],
          rotate: {
            from: "15deg",
            to: (_, i) => (i % 4 === 0 ? "-=15deg" : "+=15deg"),
          },
          frameRate: 10,
        },
        1900,
      )
      .add(
        `.${styles.phrase}`,
        {
          translateX: { to: "-50%", duration: 0 },
          translateY: { to: "-50%", duration: 0 },
          scale: {
            from: "2",
            to: "1",
            duration: 3000,
            ease: "cubicBezier(.96,.43,.90,.60)",
          },
          frameRate: 40,
        },
        2400,
      )
      .add(
        `.${styles.phrase} > span > span`,
        {
          x: [{ from: "0.2em", to: 0, duration: 1000, delay: stagger(300) }],
          opacity: [{ to: 1, duration: 100, delay: stagger(300) }],
          frameRate: 10,
        },
        2400,
      ),
  );

  return (
    <div
      className={styles.root}
      style={{ display: hidden ? "none" : undefined }}
    >
      <div className={styles.logicTexts}>
        {Array.from({ length: 6 }).map((_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: The list does not change
          <span className={styles.logic} key={i}>
            LOGIC
          </span>
        ))}
      </div>
      <div className={styles.logicalThings}>
        <span>
          {LOGICAL_THINGS.map((x) => `${x} ・ `)
            .join("")
            .repeat(3)}
        </span>
      </div>
      <div className={styles.creativityTexts}>
        {Array.from({ length: 6 }).map((_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: The list does not change
          <span className={styles.creativity} key={i}>
            CREATIVITY
          </span>
        ))}
      </div>
      <div className={styles.creativeThings}>
        <span>
          {CREATIVE_THINGS.map((x) => `${x} ・ `)
            .join("")
            .repeat(3)}
        </span>
      </div>
      <div className={styles.phrase}>
        <span>
          <span className={styles.phraseWhere}>WHERE</span>
        </span>
        <span>
          <span className={styles.phraseCreativity}>CREATIVITY</span>
          <span className={styles.phraseAnd}>AND</span>
          <span className={styles.phraseLogic}>LOGIC</span>
        </span>
        <span>
          <span className={styles.phraseMeet}>MEET</span>
          <span className={styles.phraseAnd2}>AND</span>
          <span className={styles.phraseUnite}>UNITE!</span>
        </span>
      </div>
      <Sketch>
        <g className={styles.prism}>
          <PrismObject idPrefix="msg" gap={30} x={600} y={270} />
        </g>
        <g className={styles.shapes}>
          <CreativityObject
            idPrefix="msg"
            gridAmount={[7, 6]}
            canvasArea={[800, 600]}
            length={20}
          />
        </g>
      </Sketch>
    </div>
  );
};
