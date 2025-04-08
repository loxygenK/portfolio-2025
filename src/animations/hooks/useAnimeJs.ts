import { useEffect, } from "react";
import { AnimationDefinition, RegisterAnimation } from "../type";

export function useSubAnimation(registerAnimation: RegisterAnimation, animationDef: AnimationDefinition) {
  useEffect(() => {
    registerAnimation(animationDef);
  }, []);
}

