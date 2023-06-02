import "../styles/globals.css";

import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  //NEXT VALIDACIONES
  const cartLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart")) ?? []
      : [];

  const [cart, setCart] = useState(() => cartLS);

  //Solucionar error de hidratacion de remix
  const [readyPage, setReadyPage] = useState(false);
  useEffect(() => {
    setReadyPage(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (guitarra) => {
    // Comprobar si la guitarra ya esta en el carrito...
    if (cart.some((guitarraState) => guitarraState.id === guitarra.id)) {
      // Iterar para actualizar la cantidad
      const carritoActualizado = cart.map((guitarraState) => {
        if (guitarraState.id === guitarra.id) {
          guitarraState.cantidad = guitarra.cantidad;
        }
        return guitarraState;
      });
      // Se asigna al array
      setCart((_) => [...carritoActualizado]);
      localStorage.setItem("carrito", JSON.stringify(cart));
    } else {
      // En caso de que el articulo no exista, es nuevo y se agrega
      setCart((prevCart) => [...prevCart, guitarra]);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const deleteProduct = (id) => {
    const carritoActualizado = cart.filter((producto) => producto.id != id);
    setCart((_) => [...carritoActualizado]);
    window.localStorage.setItem("cart", JSON.stringify(cart));
  };

  const actualizarCantidad = (guitarra) => {
    const carritoActualizado = cart.map((guitarraState) => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.cantidad = parseInt(guitarra.cantidad);
      }
      return guitarraState;
    });
    setCart((_) => [...carritoActualizado]);
    window.localStorage.setItem("cart", JSON.stringify(cart));
  };

  return readyPage ? (
    <Component
      {...pageProps}
      cart={cart}
      addToCart={addToCart}
      deleteProduct={deleteProduct}
      actualizarCantidad={actualizarCantidad}
    />
  ) : null;
}

export default MyApp;
