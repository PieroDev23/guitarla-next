import Image from "next/image";
import Link from "next/link";
import styles from "../styles/guitarras.module.css";

export default function Guitar({ guitar }) {
  const { description, name, image, price, url } = guitar;

  return (
    <div className={styles.guitarra}>
      <Image
        src={image.data.attributes.formats.medium.url}
        alt={`Imagen guitarra ${name}`}
        width={350}
        height={350}
      />
      <div className={styles.contenido}>
        <h3>{name}</h3>
        <p className={styles.descripcion}>{description}</p>
        <p className={styles.precio}>${price}</p>
        <Link href={`/guitars/${url}`} className={styles.enlace}>
          see product
        </Link>
      </div>
    </div>
  );
}
