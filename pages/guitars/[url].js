import { useState } from "react";

import Image from "next/image";
import styles from "../../styles/guitarras.module.css";
import Layout from "../../components/layout";

export default function Product({ guitarData, addToCart }) {
  const { name, description, image, price } = guitarData[0].attributes;

  const [cantidad, setCantidad] = useState(() => 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
      alert("Cantidad no valida");

      return;
    }
    // Construir un objeto
    const guitarsSelected = {
      id: guitarData[0].id,
      image: image.data.attributes.url,
      name,
      price,
      cantidad,
    };

    //pasando la data a context\
    addToCart(guitarsSelected);
  };

  return (
    <Layout title={`Guitar ${name}`} description={description}>
      <div className={styles.guitarra}>
        <Image
          src={image.data.attributes.url}
          alt={`Imagen guitarra ${name}`}
          width={350}
          height={350}
        />
        <div className={styles.contenido}>
          <h3>{name}</h3>
          <p className={styles.descripcion}>{description}</p>
          <p className={styles.precio}>${price}</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="cantidad">Cantidad:</label>
            <select
              id="cantidad"
              onChange={(e) => setCantidad(Number(e.target.value))}
            >
              <option value="0">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input type="submit" value="add to card" />
          </form>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`${process.env.API_URL}/guitars`);
  const { data: guitars } = await response.json();

  const paths = guitars.map((guitar) => ({
    params: {
      url: guitar.attributes.url,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  try {
    const response = await fetch(
      `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`
    );
    const { data: guitarData } = await response.json();
    return {
      props: {
        guitarData,
      },
    };
  } catch (error) {
    console.log({ error });
    return {
      props: {},
    };
  }
}
