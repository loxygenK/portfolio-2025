import { FC } from "react";

import styles from "./Header.module.css";

const links = [
  { href: "https://x.com/flisan_rs", service: "X / Twitter" },
  { href: "https://mixi.social/@flisan", service: "mixi2" },
  { href: "https://github.com/loxygenK", service: "GitHub" },
];

export const Header: FC = () => {
  return (
    <header className={styles.root}>
      <span>
        FLISAN'S PORTFOLIO
      </span>
      <nav className={styles.links}>
        <ul>
        {
          links.map(({ href, service }) => (
            <li key={`${href}-${service}`}>
              <a href={href} target="_blank" rel="noreferrer noopener">
                {service}
              </a>
            </li>
          ))
        }
        </ul>
      </nav>
    </header>
  );
};

