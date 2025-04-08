import { Timeline } from "animejs";
import { FC } from "react";

export type AnimationDefinition = (delay: number) => Timeline;
export type RegisterAnimation = (def: AnimationDefinition) => void;

export type AnimationProps = {
  registerAnimation: RegisterAnimation;
  onIntendedEnd?: () => void;
  hidden?: boolean;
};

export type SubAnimationFC<T = {}> = FC<AnimationProps & T>;

