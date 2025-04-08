import { createScope, createTimeline, Timeline } from "animejs";
import { FC, useEffect, useMemo, useRef, useState } from "react";

import { RootCamera } from "./RootCamera";
import { useSubTimelines } from "./hooks/useSubTimelines";
import { Background } from "./Background";
import { Message } from "./Message";
import { Meet } from "./Meet";

type Props = {
  onInitialAnimationDone: () => void;
};

const DISABLE_ANIMATION = false;

export const Driver: FC<Props> = ({ onInitialAnimationDone }) => {
  const root = useRef<HTMLDivElement>(null);

  const [scene, setScene] = useState<"prism" | "message" | "mainContent">(
    "prism"
  );

  const { registerAnimation, syncTimelinesTo } = useSubTimelines({
    background: 0,
    prism: 0,
    message: 7980,
    meet: 13300,
  }, {
    message: () => setScene("message"),
    meet: () => setScene("mainContent"),
  });

  const timeline = useMemo<Timeline>(() => createTimeline(), []);

  useEffect(() => {
    if(root.current === null) {
      return undefined;
    }

    createScope({ root: root.current }).add(() => {
      syncTimelinesTo(timeline).call(onInitialAnimationDone, 17000);

      if(DISABLE_ANIMATION) {
        timeline.seek(18000);
      }
    });

    window.addEventListener("keydown", () => {
      console.log("Animation stopped!");
      timeline.pause();
    });
  }, []);

  return (
    <div ref={root}>
      {!DISABLE_ANIMATION && (
        <Background registerAnimation={registerAnimation("background")} />
      )}
      <RootCamera registerAnimation={registerAnimation("prism")} hidden={scene !== "prism"} />
      <Message registerAnimation={registerAnimation("message")} hidden={scene !== "message"} />
      <Meet registerAnimation={registerAnimation("meet")} hidden={scene !== "mainContent"} />
    </div>
  );
};

