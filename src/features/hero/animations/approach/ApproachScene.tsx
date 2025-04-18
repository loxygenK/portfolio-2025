import type { SubAnimationFC } from "../../type";
import { Sketch } from "../../sketch/Sketch";
import { createTimeline } from "animejs";
import { useSubAnimation } from "../../hooks/useAnimeJs";

import styles from "./ApproachScene.module.css";
import { Creativity } from "./Creativity";
import { Prism } from "./Prism";
import { useSubTimelines } from "../../hooks/useSubTimelines";

export const ApproachScene: SubAnimationFC = (props) => {
  const { registerAnimation, syncTimelinesTo } = useSubTimelines({
    root: 0,
    creativity: 0,
    prism: 6500,
  });

  useSubAnimation(registerAnimation("root"), () =>
    createTimeline().add(
      `.${styles.viewportRoot}`,
      {
        translateX: {
          from: 0,
          to: -1300,
          duration: 3000,
          delay: 4500,
          ease: "cubicBezier(.47,0,.63,1.01)",
        },
        scale: {
          from: 8,
          to: 1,
          duration: 8000,
          ease: "out",
        },
      },
      0,
    ),
  );

  useSubAnimation(props.registerAnimation, () =>
    syncTimelinesTo(createTimeline()),
  );

  return (
    <Sketch className={styles.root} hidden={props.hidden}>
      <g className={styles.viewportRoot}>
        <Creativity
          registerAnimation={registerAnimation("creativity")}
          onIntendedEnd={props.onIntendedEnd}
        />
        <Prism registerAnimation={registerAnimation("prism")} />
      </g>
    </Sketch>
  );
};
