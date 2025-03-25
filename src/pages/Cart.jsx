import styles from "../css-modules/cart.module.css";
import { ImCancelCircle } from "react-icons/im";

export default function Cart(props) {
  const totalPrice = props.cartItems.reduce((total, num) => {
    return total + parseFloat(num.gamePrice);
  }, 0);

  const clearCart = () => {
    props.setCartItems([]);
  };

  const cancelCircle = (gameId) => {
    const games = props.cartItems.filter((item) => (
      item.gameId !== gameId
    ));
    props.setCartItems(games);
  }

  return (
    <div
      className={`${styles.cartMenu} ${props.isOpen ? styles.cartOpen : ""}`}
    >
      <div className={styles.firstBlock}>
        <p className={styles.games}>
          {props.cartItems.length ? props.cartItems.length : 0} Games
        </p>
        <p className={styles.clear} onClick={() => clearCart()}>
          Clear
        </p>
      </div>
      <div className={styles.cartGameAll}>
        {props.cartItems.map((item) => (
          <div key={item.gameId} className={styles.cartGameList}>
            <div className={styles.cancelCircle}>
              <ImCancelCircle onClick={() => cancelCircle(item.gameId)}/>
            </div>
            <div className={styles.cartGameDetails}>
              <img src={item.gameBackgroundImage} alt={item.gameName} />
              <div className={styles.cartGameTexts}>
                <p>{item.gameName}</p>
                <p className={styles.price}>$ {item.gamePrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className={styles.total}>Total: $ {totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}
