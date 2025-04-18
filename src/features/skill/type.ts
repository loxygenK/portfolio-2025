/*
 *                        [skilled]
 *                  for-ref | okay
 * [not that love]-----------O--------------[big love]
 *                  for-ref | interested
 *                    [otw of learning]
 */
export type Level =
  | "okay" // 問題なく使える。リードしても事故らない
  | "interested" // それなりに問題なく使えるけど、リードする場合は慎重になりたい。雑にやると事故る
  | "for-reference"; // 肌感はわかるけど、自走できるかは怪しい;

export type Tech = {
  name: string;
  prefer: boolean;
};
