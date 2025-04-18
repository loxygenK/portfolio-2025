export type XY = readonly [number, number];
export type MutXY = [number, number];

export function randomInt(from: number, to: number): number {
  return from + Math.floor(Math.random() * (to - from));
}

export function forXY(fn: (i: 0 | 1) => number): XY {
  return [fn(0), fn(1)];
}

export function offXY(origin: XY, offset: XY): XY {
  return forXY((i) => origin[i] + offset[i]);
}

export function angled(length: number, angleDeg: number): XY {
  const rad = angleDeg * (Math.PI / 180);

  return [length * Math.cos(rad), length * Math.sin(rad)];
}

export function cssXY([x, y]: XY): string {
  return `${x}px ${y}px`;
}
