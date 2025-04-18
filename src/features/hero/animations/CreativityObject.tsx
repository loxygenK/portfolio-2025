import { type FC, useMemo } from "react";
import { generatePolygon, Line } from "../sketch/Line";

import styles from "./CreativityObject.module.css";
import { forXY, randomInt, type XY } from "../sketch/util";

const LINE_LENGTH = 20;

type Props = {
  idPrefix: string;
  gridAmount: XY;
  canvasArea: XY;
  length: number;
};
export const CreativityObject: FC<Props> = ({
  idPrefix,
  gridAmount,
  canvasArea,
  length,
}) => {
  return (
    <g id={idPrefix} className={styles.root}>
      {Array.from({ length: gridAmount[1] }).map((_, y) =>
        Array.from({ length: gridAmount[0] }).map((_, x) => (
          <Shapes
            grid={[x, y]}
            idPrefix={idPrefix}
            gridAmount={gridAmount}
            canvasArea={canvasArea}
            length={length}
            // biome-ignore lint/suspicious/noArrayIndexKey: The list does not change
            key={`${x}-${y}`}
          />
        )),
      )}
      <Line
        origin={[0, 0]}
        points={[
          [1200, 360],
          [2000, 360],
        ]}
        fill="none"
        stroke="#fff"
        strokeWidth={1}
        className={styles.ray}
        id={`${idPrefix}ray`}
      />
    </g>
  );
};

type ShapesProps = {
  grid: XY;
} & Props;

const Shapes: FC<ShapesProps> = ({
  grid,
  idPrefix,
  canvasArea,
  gridAmount,
}) => {
  const gridSize = forXY((i) => canvasArea[i] / gridAmount[i]);
  const gridShift = forXY((i) => ((i === 0 ? 1280 : 720) - canvasArea[i]) / 2);
  const gridSparse = [40, 40];

  const pointCount = useMemo(() => randomInt(3, 8), []);

  const diff = useMemo(
    () =>
      [
        randomInt(-gridSparse[0], gridSparse[0]),
        randomInt(-gridSparse[1], gridSparse[1]),
      ] as const,
    [],
  );

  const origin = [
    grid[0] * gridSize[0] + diff[0] + gridShift[0],
    grid[1] * gridSize[1] + diff[1] + gridShift[1],
  ] as const;

  const skew = useMemo(
    () =>
      Array.from({ length: pointCount }).map(() => [
        randomInt(-1, 1),
        randomInt(-1, 1),
      ]),
    [pointCount],
  );

  const points = useMemo(
    () =>
      generatePolygon(pointCount, LINE_LENGTH).map(
        ([x, y], i) => [x + skew[i][0], y + skew[i][1]] as const,
      ),
    [pointCount, skew],
  );

  const center = [
    origin[0] + LINE_LENGTH / 2,
    origin[1] + LINE_LENGTH / 2,
  ] as const;

  return (
    <>
      <Line
        origin={origin}
        points={points}
        closed
        fill="none"
        stroke="#fff"
        className={styles.shapes}
        style={{
          transformOrigin: `${center[0]}px ${center[1]}px`,
        }}
        id={`${idPrefix}shapes`}
      />
      <Line
        origin={[0, 0]}
        points={[
          center,
          [
            1150,
            360 +
              (grid[1] - gridAmount[1] / 2) * (2 * gridAmount[0]) +
              (grid[0] - gridAmount[0] / 2) * 2,
          ],
        ]}
        dAdd="Q 1200 360 1300 360"
        fill="none"
        stroke="#fff"
        strokeWidth={0.5}
        className={styles.trail}
        id={`${idPrefix}trail`}
      />
    </>
  );
};
