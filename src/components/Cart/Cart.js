import { useContext } from 'react';

import Card from "../UI/Card";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import CartItem from "./CartItem";
import CartContext from "../../contexts/CartContext"

import styles from "./Cart.module.css";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const cartItems = ctx.cart.map((item) => (
    <CartItem key={item.id} item={item}></CartItem>
  ));

  const totalAmount = ctx.cart
    .map((cartItem) => cartItem.price * cartItem.count)
    .reduce((p1, p2) => p1 + p2, 0)
    .toFixed(2);

  return (
    <Modal onBackdropClick={props.onBackdropClick}>
      <Card className={styles.cart}>
        <div className={styles['cart-items']}>
          {cartItems}
        </div>
        <div className={styles["total-amount"]}>
          <span>Total Amount</span>
          <span>${totalAmount}</span>
        </div>
        <div className={styles.buttons}>
          <Button type="outline-primary" className={styles.button} onClick={props.onCloseBtnClick}>
            Close
          </Button>
          <Button type="primary" className={styles.button} onClick={props.onOrderBtnClick}>
            Order
          </Button>
        </div>
      </Card>
    </Modal>
  );
};

export default Cart;
