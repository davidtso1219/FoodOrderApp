import { useState } from "react";

import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./contexts/CartContext";

function App() {
  const [showingCart, setShowingCart] = useState(false);

  const showCart = (e) => setShowingCart(true);
  const hideCart = (e) => setShowingCart(false);

  return (
    <CartProvider>
      {showingCart && (
        <Cart onCloseBtnClick={hideCart} onBackdropClick={hideCart}></Cart>
      )}
      <Header onHeaderBtnClick={showCart}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
