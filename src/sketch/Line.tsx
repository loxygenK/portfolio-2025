import { FC, SVGAttributes } from "react";
import { MutXY, XY } from "./util";

type Props = {
  closed?: boolean;
  origin: XY;
  points: Array<XY>;
  dAdd?: string
} & Omit<SVGAttributes<SVGPathElement>, "origin" | "points">;
export const Line: FC<Props> = ({ closed = false, origin, points, dAdd = "", ...attrs }) => {
  return (
    <path
      d={svgLine(origin, points, closed) + " " + dAdd}
      {...attrs}
    />
  );
};

function svgLine([tfx, tfy]: XY, points: Array<XY>, closed: boolean) {
  const [sx, sy] = points[0];

  return [
    `M ${tfx + sx} ${tfy + sy}`,
    points.slice(1).map(([x, y]) => `L ${tfx + x} ${tfy + y}`).join(" ")
  ].join(" ") + (closed ? "Z" : "");
}

export function square(size: number): XY[] {
  return [[0, 0], [size, 0], [size, size], [0, size], [0, 0]];
}

export function generatePolygon(pointCount: number, size: number): XY[] {
  const points: MutXY[] = Array.from({ length: pointCount }).map(() => [0, 0]);

  const advanceAngle = (2 * Math.PI) / pointCount;

  const length = size * (4 / pointCount);

  // points[0] is always [0, 0]
  for(let i = 1; i < pointCount; i++) {
    const angleAgainstLastPoint = advanceAngle * (i - 1);
    points[i][0] = points[i - 1][0] + Math.cos(angleAgainstLastPoint) * length;
    points[i][1] = points[i - 1][1] + Math.sin(angleAgainstLastPoint) * length;
  }

  return points;
}

