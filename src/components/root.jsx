import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import styles from "../css-modules/root.module.css";
import Header from "./Header";
import LeftMenu from "./LeftMenu";
import Cart from "../pages/Cart";

export default function Root() {
  const [cartOpen, setCartOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const location = useLocation();

  const toggleCart = () => {
    setCartOpen((prevValue) => !prevValue);
  };

  const addCartItems = (gameId, gameName, gamePrice, gameBackgroundImage) => {
    setCartItems((prevItems) => [
      ...prevItems,
      { gameId, gameName, gamePrice, gameBackgroundImage },
    ]);
  };

  React.useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [cartOpen]);

  const isGameDetails = location.pathname.startsWith("/game/");

  return (
    <div className={styles.rootContainer}>
      <Header cart={toggleCart} cartItems={cartItems}/>
      {cartOpen && (
        <div className={styles.overlay} onClick={() => toggleCart()}></div>
      )}
      <div>
        <Cart isOpen={cartOpen} cartItems={cartItems} setCartItems={setCartItems}  />
      </div>
      <div className={styles.mainContent}>
        {!isGameDetails && <LeftMenu className={styles.leftMenu}/>}
        <div className={styles.outletContainer}>
          <Outlet context={{addCart: addCartItems, cartItems: cartItems }} />
        </div>
      </div>
    </div>
  );
}
