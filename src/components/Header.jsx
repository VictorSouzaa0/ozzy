import styles from "../modules/Header.module.css";
import ozzy from "../assets/images/ozzy.png";

export default function Header(){
    return(
        <header className={styles.header}>      
            <img src={ozzy} alt="Ozzy Osbourne, Prince of Darkness" />
        </header>
    )
}