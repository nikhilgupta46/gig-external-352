import React, { useState } from "react";
import styles from "./Register.module.css";
import { RegisterInput } from "./RegisterInput";

export const Register = ({ toggleVisibility, submitHandler }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    language: "",
  });

  const inputs = [
    {
      id: "name",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/daa1816caefbfa60ed7bcc1c426f5975aa0b13543b6a9c10046ace217f601991?placeholderIfAbsent=true&apiKey=5e14ba96947849638a557c36fd1a3dd3",
      placeholder: "Enter name",
      alt: "Name icon",
      type: "text",
    },
    {
      id: "email",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c1e62cc1e4fd457fda394fceaffa92f75b38dda342ad1d97714b31dca8942daf?placeholderIfAbsent=true&apiKey=5e14ba96947849638a557c36fd1a3dd3",
      placeholder: "Enter email",
      alt: "Email icon",
      type: "email",
    },
    {
      id: "gender",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a2b59fa592b3b52677dca1f001ad320d143e4e70b2f0c77ceeefe3a120084c08?placeholderIfAbsent=true&apiKey=5e14ba96947849638a557c36fd1a3dd3",
      placeholder: "Enter gender",
      alt: "Gender icon",
      type: "text",
    },
    {
      id: "language",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2717b780332b198b9f25ac35ec23ec97382a02fbae701e2cc6e0c1e3217846ba?placeholderIfAbsent=true&apiKey=5e14ba96947849638a557c36fd1a3dd3",
      placeholder: "Enter language",
      alt: "Language icon",
      type: "text",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleVisibility();
    submitHandler();
  };

  const handleInputChange = (id) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [id]: e.target.value,
    }));
  };

  return (
    <div className={styles.registerPopUp}>
      <div className={styles.contentWrapper}>
        <div className={styles.row}>
          <h2 className={styles.title}>Enter Details to continue</h2>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/beb8c68764cdea30aeb0743ca105da79aa14e958cff4cc56c57e5aa90bfe6664?placeholderIfAbsent=true&apiKey=5e14ba96947849638a557c36fd1a3dd3"
            className={styles.closeIcon}
            alt="Close registration"
            role="button"
            tabIndex={0}
            onClick={toggleVisibility}
          />
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {inputs.map((input) => (
            <RegisterInput
              key={input.id}
              {...input}
              onChange={handleInputChange(input.id)}
            />
          ))}
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
