import { SubAnimationFC } from "./type";
import { useSubAnimation } from "./hooks/useAnimeJs";
import { createTimeline, svg } from "animejs";
import { stagger } from "animejs";

import { MutXY } from "../sketch/util";
import { CreativityObject } from "./CreativityObject";

const GRID_AMOUNT: MutXY = [7, 6];

export const Creativity: SubAnimationFC = ({ registerAnimation, onIntendedEnd }) => {
  useSubAnimation(
    registerAnimation,
    () => createTimeline()
      .add(
        svg.createDrawable(`#initshapes`),
        {
          draw: {
            from: "0 0",
            to: "0 1",
            duration: 1500,
            ease: "linear",
            delay: stagger(600, { grid: GRID_AMOUNT, from: "center", }),
          },
          opacity: {
            to: 1,
            duration: 1000,
            delay: stagger(600, { grid: GRID_AMOUNT, from: "center", }),
          },
          rotate: {
            from: (_, i) => `${i * 5}deg`,
            to: (_, i) => `${((i % 4 == 0) ? -1 : 1) * 360}deg`,
            ease: "linear",
            duration: 20000,
          },
        }, 0
      )
      .add(
        svg.createDrawable(`#inittrail`),
        {
          draw: {
            from: "0 0",
            to: "0 1",
            duration: 2000,
            ease: "out",
            delay: stagger(800, { grid: GRID_AMOUNT, from: "center", }),
          },
          opacity: {
            to: 1,
            duration: 0,
          },
        }, 2000
      )
      .add(
        svg.createDrawable(`#initray`),
        {
          draw: {
            from: "0 0",
            to: "0 1",
            duration: 3000,
            ease: "cubicBezier(.53,.12,.96,.64)",
          },
          opacity: {
            to: 1,
            duration: 0,
          },
        }, 5000
      )
      .call(() => onIntendedEnd?.(), "<")
  );

  return (
    <CreativityObject
      idPrefix="init"
      gridAmount={GRID_AMOUNT}
      canvasArea={[800, 600]}
      length={20}
    />
  );
};

