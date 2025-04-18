import type { SubAnimationFC } from "../../type";
import { useSubAnimation } from "../../hooks/useAnimeJs";
import { createTimeline, svg } from "animejs";
import { stagger } from "animejs";
import { PrismObject } from "../PrismObject";

export const Prism: SubAnimationFC = ({ registerAnimation }) => {
  useSubAnimation(registerAnimation, () =>
    createTimeline({ playbackEase: "easeOut" })
      // .add(`.${styles.prismRoot}`, {
      //   x: { from: "30vw", to: "30vw" },
      // }, 0)
      // .add("g#line-groups", {
      // }, 0)
      .add(
        svg.createDrawable("#line-1"),
        {
          draw: ["0 0", "0 1"],
          duration: 1000,
          delay: stagger(50),
        },
        0,
      )
      .add(
        svg.createDrawable("#line-2"),
        {
          draw: ["0 0", "0 1"],
          duration: 1000,
          delay: stagger(70),
        },
        300,
      )
      .add(
        svg.createDrawable("#line-3"),
        {
          draw: ["0 0", "0 1"],
          duration: 1000,
          delay: stagger(70),
        },
        800,
      )
      .add(
        svg.createDrawable("#prism"),
        {
          duration: 700,
          draw: ["0 0", "0 1"],
          // draw: [
          //   { to: ['0 0', `0 ${1 / 3 - 0.02}`], },
          //   { to: [`0 ${1/3 - 0.02}`, `0 ${2 / 3 - 0.01}`], delay: 100 },
          //   { to: [`0 ${2 / 3 + 0.02}`, '0 1'], delay: 100 },
          // ],
        },
        400,
      ),
  );

  return <PrismObject idPrefix="" gap={15} x={2000} y={360 - 15 * 2} />;
};
