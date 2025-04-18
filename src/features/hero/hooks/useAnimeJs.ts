import { useEffect } from "react";
import type { AnimationDefinition, RegisterAnimation } from "../type";

export function useSubAnimation(
  registerAnimation: RegisterAnimation,
  animationDef: AnimationDefinition,
) {
  useEffect(() => {
    registerAnimation(animationDef);
  }, [registerAnimation, animationDef]);
}
