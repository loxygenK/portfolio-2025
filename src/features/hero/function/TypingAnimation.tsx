import type { SubAnimationFC } from "../type";

type Props = {
  children: string;
};

export const DecorativeText: SubAnimationFC<Props> = ({ children }) => {
  return (
    <div>
      <p>
        {children.split("").map((char, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: The list does not change
          <span translate="no" key={i}>
            {char}
          </span>
        ))}
      </p>
    </div>
  );
};
