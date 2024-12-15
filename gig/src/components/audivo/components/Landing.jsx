import * as React from "react";
import styles from "../styles/Landing.module.css";
import LandingGif from "../../../assets/gif/landing.gif";

export default function Landing({ toggleVisibility }) {
  return (
    <main className={styles.container}>
      <header className={styles.headerContent}>
        <h1 className={styles.brandLogo}>audivo</h1>
        <p className={styles.heroText}>
          <span className={styles.regularText}>We Hear You,</span> <br />
          <span className={styles.highlightedText}>Loud & Typed!</span>
        </p>
      </header>

      <div className={styles.mediaFrame}>
        <img
          loading="lazy"
          src={LandingGif}
          className={styles.mediaContent}
          alt="Audio visualization representation"
        />
      </div>

      <button
        className={styles.ctaButton}
        onClick={toggleVisibility}
        tabIndex={0}
      >
        Get Started
      </button>
    </main>
  );
}
