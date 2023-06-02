import Image from "next/image";
import Layout from "../../components/layout";
import { formatDate } from "../../helpers/helper";
import styles from "../../styles/blog.module.css";

export default function BlogPost({ publication }) {
  const { content, title, image, publishedAt } = publication[0].attributes;
  return (
    <Layout>
      <article className={`${styles.post} ${styles["mt-3"]}`}>
        <Image
          width={1000}
          height={400}
          src={image.data.attributes.url}
          alt={`Portada ${title}`}
        />

        <div className={styles.contenido}>
          <h3>{title}</h3>
          <p className={styles.fecha}>{formatDate(publishedAt)}</p>
          <p className={styles.texto}>{content}</p>
        </div>
      </article>
    </Layout>
  );
}

export async function getServerSideProps({ query: { post } }) {
  const response = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${post}&populate=image`
  );
  const { data: publication } = await response.json();

  return {
    props: {
      publication,
    },
  };
}
