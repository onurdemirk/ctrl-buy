import { NavLink } from 'react-router-dom';
import styles from "../css-modules/left-menu.module.css"
import { FaTrophy } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { FaCrown } from "react-icons/fa6";

export default function LeftMenu() {
  return (
    <div className={styles.leftmenu}>
      <h3>Top</h3>
      <div className={styles.leftMenuTitle}>
        <FaTrophy />
        <NavLink to="/best" className={styles.leftMenuNav}>
          Best of the year
        </NavLink>
      </div>
      <div className={styles.leftMenuTitle}>
        <SiSimpleanalytics />
        <NavLink to="/popular" className={styles.leftMenuNav}>
          Popular in 2025
        </NavLink>
      </div>
      <div className={styles.leftMenuTitle}>
        <FaCrown />
        <NavLink to="/all" className={styles.leftMenuNav}>
          All the top
        </NavLink>
      </div>
    </div>
  );
}