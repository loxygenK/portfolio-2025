import { SubAnimationFC } from "./type";
import { useSubAnimation } from "./hooks/useAnimeJs";
import { createTimeline, svg } from "animejs";
import { stagger } from "animejs";
import { PrismObject } from "./PrismObject";

const GAP = 15;
const SMALLER_GAP = GAP * 0.86;

const TAN30 = Math.tan(Math.PI / 6);

const X = 2000;
const Y = 360 - GAP * 2;

/**
 *
 * Animation sketch:
 *
 *   v0
 *   1. A light starts from a point and runs to the right.
 *   2. A prism is constructed at the right of the screen.
 *   3. A light hits to the prism
 *   4. At that moment, the screen swipes from black to white
 *   5. Simultaneously, the screen swipes from black to white
 *
 *   v1
 *   1. A light ray runs from the left to right, accelerating
 *   2. A prism is constructed at the right of the screen. (No lines)
 *   3. The ray accelerates, eventuallly hits to the prism
 *   4. The rainbow light bursts from the other side of the prism
 *   5. Simultaneously, the screen swipes from black to white
 *   6. Prism tracing line appears (Wait, is this a logic? - Always has been)
 *
 */

export const Prism: SubAnimationFC = ({ registerAnimation }) => {
  useSubAnimation(
    registerAnimation,
    () => createTimeline({ playbackEase: "easeOut" })
      // .add(`.${styles.prismRoot}`, {
      //   x: { from: "30vw", to: "30vw" },
      // }, 0)
      // .add("g#line-groups", {
      // }, 0)
      .add(svg.createDrawable("#line-1"), {
        draw: ['0 0', '0 1'],
        duration: 1000,
        delay: stagger(50),
      }, 0)
      .add(svg.createDrawable("#line-2"), {
        draw: ['0 0', '0 1'],
        duration: 1000,
        delay: stagger(70),
      }, 300)
      .add(svg.createDrawable("#line-3"), {
        draw: ['0 0', '0 1'],
        duration: 1000,
        delay: stagger(70),
      }, 800)
      .add(svg.createDrawable("#prism"), {
        duration: 700,
        draw: ['0 0', '0 1'],
        // draw: [
        //   { to: ['0 0', `0 ${1 / 3 - 0.02}`], },
        //   { to: [`0 ${1/3 - 0.02}`, `0 ${2 / 3 - 0.01}`], delay: 100 },
        //   { to: [`0 ${2 / 3 + 0.02}`, '0 1'], delay: 100 },
        // ],
      }, 400)
  );

  return <PrismObject idPrefix="" gap={15} x={2000} y={360 - 15 * 2} />
};

