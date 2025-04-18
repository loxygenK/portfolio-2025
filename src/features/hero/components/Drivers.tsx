import { createScope, createTimeline, type Timeline } from "animejs";
import {
  type FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { ApproachScene } from "../animations/approach/ApproachScene";
import { Background } from "../animations/Background";
import { MessageScene } from "../animations/message/MessageScene";
import { IntersectScene } from "../animations/intersect/IntersectScene";
import { useSubTimelines } from "../hooks/useSubTimelines";

type Props = {
  onInitialAnimationDone: () => void;
};

const DISABLE_ANIMATION = false;

const KEYFRAMES = {
  background: 0,
  prism: 0,
  message: 7980,
  meet: 13300,
};

export const Driver: FC<Props> = ({ onInitialAnimationDone }) => {
  const root = useRef<HTMLDivElement>(null);

  const [scene, setScene] = useState<"prism" | "message" | "mainContent">(
    "prism",
  );

  const { registerAnimation, syncTimelinesTo } = useSubTimelines(
    KEYFRAMES,
    useCallback((key: keyof typeof KEYFRAMES) => {
      if (key === "message") {
        setScene("message");
      }
      if (key === "meet") {
        setScene("mainContent");
      }
    }, []),
  );

  const timeline = useMemo<Timeline>(() => createTimeline(), []);

  useEffect(() => {
    if (root.current === null) {
      return undefined;
    }

    createScope({ root: root.current }).add(() => {
      syncTimelinesTo(timeline).call(onInitialAnimationDone, 17000);

      if (DISABLE_ANIMATION) {
        timeline.seek(18000);
      }
    });

    const handleKeyDownForSkipAnimation = (key: KeyboardEvent) => {
      if (key.key === " " && timeline.currentTime < 18000) {
        timeline.pause();
      }

      if (
        (key.key === "Escape" || key.key === "Enter") &&
        timeline.currentTime < 18000
      ) {
        timeline.seek(18000);
      }
    };

    window.addEventListener("keydown", handleKeyDownForSkipAnimation);

    return () => {
      window.removeEventListener("keydown", handleKeyDownForSkipAnimation);
    };
  }, [syncTimelinesTo, timeline, onInitialAnimationDone]);

  return (
    <div ref={root} aria-hidden>
      {!DISABLE_ANIMATION && (
        <Background registerAnimation={registerAnimation("background")} />
      )}
      <ApproachScene
        registerAnimation={registerAnimation("prism")}
        hidden={scene !== "prism"}
      />
      <MessageScene
        registerAnimation={registerAnimation("message")}
        hidden={scene !== "message"}
      />
      <IntersectScene
        registerAnimation={registerAnimation("meet")}
        hidden={scene !== "mainContent"}
      />
    </div>
  );
};
