import Layout from "../components/layout";
import Guitar from "../components/guitar";
import Post from "../components/post";
import Course from "../components/course";

import { generateUniqueId } from "../helpers/helper";

import styles from "../styles/grid.module.css";

export default function Home({ guitars, posts, course }) {
  return (
    <Layout
      title={"Home"}
      description={"GuitarLA - Venta de guitarras y blog de musica"}
    >
      <main className="contenedor">
        <h1 className="heading">Collection</h1>
        <div className={styles.grid}>
          {guitars.map((guitar) => (
            <Guitar key={generateUniqueId()} guitar={guitar.attributes} />
          ))}
        </div>
      </main>
      <Course course={course.attributes} />
      <section className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className={styles.grid}>
          {posts.map((post) => (
            <Post key={generateUniqueId()} post={post.attributes} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const urlGuitars = `${process.env.API_URL}/guitars?populate=image`;
  const urlPosts = `${process.env.API_URL}/posts?populate=image`;
  const urlCourse = `${process.env.API_URL}/course?populate=image`;

  const [guitarsResponse, postsResponse, courseResponse] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlPosts),
    fetch(urlCourse),
  ]);

  const [{ data: guitars }, { data: posts }, { data: course }] =
    await Promise.all([
      guitarsResponse.json(),
      postsResponse.json(),
      courseResponse.json(),
    ]);
  return {
    props: {
      guitars,
      posts,
      course,
    },
  };
}
