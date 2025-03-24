import { NavLink, Outlet } from "react-router-dom";
import styles from "../css-modules/root.module.css";
import Header from "./Header";
import LeftMenu from "./LeftMenu";

export default function Root() {
  return (
    <div className={styles.rootContainer}>
      <Header cartCount={0} /> {/* Cart count'u state'ten alacaksınız */}
      <div className={styles.mainContent}>
        <LeftMenu />
        <div className={styles.outletContainer}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
