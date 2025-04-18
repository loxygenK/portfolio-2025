import { createScope } from "animejs";
import { type RefObject, useEffect } from "react";

export function useAnimation(
  root: RefObject<HTMLElement | SVGElement | null>,
  scopeDef: () => void,
) {
  useEffect(() => {
    if (root.current === null) {
      return undefined;
    }

    createScope({ root: root.current }).add(() => {
      scopeDef();
    });
  }, [root.current, scopeDef]);
}
