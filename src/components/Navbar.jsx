import styles from "../modules/Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li>
                    <Link to="/" className={styles.navLink}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/discografia" className={styles.navLink}>
                        Discografia
                    </Link>
                </li>
                <li>
                    <Link to="/sucessos" className={styles.navLink}>
                        Maiores Sucessos
                    </Link>
                </li>
            </ul>
        </nav>
    );
}