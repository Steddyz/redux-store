import React from "react";

import cl from "../../styles/Products.module.css";
import { Link } from "react-router-dom";

export default function Products({ title, products = [], amount, style = {} }) {
  const list = products.filter((undefined, i) => i < amount);

  return (
    <section className={cl.products} style={style}>
      {title && <h2>{title}</h2>}
      <div className={cl.list}>
        {list.map(({ id, images, title, category: { name: cat }, price }) => (
          <Link to={`/products/${id}`} key={id} className={cl.product}>
            <div
              className={cl.image}
              style={{ backgroundImage: `url(${images[0]})` }}
            />

            <div className={cl.wrapper}>
              <h3 className={cl.title}>{title}</h3>
              <div className={cl.cat}>{cat}</div>
              <div className={cl.info}>
                <div className={cl.prices}>
                  <div className={cl.price}>{price}$</div>
                  <div className={cl.oldPrices}>{Math.floor(price * 0.8)}$</div>
                </div>
                <div className={cl.purchases}>
                  {Math.floor(Math.random() * 20 + 1)} purchases
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
