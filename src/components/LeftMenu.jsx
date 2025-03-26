import { NavLink } from "react-router-dom";
import styles from "../css-modules/left-menu.module.css";
import { FaTrophy } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { FaCrown } from "react-icons/fa6";

export default function LeftMenu() {
  return (
    <div className={styles.leftmenu}>
      <h3>New Releases</h3>
      <div className={styles.leftMenuTitle}>
        <FaCrown />
        <NavLink
          to="/category/last-30-days"
          className={({ isActive }) =>
            isActive ? styles.leftMenuNavActive : styles.leftMenuNav
          }
        >
          Last 30 days
        </NavLink>
      </div>
      <div className={styles.leftMenuTitle}>
        <FaCrown />
        <NavLink
          to="/category/this-week"
          className={({ isActive }) =>
            isActive ? styles.leftMenuNavActive : styles.leftMenuNav
          }
        >
          This week
        </NavLink>
      </div>
      <div className={styles.leftMenuTitle}>
        <FaCrown />
        <NavLink
          to="/category/next-week"
          className={({ isActive }) =>
            isActive ? styles.leftMenuNavActive : styles.leftMenuNav
          }
        >
          Next week
        </NavLink>
      </div>
      <h3>Top</h3>
      <div className={styles.leftMenuTitle}>
        <FaCrown />
        <NavLink
          to="/category/all-the-top"
          className={({ isActive }) =>
            isActive ? styles.leftMenuNavActive : styles.leftMenuNav
          }
        >
          All the top
        </NavLink>
      </div>
      <div className={styles.leftMenuTitle}>
        <FaTrophy />
        <NavLink
          to="/category/best-of-the-year"
          className={({ isActive }) =>
            isActive ? styles.leftMenuNavActive : styles.leftMenuNav
          }
        >
          Best of the year
        </NavLink>
      </div>
      <div className={styles.leftMenuTitle}>
        <SiSimpleanalytics />
        <NavLink
          to="/category/popular-in-2025"
          className={({ isActive }) =>
            isActive ? styles.leftMenuNavActive : styles.leftMenuNav
          }
        >
          Popular in 2025
        </NavLink>
      </div>
      <h3>Platforms</h3>
      <div className={styles.leftMenuTitle}>
        <SiSimpleanalytics />
        <NavLink
          to="/category/pc"
          className={({ isActive }) =>
            isActive ? styles.leftMenuNavActive : styles.leftMenuNav
          }
        >
          PC
        </NavLink>
      </div>
      <div className={styles.leftMenuTitle}>
        <SiSimpleanalytics />
        <NavLink
          to="/category/playstation"
          className={({ isActive }) =>
            isActive ? styles.leftMenuNavActive : styles.leftMenuNav
          }
        >
          PlayStation
        </NavLink>
      </div>
      <div className={styles.leftMenuTitle}>
        <SiSimpleanalytics />
        <NavLink
          to="/category/xbox-one"
          className={({ isActive }) =>
            isActive ? styles.leftMenuNavActive : styles.leftMenuNav
          }
        >
          Xbox One
        </NavLink>
      </div>
      <div className={styles.leftMenuTitle}>
        <SiSimpleanalytics />
        <NavLink
          to="/category/nintendo-switch"
          className={({ isActive }) =>
            isActive ? styles.leftMenuNavActive : styles.leftMenuNav
          }
        >
          Nintendo Switch
        </NavLink>
      </div>
      <div className={styles.leftMenuTitle}>
        <SiSimpleanalytics />
        <NavLink
          to="/category/ios"
          className={({ isActive }) =>
            isActive ? styles.leftMenuNavActive : styles.leftMenuNav
          }
        >
          iOS
        </NavLink>
      </div>
      <div className={styles.leftMenuTitle}>
        <SiSimpleanalytics />
        <NavLink
          to="/category/android"
          className={({ isActive }) =>
            isActive ? styles.leftMenuNavActive : styles.leftMenuNav
          }
        >
          Android
        </NavLink>
      </div>
      <h3>Genres</h3>
      <div className={styles.leftMenuTitle}>
        <SiSimpleanalytics />
        <NavLink
          to="/category/indie"
          className={({ isActive }) =>
            isActive ? styles.leftMenuNavActive : styles.leftMenuNav
          }
        >
          Indie
        </NavLink>
      </div>
      <div className={styles.leftMenuTitle}>
        <SiSimpleanalytics />
        <NavLink
          to="/category/action"
          className={({ isActive }) =>
            isActive ? styles.leftMenuNavActive : styles.leftMenuNav
          }
        >
          Action
        </NavLink>
      </div>
      <div className={styles.leftMenuTitle}>
        <SiSimpleanalytics />
        <NavLink
          to="/category/adventure"
          className={({ isActive }) =>
            isActive ? styles.leftMenuNavActive : styles.leftMenuNav
          }
        >
          Adventure
        </NavLink>
      </div>
      <div className={styles.leftMenuTitle}>
        <SiSimpleanalytics />
        <NavLink
          to="/category/rpg"
          className={({ isActive }) =>
            isActive ? styles.leftMenuNavActive : styles.leftMenuNav
          }
        >
          RPG
        </NavLink>
      </div>
      <div className={styles.leftMenuTitle}>
        <SiSimpleanalytics />
        <NavLink
          to="/category/strategy"
          className={({ isActive }) =>
            isActive ? styles.leftMenuNavActive : styles.leftMenuNav
          }
        >
          Strategy
        </NavLink>
      </div>
      <div className={styles.leftMenuTitle}>
        <SiSimpleanalytics />
        <NavLink
          to="/category/shooter"
          className={({ isActive }) =>
            isActive ? styles.leftMenuNavActive : styles.leftMenuNav
          }
        >
          Shooter
        </NavLink>
      </div>
    </div>
  );
}
