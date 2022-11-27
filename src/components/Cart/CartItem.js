import { useContext } from "react";

import Button from "../UI/Button";
import Input from "../UI/Input";
import CartContext from "../../contexts/CartContext";

import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const ctx = useContext(CartContext);

  const item = props.item;

  const addAnItem = (e) => {
    e.preventDefault();
    ctx.addItems(item, 1);
  };
  const removeAnItem = (e) => {
    e.preventDefault();
    ctx.removeItems(item, 1);
  };

  return (
    <div className={styles.item}>
      <div className={styles.description}>
        <div className={styles.name}>{item.name}</div>
        <div className={styles["price-count"]}>
          <span className={styles.price}>${item.price}</span>
          <Input
            input={{
              value: `x ${item.count}`,
              className: styles.count,
              onChange: (e) => e.preventDefault(),
              disabled: "disabled",
            }}
          />
        </div>
      </div>
      <div className={styles.buttons}>
        <Button
          type="outline-primary"
          className={styles.button}
          onClick={removeAnItem}
        >
          -
        </Button>
        <Button
          type="outline-primary"
          className={styles.button}
          onClick={addAnItem}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
