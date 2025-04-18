import { type FC, useEffect, useState } from "react";

import styles from "./Me.module.css";
import classNames from "classnames";

type Props = {
  className?: string;
};

type InteractionState = null | "hover" | "hold";

export const Me: FC<Props> = ({ className }) => {
  const [interaction, setInteraction] = useState<InteractionState>(null);

  return (
    <figure
      className={classNames(
        styles.root,
        className,
        interaction === "hold" && styles.shake,
      )}
    >
      <div className={styles.popOut} aria-hidden>
        <svg
          viewBox="0 0 100 30"
          preserveAspectRatio="xMidYMin slice"
          className={styles.lines}
          role="presentation"
        >
          <path d="M 0 0 L 10 30" />
          <path d="M 100 0 L 90 30" />
        </svg>
        <span className={styles.speaking}>
          {interaction === null && "I'm Flisan!"}
          {interaction === "hover" && "Oh wow, hi!"}
          {interaction === "hold" && <FretFul />}
        </span>
      </div>
      <img
        src="/me.png"
        alt="フライさんのアバター"
        draggable={false}
        className={classNames(
          styles.img,
          interaction === "hold" && styles.grabbing,
        )}
        onMouseEnter={() => setInteraction("hover")}
        onMouseLeave={() => setInteraction(null)}
        onMouseDown={() => setInteraction("hold")}
        onMouseUp={() => setInteraction(null)}
      />
    </figure>
  );
};

const FRETFUL_TEXT_FROM = "WGBHKVTPZJ";
const FretFul = () => {
  const [text, setText] = useState("OUGH");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newText = Array.from({ length: 7 })
        .map(() => {
          const index = Math.floor(Math.random() * FRETFUL_TEXT_FROM.length);
          return FRETFUL_TEXT_FROM.substring(index, index + 1);
        })
        .join("");
      setText(newText);
    }, 250);

    return () => {
      clearTimeout(timeout);
    };
  });

  return <>{text}</>;
};
