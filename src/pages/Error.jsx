import styles from "../css-modules/error.module.css"
import gif from "../img/naruto.gif"
export default function Error() {
    return (
        <div className={styles.container}>
           <img src={gif} alt="error" />
           <p className={styles.message}>An error occurred while fetching data. Please try again later.</p>
        </div>
    )
}