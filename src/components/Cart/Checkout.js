import { useRef } from "react";

import Button from "../UI/Button";
import Input from "../UI/Input";

import styles from "./Checkout.module.css";

const Checkout = (props) => {
  const nameInputRef = useRef(null);
  const addressInputRef = useRef(null);
  const cityInputRef = useRef(null);
  const postalCodeInputRef = useRef(null);

  const submitFormHandler = (e) => {
    e.preventDefault();
    nameInputRef.current.showError();
    addressInputRef.current.showError();
    cityInputRef.current.showError();
    postalCodeInputRef.current.showError();

    if (
      nameInputRef.current.valueIsValid &&
      addressInputRef.current.valueIsValid &&
      cityInputRef.current.valueIsValid &&
      postalCodeInputRef.current.valueIsValid
    ) {
      props.onConfirm({
        name: nameInputRef.current.value,
        address: addressInputRef.current.value,
        city: cityInputRef.current.value,
        postalCode: postalCodeInputRef.current.value,
      })
    }
  };

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <div className={styles["form-control"]}>
        <Input
          className={styles.input}
          label="Your Name"
          id="name"
          ref={nameInputRef}
          input={{ type: "text" }}
          validateValue={(value) => value.trim() !== ""}
          errorText="Name can't be empty!"
        />
        <Input
          className={styles.input}
          label="Address"
          id="address"
          ref={addressInputRef}
          input={{ type: "text" }}
          validateValue={(value) => value.trim() !== ""}
          errorText="Address can't be empty!"
        />
        <Input
          className={styles.input}
          label="City"
          id="city"
          ref={cityInputRef}
          input={{ type: "text" }}
          validateValue={(value) => value.trim() !== ""}
          errorText="City can't be empty!"
        />
        <Input
          className={styles.input}
          label="Postal Code"
          id="postal-code"
          ref={postalCodeInputRef}
          input={{ type: "text" }}
          validateValue={(value) => value.trim() !== ""}
          errorText="Postal Code can't be empty!"
        />
      </div>
      <div className={styles["form-actions"]}>
        <Button
          className={styles.button}
          type="outline-primary"
          onClick={props.onCancel}
        >
          Cancel
        </Button>
        <Button className={styles.button} type="primary">
          Confirm
        </Button>
      </div>
    </form>
  );
};

export default Checkout;
