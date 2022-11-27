import { useContext, useEffect, useState } from "react";

import Button from "../UI/Button";
import Badge from "../UI/Badge";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../contexts/CartContext";

import styles from "./HeaderButton.module.css";

const HeaderButton = (props) => {
  const [bump, setBump] = useState(false);
  const ctx = useContext(CartContext);

  const totalCount = ctx.cart
    .map((item) => item.count)
    .reduce((currCount, newCount) => currCount + newCount, 0);

  const btnClasses = `${styles.button} ${bump ? styles.bump: ''}`;
  useEffect(() => {
    setBump(true);

    const timer = setTimeout(() => {
      setBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [totalCount]);

  return (
    <Button
      type="secondary"
      onClick={props.onClick}
      className={btnClasses}
    >
      <CartIcon className={styles.icon} />
      <span>Your Cart</span>
      {ctx.cart.length > 0 && (
        <Badge type="primary" className={styles.badge}>
          {totalCount}
        </Badge>
      )}
    </Button>
  );
};

export default HeaderButton;
