import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

//En el layout podemos colocar nuestras etiquetas meta y title tambien
//Digamoss que es como una pagina de html, y usa el archivo _document.js como base.
export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{`GuitarLA - ${title}`}</title>
        <meta name="description" content={description}></meta>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
