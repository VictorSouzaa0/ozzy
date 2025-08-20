import styles from "../modules/Content.module.css";
import child from "../assets/images/childOzzy.png"



export function Content() {
    return (
        <section>
            <div className={styles.content}>
                <img className={styles.img} src={child} alt="" />
            </div>
        </section>
    )
}


