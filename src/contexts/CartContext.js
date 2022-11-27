import React, { useState } from "react";

const CartContext = React.createContext({
  cart: [],
  addItems: () => {},
  removeItems: () => {},
  clearCart: () => {},
});

const isItemInCart = (cart, item) => {
  return cart.filter((cartItem) => cartItem.id === item.id).length > 0;
};

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addItems = (item, num) => {
    setCart((prevCart) => {
      if (!isItemInCart(prevCart, item)) {
        return [...prevCart, { ...item, count: num }];
      }

      return prevCart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, count: cartItem.count + num };
        }
        return cartItem;
      });
    });
  };

  const removeItems = (item, num) => {
    setCart((prevCart) => {
      if (!isItemInCart(prevCart, item)) {
        return prevCart;
      }
      return prevCart
        .map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, count: cartItem.count - num };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.count > 0);
    });
  };

  const clearCart = (e) => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addItems: addItems,
        removeItems: removeItems,
        clearCart: clearCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export { CartProvider };
export default CartContext;
