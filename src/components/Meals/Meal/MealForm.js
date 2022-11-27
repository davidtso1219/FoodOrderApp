import { useRef, useContext } from 'react';

import Button from "../../UI/Button";
import Input from "../../UI/Input";
import CartContext from "../../../contexts/CartContext";

import styles from "./MealForm.module.css";

const MealForm = (props) => {
  const inputRef = useRef();
  const ctx = useContext(CartContext);

  const meal = props.meal;
  const id = `amount_${props.id}`;

  const addToCart = (e) => {
    e.preventDefault();
    ctx.addItems(meal, Number(inputRef.current.value))
  };

  return (
    <form className={styles.control}>
      <Input
        label="Amount"
        id={id}
        input={{
          ref: inputRef,
          type: 'number',
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
          className: styles.input
        }}
      />
      <Button type="primary" className={styles.button} onClick={addToCart}>
        Add
      </Button>
    </form>
  );
};

export default MealForm;
