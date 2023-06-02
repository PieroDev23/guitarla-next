import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/about-us.module.css";

export default function AboutUs() {
  return (
    <Layout
      title={"About us"}
      description={"Sobre nosotros, guitarLA, tienda de musica"}
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.content}>
          <Image
            src={"/img/nosotros.jpg"}
            alt={"aboutUs-image"}
            width={1000}
            height={800}
          ></Image>

          <div className="content__text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              alias, incidunt voluptates impedit consequuntur qui aut
              repudiandae ducimus labore recusandae minus ex! Ipsa laudantium
              eveniet corporis consequuntur, fugiat dolores autem! Totam libero
              facilis alias dolor numquam vitae et eaque rerum. Laudantium nisi
              sed nesciunt ea velit, blanditiis excepturi quae mollitia sequi
              nostrum, labore dolorem
            </p>
            <p>
              tempora, in ducimus omnis beatae? Consectetur repellendus pariatur
              eligendi at quam repellat, modi a, odit itaque excepturi molestias
              sequi facilis! In odio enim illo ad repudiandae porro sequi
              consequatur laudantium distinctio quidem optio, at ipsa magnam
              harum.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
