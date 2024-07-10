import React from "react";

import cl from "../../styles/Categories.module.css";
import { Link } from "react-router-dom";

export default function Categories({ title, products = [], amount }) {
  const list = products.filter((undefined, i) => i < amount);

  return (
    <section className={cl.section}>
      <h2>{title}</h2>
      <div className={cl.list}>
        {list.map(({ id, name, image }) => (
          <Link to={`/categories/${id}`} key={id} className={cl.item}>
            <div
              className={cl.image}
              style={{ backgroundImage: `url(${image})` }}
            />
            <h3 className={cl.title}>{name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
