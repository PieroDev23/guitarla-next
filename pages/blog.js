import Layout from "../components/layout";
import Post from "../components/post";
import { generateUniqueId } from "../helpers/helper";
import styles from "../styles/grid.module.css";

export default function Blog({ posts }) {

  return (
    <Layout
      title={"Blog"}
      description={
        "Blog de musica, venta de guitarras, consejos y protips, GuitarLA"
      }
    >
      <main className="contenedor">
        <h1 className="heading">Blog</h1>
        <div className={styles.grid}>
          {posts.map((post) => (
            <Post key={generateUniqueId()} post={post} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch(`${process.env.API_URL}/posts?populate=image`);
    const { data: posts } = await response.json();
    return {
      props: {
        posts,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        data: [],
      },
    };
  }
}
