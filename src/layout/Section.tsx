import type { FC, HTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const Section: FC<Props> = ({ children, ...props }) => {
  return <section {...props}>{children}</section>;
};
