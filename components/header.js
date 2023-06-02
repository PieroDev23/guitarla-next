import Image from "next/image";
import Link from "next/link";
import styles from "../styles/header.module.css";

import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.bar}`}>
        <Link href={"/"}>
          <Image
            src={"/img/logo.svg"}
            alt="logo"
            width={300}
            height={300}
          ></Image>
        </Link>

        <nav className={`${styles.navigation}`}>
          <Link
            href={"/"}
            className={router.pathname === "/" ? styles.active : styles.link}
          >
            Inicio
          </Link>
          <Link
            href={"/about-us"}
            className={
              router.pathname === "/about-us" ? styles.active : styles.link
            }
          >
            About Us
          </Link>
          <Link
            href={"/store"}
            className={
              router.pathname === "/store" ? styles.active : styles.link
            }
          >
            Store
          </Link>
          <Link
            href={"/blog"}
            className={
              router.pathname === "/blog" ? styles.active : styles.link
            }
          >
            Blog
          </Link>

          <Link href={"/cart"}>
            <Image
              width={30}
              height={25}
              src={"/img/carrito.png"}
              alt="carrito"
            ></Image>
          </Link>
        </nav>
      </div>
    </header>
  );
}
