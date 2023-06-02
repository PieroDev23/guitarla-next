import { useEffect, useState } from "react";
import Image from "next/image";

import Layout from "../components/layout";
import styles from "../styles/cart.module.css";

export default function Cart({ cart, actualizarCantidad }) {
  const [total, setTotal] = useState(() => 0);

  useEffect(() => {
    const calcTotal = cart.reduce(
      (total, product) => total + product.cantidad * product.price,
      0
    );

    setTotal(calcTotal);
  }, [cart]);

  return (
    <Layout title="carrito de compras">
      <main className="contenedor">
        <h1 className="heading">Cart</h1>

        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Articulos</h2>
            {cart.length === 0
              ? "sin productos"
              : cart.map((product) => {
                  return (
                    <div key={product.id} className={styles.producto}>
                      <div>
                        <Image
                          width={250}
                          height={80}
                          src={product.image}
                          alt={`${product.name} image`}
                        ></Image>
                      </div>
                      <div>
                        <p className={styles.nombre}>{[product.name]}</p>

                        <div className={styles.cantidad}>
                          <p>Cantidad: </p>

                          <select
                            id="cantidad"
                            value={product.cantidad}
                            className={styles.select}
                            onChange={(e) =>
                              actualizarCantidad({
                                id: product.id,
                                cantidad: e.target.value,
                              })
                            }
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>

                        <p className={styles.precio}>
                          $ <span>{product.price}</span>
                        </p>
                        <p className={styles.subtotal}>
                          Subtotal: $
                          <span>{product.cantidad * product.price}</span>
                        </p>
                      </div>

                      <button
                        className={styles.eliminar}
                        type="button"
                        onClick={() => deleteProduct(product.id)}
                      >
                        X
                      </button>
                    </div>
                  );
                })}
          </div>

          <aside className={styles.resumen}>
            <h3>Resumen del pedido</h3>
            <p>Total a pagar: ${total}</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
