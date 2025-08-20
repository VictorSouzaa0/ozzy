import styles from "../modules/Navbar.module.css";

export default function Navbar(){
    return(
        <nav>
            <button className={styles.navButton}>
                Discografia
            </button>
            <button className={styles.navButton}>
                Maiores Sucessos
            </button>
        </nav>
    )
}