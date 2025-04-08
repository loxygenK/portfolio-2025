import { useState } from 'react'
import './App.css'
import { Driver } from './animations/_drivers'
import { WhereIWouldBe } from './animations/WhereIWouldBe';

import styles from "./App.module.css";
import { ScrollSuggestions } from './animations/ScrollSuggestion';
import { Header } from './Header';

function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className={showContent ? "" : styles.animating}>
      { showContent && <Header /> }
      <figure className={styles.animation}>
        <Driver onInitialAnimationDone={() => setShowContent(true)} />
      </figure>
      { !showContent && <div className={styles.firstViewPadding} /> }
      <div className={`${styles.firstView} ${showContent ? "" : styles.hidden}`}>
        { showContent && (
          <>
            <WhereIWouldBe />
            <ScrollSuggestions />
          </>
        )}
      </div>
      <div>
        {"CONTENTS ".repeat(1000)}
      </div>
    </div>
  )
}

export default App
