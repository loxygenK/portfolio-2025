import type { FC } from "react";

const TAN30 = Math.tan(Math.PI / 6);

type Props = {
  idPrefix: string;
  gap: number;
  x: number;
  y: number;
};
export const PrismObject: FC<Props> = ({ idPrefix, gap, x, y }) => {
  const smallerGap = gap * 0.86;

  return (
    <g id={`${idPrefix}lines`} stroke="#fff3" strokeWidth="2">
      {Array.from({ length: 6 }).map((_, i) => (
        <path
          d={svgLine([x + i * smallerGap, 0], [0, 0], [0, 720])}
          id={`${idPrefix}line-1`}
          // biome-ignore lint/suspicious/noArrayIndexKey: The list does not change
          key={i}
        />
      ))}
      {Array.from({ length: 6 }).map((_, i) => (
        <path
          d={svgLine([x, y + i * gap], [0, 0], [1280, 1280 * TAN30])}
          id={`${idPrefix}line-2`}
          // biome-ignore lint/suspicious/noArrayIndexKey: The list does not change
          key={i}
        />
      ))}
      {Array.from({ length: 6 }).map((_, i) => (
        <path
          d={svgLine([x, y + i * gap], [0, 0], [1280, 1280 * -TAN30])}
          id={`${idPrefix}line-3`}
          // biome-ignore lint/suspicious/noArrayIndexKey: The list does not change
          key={i}
        />
      ))}

      <path
        d={svgLine(
          // This works and is mathematically correct.
          // Look at 'em, that's one of the creation and logic intersection moment right there
          [x, y],
          [0, 0],
          [0, gap * 5],
          [smallerGap * 5, smallerGap * 5 * TAN30],
          [0, 0],
        )}
        stroke="white"
        strokeWidth="2"
        fill="none"
        id={`${idPrefix}prism`}
      />
    </g>
  );
};

function svgLine([tfx, tfy]: [number, number], ...points: [number, number][]) {
  const [sx, sy] = points[0];

  return [
    `M ${tfx + sx} ${tfy + sy}`,
    points
      .slice(1)
      .map(([x, y]) => `L ${tfx + x} ${tfy + y}`)
      .join(" "),
  ].join(" ");
}
