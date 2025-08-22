import styles from '../modules/Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p>&copy; {currentYear} By Victor Renato De Souza</p>
        </footer>
    );
}