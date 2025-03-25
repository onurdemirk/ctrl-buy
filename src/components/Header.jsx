
import { Link } from 'react-router-dom';
import styles from '../css-modules/header.module.css';
import { TbApi } from "react-icons/tb";
import { LiaGithub } from "react-icons/lia";
import { SiTheodinproject } from "react-icons/si";
import { PiShoppingCart } from "react-icons/pi";


export default function Header(props) {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h3><Link to="/">CTRL+BUY</Link></h3>
        <div className={styles.logos}>
          <a href="https://api.rawg.io/docs/" target="_blank" rel="noreferrer">
            <TbApi size={25} />
          </a>
          <a href="https://github.com/onurdemirk/ctrl-buy" target="_blank" rel="noreferrer">
            <LiaGithub size={25} />
          </a>
          <a
            href="https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart"
            target="_blank"
            rel="noreferrer"
          >
            <SiTheodinproject size={25} />
          </a>
        </div>
      </div>
      <div className={styles.cart}>
        <PiShoppingCart className={styles.cartIcon} onClick={props.cart}/>
        <p>{props.cartItems.length}</p>
      </div>
    </div>
  );
}