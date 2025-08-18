import styles from "../modules/Navbar.module.css";



export default function Navbar(){
    return(
        <nav>
            <button className={styles.navButton}>
                Discography
            </button>
            <button className={styles.navButton}>
                Most Success
            </button>
        </nav>
    )
}