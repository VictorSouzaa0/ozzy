import styles from "../modules/Header.module.css";
import ozzy from "../assets/images/ozzy.png";
import Navbar from "./Navbar";


export default function Header(){
    return(
        <header className={styles.header}>  
            <Navbar/>
            <img src={ozzy} alt="" />
        </header>
    )
}