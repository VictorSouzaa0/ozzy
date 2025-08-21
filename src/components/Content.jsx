import styles from "../modules/Content.module.css";
import child from "../assets/images/childOzzy.png"



export function Content() {
    return (
        <section>
            <div className={styles.content}>
                <img className={styles.img} src={child} alt="ozzy" />
            </div>
            <h1 className={styles.about}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci consequuntur quas, quasi numquam assumenda dolore explicabo iusto esse dolorum quo unde quos voluptatem ullam facere laborum vitae sed iure est?</h1>
        
        </section>
        
    )
}


