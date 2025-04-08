import { Timeline } from "animejs";
import { AnimationDefinition } from "../type";
import { useRef } from "react";

export function useSubTimelines<const T extends string>(timelines: Record<T, number>, callback?: { [key in T]?: () => void }) {
  const timelineRef = useRef<{ [key in T]?: AnimationDefinition }>({});

  const registerAnimation = (animation: T) => (subTimeline: AnimationDefinition) => {
    timelineRef.current[animation] = subTimeline;
  };

  const syncTimelinesTo = (timeline: Timeline) => {
    const entries = Object.entries(timelines) as [T, number][];

    entries.forEach(([key, timing]) => {
      timeline.sync(timelineRef.current[key as T]?.(timing as number), timing);
    });

    if(callback !== undefined) {
      entries.forEach(([key, timing]) => {
        timeline.call(() => callback?.[key]?.(), timing);
      });
    }

    return timeline;
  };

  return { registerAnimation, syncTimelinesTo };
}

