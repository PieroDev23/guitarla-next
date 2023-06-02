import Image from "next/image";
import Link from "next/link";

import { formatDate } from "../helpers/helper";

import styles from "../styles/blog.module.css";

export default function Post({ post }) {
  const { content, title, image, publishedAt, url } = post;

  return (
    <article>
      <Image
        width={600}
        height={400}
        src={image.data.attributes.formats.medium.url}
        alt={`Portada ${title}`}
      />

      <div className={styles.contenido}>
        <h3>{title}</h3>
        <p className={styles.fecha}>{formatDate(publishedAt)}</p>
        <p className={styles.resumen}>{content}</p>
        <Link className={styles.enlace} href={`/blog/${url}`}>
          Read Article
        </Link>
      </div>
    </article>
  );
}
