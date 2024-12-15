import React from "react";
import styles from "./RegisterInput.module.css";

export const RegisterInput = ({
  iconSrc,
  placeholder,
  alt,
  type = "text",
  id,
  onChange,
}) => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputWrapper}>
        <img
          loading="lazy"
          src={iconSrc}
          className={styles.inputIcon}
          alt={alt}
        />
        <div className={styles.divider} />
      </div>
      <input
        id={id}
        type={type}
        className={styles.input}
        placeholder={placeholder}
        onChange={onChange}
        aria-label={placeholder}
      />
    </div>
  );
};
