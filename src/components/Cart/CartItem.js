import Button from "../UI/Button";

import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <span className={styles.name}>{props.name}</span>
        <div className={styles.summary}>
          <span className={styles.price}>{price}</span>
          <span className={styles.count}>x {props.count}</span>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button
          type="outline-primary"
          className={styles.button}
          onClick={props.onRemove}
        >
          -
        </Button>
        <Button
          type="outline-primary"
          className={styles.button}
          onClick={props.onAdd}
        >
          +
        </Button>
      </div>
    </li>
  );

};

export default CartItem;
