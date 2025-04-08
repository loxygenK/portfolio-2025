import { createTimeline } from "animejs";
import { useSubAnimation } from "./hooks/useAnimeJs";
import { SubAnimationFC } from "./type";
import { generatePolygon, Line } from "../sketch/Line";
import { Sketch } from "../sketch/Sketch";

import styles from "./SmallParticle.module.css";
import { angled, cssXY, offXY, randomInt } from "../sketch/util";
import { useMemo } from "react";
import { stagger } from "animejs";

const AMOUNT = 5;
const SPARSE_ANGLE = 150;

const STEP_ANGLE = SPARSE_ANGLE / AMOUNT;

export const SmallParticles: SubAnimationFC = ({ registerAnimation }) => {
  const angleSkews = useMemo(() => Array.from({ length: AMOUNT }).map(() => randomInt(-5, 5)), []);
  const lengthSkews = useMemo(() => Array.from({ length: AMOUNT }).map(() => randomInt(-10, 10)), []);

  useSubAnimation(
    registerAnimation,
    () => createTimeline()
      .add(`.${styles.root}`, {
        opacity: {
          to: 1,
          duration: 0,
        },
      }, 0)
      .add(`.${styles.polygons}`, {
        ease: "cubicBezier(.1,.99,.5,1)",
        opacity: [
          { to: 0.7, duration: 0 },
          { to: 0, duration: 2000, ease: "linear", },
        ],
        translateX: {
          from: (_, i) => angled(5, -90 + SPARSE_ANGLE - STEP_ANGLE * i + angleSkews[i])[0],
          to: (_, i) => angled(30 + lengthSkews[i], -90 + SPARSE_ANGLE - STEP_ANGLE * i + angleSkews[i])[0],
          duration: 4000,
        },
        translateY: {
          from: (_, i) => angled(5, -90 + SPARSE_ANGLE - STEP_ANGLE * i + angleSkews[i])[1],
          to: (_, i) => angled(30 + lengthSkews[i], -90 + SPARSE_ANGLE - STEP_ANGLE * i + angleSkews[i])[1],
          duration: 4000,
        },
        rotate: {
          to: "520deg",
          ease: "cubicBezier(.5,.99,.5,1)",
          duration: 2000,
        }
      }, 0)
  );

  return (
    <Sketch className={styles.root}>
      {
        Array.from({ length: AMOUNT }).map((_, i) => (
          <Line
            origin={offXY([700, 360], [0, -5])}
            points={generatePolygon(i + 3, 8)}
            fill="white"
            className={styles.polygons}
            style={{ transformOrigin: cssXY(offXY([700, 360], [5 - (0.7 * i), -2 + (0.5 * i)])) }}
          />
        ))
      }
    </Sketch>
  );
};

