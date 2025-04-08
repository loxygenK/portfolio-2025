import { createTimeline } from "animejs";
import { useSubAnimation } from "./hooks/useAnimeJs";
import { SubAnimationFC } from "./type";
import { Sketch } from "../sketch/Sketch";
import { PrismObject } from "./PrismObject";
import { generatePolygon, Line } from "../sketch/Line";

import styles from "./Meet.module.css";
import { angled, cssXY, offXY, randomInt, XY } from "../sketch/util";
import { useMemo } from "react";

const AMOUNT = 8;
const SPARSE_ANGLE = 150;

const STEP_ANGLE = SPARSE_ANGLE / AMOUNT;

const PRISM_XY: XY = [600, 280]
const [PRISM_X, PRISM_Y] = PRISM_XY;

export const Meet: SubAnimationFC = ({ registerAnimation, hidden }) => {
  const angleSkews = useMemo(() => Array.from({ length: AMOUNT }).map(() => randomInt(-5, 5)), []);
  const lengthSkews = useMemo(() => Array.from({ length: AMOUNT }).map(() => randomInt(-20, 20)), []);

  useSubAnimation(
    registerAnimation,
    () => createTimeline()
      .add("#entryRay", {
        scaleY: {
          from: 0.1,
          to: 1,
          ease: "out",
          duration: 3000,
        }
      }, 0)
      .add("#viewportRoot", {
        x: {
          from: 0,
          to: 250,
          ease: "inOutQuad",
          delay: 3000,
          duration: 1000,
        },
        scale: {
          from: 3.5,
          to: 1,
          ease: "cubicBezier(0,.9,.2,.97)",
          duration: 3000,
        },
      }, 0)
      .add(`#polygon`, {
        ease: "cubicBezier(.1,.99,.5,1)",
        opacity: [
          { to: 0.7, duration: 0 },
          { to: 0, duration: 2000, ease: "linear", delay: 1000 },
        ],
        translateX: {
          from: (_, i) => angled(10, -140 + SPARSE_ANGLE - STEP_ANGLE * i + angleSkews[i])[0],
          to: (_, i) => angled(80 + lengthSkews[i], -140 + SPARSE_ANGLE - STEP_ANGLE * i + angleSkews[i])[0],
          duration: 4000,
        },
        translateY: {
          from: (_, i) => angled(5, -140 + SPARSE_ANGLE - STEP_ANGLE * i + angleSkews[i])[1],
          to: (_, i) => angled(80 + lengthSkews[i], -140 + SPARSE_ANGLE - STEP_ANGLE * i + angleSkews[i])[1],
          duration: 4000,
        },
        rotate: {
          to: "100deg",
          ease: "cubicBezier(.5,.99,.5,1)",
          duration: 2000,
        }
      }, 0)
      .add([`#mainline-1`, `#mainline-2`, `#mainline-3`], {
        stroke: {
          from: "#fff3",
          to: "#0003",
          duration: 1000,
        }
      }, 3000)
      .add(`#mainprism`, {
        stroke: {
          from: "#fff",
          to: "#000",
          duration: 1000,
        }
      }, 3000)
  )

  return (
    <Sketch className={hidden ? styles.hidden : ""} id="meet-root">
      <g id="viewportRoot" className={styles.viewportRoot}>
        <Line
          origin={[0, PRISM_Y + 50]}
          points={[[-400, -50], [-400, 50], [PRISM_X, 10], [PRISM_X, -10]]}
          closed
          className={styles.entryRay}
          fill="url(#entryRayFill)"
          id="entryRay"
          style={{ transformOrigin: `0px ${PRISM_Y + 50}px` }}
        />
        <Line
          origin={[0, PRISM_Y + 50]}
          points={[[-400, -50], [-400, 50], [PRISM_X, 10], [PRISM_X, -10]]}
          closed
          fill="white"
          fillOpacity="0.5"
          className={styles.entryRay}
          id="entryRay"
          style={{ transformOrigin: `0px ${PRISM_Y + 50}px` }}
        />
        <Line
          origin={[PRISM_X + 50, PRISM_Y + 30]}
          points={[[-10, -8], [8, 2], [640, -230], [640, -380], [50, -380]]}
          closed
          fill="url(#entryRayFill)"
          className={styles.exitRay}
          id="exitRay"
        />
        <Line
          origin={[PRISM_X + 50, PRISM_Y + 30]}
          points={[[-10, -8], [8, 2], [640, -230], [640, -380], [50, -380]]}
          closed
          fill="white"
          fillOpacity="0.7"
          className={styles.exitRay}
          id="exitRay"
        />
        <PrismObject idPrefix="main" gap={30} x={PRISM_X} y={PRISM_Y} />
        {
          Array.from({ length: 8 }).map((_, i) => (
            <Line
              origin={offXY([PRISM_X + 50, PRISM_Y + 30], [0, -5])}
              points={generatePolygon(i + 3, 8)}
              fill="white"
              id="polygon"
              style={{ transformOrigin: cssXY(offXY([PRISM_X + 50, PRISM_Y + 30], [5 - (0.7 * i), -2 + (0.5 * i)])) }}
            />
          ))
        }
      </g>

      <linearGradient id="entryRayFill">
        <stop offset="0" stop-color="#FF00D9"/>
        <stop offset="0.355769" stop-color="#FF7B00"/>
        <stop offset="0.653846" stop-color="#91FF00"/>
        <stop offset="1" stop-color="#00F6FF"/>
      </linearGradient>
    </Sketch>
  )
};

