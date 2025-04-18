import { type FC, useCallback, useState } from 'react'

import styles from "./App.module.css";
import { Hero } from './features/hero/content/Hero';
import { BasicIntroduction } from './features/basic/content/BasicIntroduction';
import { EngineeringSkill } from './features/skill/content/EngineeringSkill';
import { PersonalTryouts } from './features/tryouts/content/PersonalTryouts';
import { Activities } from './features/activities/content/Activities';
import { Header } from './features/header/content/Header';
import { Links } from './features/links/content/Links';
import classNames from 'classnames';

function App() {
  const [showContent, setShowContent] = useState(false);

  const handleInitalAnimationDone = useCallback(() => {
    setShowContent(true);
  }, []);

  return (
    <div className={classNames(styles.root,showContent ? "" : styles.animating)}>
      { showContent && <Header /> }
      <Hero onInitialAnimationDone={handleInitalAnimationDone} />
      <Content shown={showContent} />
    </div>
  )
}

type ContentProps = {
  shown: boolean;
};
const Content: FC<ContentProps> = ({ shown }) => {
  return (
    <main className={classNames(styles.content, !shown && styles.hidden)}>
      <BasicIntroduction />
      <EngineeringSkill />
      <PersonalTryouts />
      <Activities />
      <Links />
    </main>
  );
}

export default App
