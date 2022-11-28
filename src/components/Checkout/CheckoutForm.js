import Button from "../UI/Button";
import Input from "../UI/Input";

import styles from "./CheckoutForm.module.css";

const CheckoutForm = (props) => {
  const onConfirmBtnClick = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form}>
      <div className={styles["form-control"]}>
        <Input
          className={styles.input}
          label="Your Name"
          id="name"
          input={{ type: "text" }}
        />
        <Input
          className={styles.input}
          label="Address"
          id="address"
          input={{ type: "text" }}
        />
        <Input
          className={styles.input}
          label="City"
          id="city"
          input={{ type: "text" }}
        />
        <Input
          className={styles.input}
          label="Postal Code"
          id="postal-code"
          input={{ type: "text" }}
        />
      </div>
      <div className={styles["form-actions"]}>
        <Button
          className={styles.button}
          type="outline-primary"
          onClick={props.onCancelBtnClick}
        >
          Cancel
        </Button>
        <Button
          className={styles.button}
          type="primary"
          onClick={onConfirmBtnClick}
        >
          Confirm
        </Button>
      </div>
    </form>
  );
};

export default CheckoutForm;
