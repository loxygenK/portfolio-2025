import type { Timeline } from "animejs";
import type { AnimationDefinition } from "../type";
import { useCallback, useRef } from "react";

export function useSubTimelines<const T extends Record<string, number>>(
  timelines: T,
  callback?: (key: keyof T) => void,
) {
  const timelineRef = useRef<{ [key in keyof T]?: AnimationDefinition }>({});

  const registerAnimation = useCallback(
    (animation: keyof T) => (subTimeline: AnimationDefinition) => {
      timelineRef.current[animation] = subTimeline;
    },
    [],
  );

  const syncTimelinesTo = useCallback(
    (timeline: Timeline) => {
      const entries = Object.entries(timelines) as [keyof T, number][];

      for (const [key, timing] of entries) {
        timeline.sync(
          timelineRef.current[key as keyof T]?.(timing as number),
          timing,
        );

        if (callback !== undefined) {
          timeline.call(() => callback(key), timing);
        }
      }

      return timeline;
    },
    [callback, timelines],
  );

  return { registerAnimation, syncTimelinesTo };
}
