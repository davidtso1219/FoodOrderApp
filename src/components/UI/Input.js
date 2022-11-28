import { useState, forwardRef, useImperativeHandle } from "react";

import styles from "./Input.module.css";

const Input = forwardRef((props, ref) => {

  const initialValue = props.value ? props.value : '';
  const validateValue = props.validateValue ? props.validateValue : () => true;

  const [value, setValue] = useState(initialValue);
  const [showError, setShowError] = useState(false);
  const valueIsValid = validateValue(value);

  const reset = () => {
    setValue(initialValue);
  }

  const inputOnChangeHandler = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  useImperativeHandle(ref, () => ({
    value,
    setValue,
    valueIsValid,
    reset,
    showError: () => setShowError(true),
    hideError: () => setShowError(false),
  }));

  const divClassName = `${props.className} ${styles.input} ${
    showError && !valueIsValid ? styles.invalid : ""
  }`;

  return (
    <div className={divClassName}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        {...props.input}
        value={value}
        onChange={inputOnChangeHandler}
      />
      {showError && !valueIsValid && props.errorText && (
        <p className={styles["error-text"]}>{props.errorText}</p>
      )}
    </div>
  );
});

export default Input;
