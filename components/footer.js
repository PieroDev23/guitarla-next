import Link from "next/link";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.content}`}>
        <nav className={`${styles.navigation}`}>
          <Link href={"/"} className={styles.link}>
            Inicio
          </Link>
          <Link href={"/about-us"} className={styles.link}>
            About Us
          </Link>
          <Link href={"/blog"} className={styles.link}>
            Blog
          </Link>
          <Link href={"/store"} className={styles.link}>
            Store
          </Link>
        </nav>

        <p className={styles.copyright}>
          Todos los derechos reservados {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
