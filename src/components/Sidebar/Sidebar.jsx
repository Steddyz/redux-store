import React from "react";

import cl from "../../styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const { list } = useSelector(({ categories }) => categories);

  const result = list.slice(0, 5);

  return (
    <section className={cl.sidebar}>
      <div className={cl.title}>CATEGORIES</div>
      <nav>
        <ul className={cl.menu}>
          {result.map(({ id, name }) => (
            <li key={id}>
              <NavLink
                className={({ isActive }) =>
                  `${cl.link} ${isActive ? cl.active : ""}`
                }
                to={`/categories${id}`}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={cl.footer}>
        <a href="/help" className={cl.link} target="_blank">
          Help
        </a>
        <a
          href="/terms"
          className={cl.link}
          target="_blank"
          style={{ textDecoration: "underline" }}
        >
          Terms & Conditions
        </a>
      </div>
    </section>
  );
}
