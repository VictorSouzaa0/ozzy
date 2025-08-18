import styles from "../modules/Header.module.css";
import Navbar from "./Navbar";


export default function Header(){
    return(
        <header className={styles.header}>
            <h1 className={styles.titleHeader}>Ozzy Osbourne</h1>
            <h1 className={styles.titleHeader}>✞</h1>
            <Navbar/>
        </header>
    )
}