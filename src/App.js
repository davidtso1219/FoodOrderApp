import { useContext, useState } from "react";

import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContext from "./contexts/CartContext";

function App() {
  const [showingCart, setShowingCart] = useState(false);
  const ctx = useContext(CartContext);

  const showCart = (e) => setShowingCart(true);
  const hideCart = (e) => setShowingCart(false);

  return (
    <>
      {showingCart && (
        <Cart
          onCloseBtnClick={hideCart}
          onOrderBtnClick={ctx.clearCart}
          onBackdropClick={hideCart}
        ></Cart>
      )}
      <Header onHeaderBtnClick={showCart}></Header>
      <main>
        <Meals meals={DUMMY_MEALS}></Meals>
      </main>
    </>
  );
}

export default App;

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
