import React from "react";
import styles from "./styles.module.css";

const BottomTransition = ({ children, isVisible }) => {
  return (
    <div>
      <div
        className={`${styles.transitionContainer} ${
          isVisible ? styles.visible : styles.hidden
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default BottomTransition;
