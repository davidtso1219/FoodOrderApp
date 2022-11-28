import { useState, useContext } from "react";

import CartItem from "./CartItem";
import Checkout from "./Checkout";

import CartContext from "../../contexts/CartContext";

import Modal from "../UI/Modal";
import Button from "../UI/Button";

import useHttp from "../../hooks/useHttp";

import styles from "./Cart.module.css";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const [checkout, setCheckout] = useState(false);
  const { sendRequest } = useHttp();

  const onOrderBtnClick = (e) => {
    e.preventDefault();
    setCheckout(true);
  };

  const onCancelBtnClick = (e) => {
    e.preventDefault();
    setCheckout(false);
  };

  const checkoutConfirmHandler = (userData) => {
    const orderedMeals = {};

    for (let item of ctx.cart) {
      orderedMeals[item.id] = item.count;
    }

    sendRequest({
      url: "https://foodorderapp-e4f21-default-rtdb.firebaseio.com/orders.json",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        orderedMeals: orderedMeals,
        user: userData,
        totalAmount: totalAmount,
      }),
    });

    ctx.clearCart();
    props.onCloseBtnClick();
  };

  const cartItems = ctx.cart.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      count={item.count}
      onAdd={(e) => {
        e.preventDefault();
        ctx.addItems(item, 1);
      }}
      onRemove={(e) => {
        e.preventDefault();
        ctx.removeItems(item, 1);
      }}
    ></CartItem>
  ));

  const totalAmount = ctx.cart
    .map((cartItem) => cartItem.price * cartItem.count)
    .reduce((p1, p2) => p1 + p2, 0)
    .toFixed(2);

  const cartActions = (
    <div className={styles.buttons}>
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
    </div>
  );

  return (
    <Modal onBackdropClick={props.onBackdropClick}>
      <div className={styles.cart}>
        <div className={styles["cart-items"]}>{cartItems}</div>
        <div className={styles["total-amount"]}>
          <span>Total Amount</span>
          <span>${totalAmount}</span>
        </div>
        {!checkout && cartActions}
        {checkout && (
          <Checkout
            onCancel={onCancelBtnClick}
            onConfirm={checkoutConfirmHandler}
          />
        )}
      </div>
    </Modal>
  );
};

export default Cart;
