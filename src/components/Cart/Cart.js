import { useState, useContext } from "react";

import CartItem from "./CartItem";
import CartContext from "../../contexts/CartContext";
import CheckoutForm from "../Checkout/CheckoutForm";

import Card from "../UI/Card";
import Modal from "../UI/Modal";
import Button from "../UI/Button";

import styles from "./Cart.module.css";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const [checkout, setCheckout] = useState(false);

  const onOrderBtnClick = e => {
    e.preventDefault();
    setCheckout(true);
  };

  const onCancelBtnClick = e => {
    e.preventDefault();
    setCheckout(false);
  }

  const cartItems = ctx.cart.map((item) => (
    <CartItem key={item.id} item={item}></CartItem>
  ));

  const totalAmount = ctx.cart
    .map((cartItem) => cartItem.price * cartItem.count)
    .reduce((p1, p2) => p1 + p2, 0)
    .toFixed(2);

  return (
    <Modal onBackdropClick={props.onBackdropClick}>
      <div className={styles.cart}>
        <div className={styles["cart-items"]}>{cartItems}</div>
        <div className={styles["total-amount"]}>
          <span>Total Amount</span>
          <span>${totalAmount}</span>
        </div>
        {!checkout && <div className={styles.buttons}>
          <Button
            type="outline-primary"
            className={styles.button}
            onClick={props.onCloseBtnClick}
          >
            Close
          </Button>
          <Button
            type="primary"
            className={styles.button}
            onClick={onOrderBtnClick}
          >
            Order
          </Button>
        </div>}
        {checkout && <CheckoutForm onCancelBtnClick={onCancelBtnClick}/>}
      </div>
    </Modal>
  );
};

export default Cart;
