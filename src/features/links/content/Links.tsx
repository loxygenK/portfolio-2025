import type { FC, MouseEventHandler } from "react";
import { Section } from "../../../layout/Section";
import { Heading } from "../../../layout/Heading";

import styles from "./Links.module.css";

const links = [
  { href: "https://github.com/loxygenK", service: "GitHub" },
  { href: "https://x.com/flisan_rs", service: "X / Twitter" },
  { href: "https://mixi.social/@flisan", service: "mixi2" },
];

export const Links: FC = () => {
  const handleEmailLinkClick: MouseEventHandler<HTMLButtonElement> = () => {
    navigator.clipboard.writeText(
      ["dev", ".", "f4n", "@", "hi"].reverse().join(""),
    );
  };

  const handleEmailLinkMouseUp: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.currentTarget.blur();
  };

  return (
    <Section className={styles.root}>
      <Heading subText="LINKS">外部リンク</Heading>
      <div className={styles.blogPlug}>
        <span>
          Zenn 等とは別にブログサイトを設けました！Zenn
          よりも広い範囲・高頻度で記事を書いていく予定です。
          ポートフォリオでカバーできていない、詳細なスキル感や人物感などはぜひこちらをご参照いただければと思います！
        </span>
        <a
          href="https://blog.f4n.dev/"
          target="_blank"
          rel="noreferrer noopener"
        >
          → https://blog.f4n.dev
        </a>
      </div>
      <nav>
        <ul className={styles.linkList}>
          {links.map(({ href, service }) => (
            <li key={`${href}-${service}`}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className={styles.link}
              >
                <span className={styles.serviceName}>↗ {service}</span>
                <span>{href}</span>
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              className={styles.link}
              onClick={handleEmailLinkClick}
              onMouseUp={handleEmailLinkMouseUp}
            >
              <span className={styles.serviceName}>E-mail</span>
              <span className={styles.emailAddress}>
                <span>.dev</span>
                <span>f4n</span>
                <span>@</span>
                <span>hi</span>
              </span>
            </button>
          </li>
        </ul>
      </nav>
      <p className={styles.caveats}>
        メールアドレスはクリックするとコピーできます。
        <u>上記のメールアドレスへの特定電子メールの配信は拒否します！</u>
      </p>
    </Section>
  );
};
