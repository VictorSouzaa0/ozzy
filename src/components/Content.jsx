import styles from "../modules/Content.module.css";


// Componente com a IMAGEM À ESQUERDA e o texto à direita.

export function ContentLeft({ imageUrl, imageAlt, children }) {
    return (
        <section className={styles.container}>
            <div className={styles.imageWrapper}>
                <img className={styles.img} src={imageUrl} alt={imageAlt} />
            </div>
            <div className={styles.textWrapper}>
                {children}
            </div>
        </section>
    );
}


// Componente com a IMAGEM À DIREITA e o texto à esquerda.

export function ContentRight({ imageUrl, imageAlt, children }) {
    return (
        /* A classe 'reverse' vai inverter a ordem em telas grandes */
        <section className={`${styles.container} ${styles.reverse}`}>
            <div className={styles.imageWrapper}>
                <img className={styles.img} src={imageUrl} alt={imageAlt} />
            </div>
            <div className={styles.textWrapper}>
                {children}
            </div>
        </section>
    );
}