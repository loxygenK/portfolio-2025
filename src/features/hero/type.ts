import type { Timeline } from "animejs";
import type { FC } from "react";

export type AnimationDefinition = (delay: number) => Timeline;
export type RegisterAnimation = (def: AnimationDefinition) => void;

export type AnimationProps = {
  registerAnimation: RegisterAnimation;
  onIntendedEnd?: () => void;
  hidden?: boolean;
};

export type SubAnimationFC<T = Record<never, never>> = FC<AnimationProps & T>;
