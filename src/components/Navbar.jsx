import styles from "../modules/Navbar.module.css";
import { Link } from "react-router-dom";
export default function Navbar(){
    return(
        <nav>
            <button component={Link} to="/discografia" className={styles.navButton}>
                Discografia
            </button>
            <button className={styles.navButton}>
                Maiores Sucessos
            </button>
        </nav>
    )
}