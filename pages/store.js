import Layout from "../components/layout";
import Guitar from "../components/guitar";
import styles from "../styles/grid.module.css";
import { generateUniqueId } from "../helpers/helper";

//Client Side
export default function Store({ guitars }) {
  return (
    <Layout
      title={"Store"}
      description={"Tienda virtual, venta de guitarras, instrumentos, GuitarLA"}
    >
      <main className="contenedor">
        <h1 className="heading">Our collection</h1>
        <div className={styles.grid}>
          {guitars.map((g) => (
            <Guitar key={generateUniqueId()} guitar={g.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

//Server side
export async function getServerSideProps() {
  try {
    const response = await fetch(
      `${process.env.API_URL}/guitars?populate=image`
    );
    const { data: guitars } = await response.json();
    return {
      props: {
        guitars,
      },
    };
  } catch (error) {
    console.log({ error });

    return {
      props: {},
    };
  }
}

// export async function getStaticProps() {
//   try {
//     const response = await fetch(`${process.env.API_URL}/guitars?populate=image` );
//     const { data: guitars } = await response.json();
//     return {
//       props: {
//         guitars,
//       },
//     };
//   } catch (error) {
//     console.log({ error });
//   }
// }
