import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import cl from "../../styles/Footer.module.css";
import Logo from "../../images/logo.svg";

export default function Footer() {
  return (
    <section className={cl.footer}>
      <div className={cl.logo}>
        <Link to={ROUTES.HOME}>
          <img src={Logo} alt="Logo Stuff"></img>
        </Link>
      </div>

      <div className={cl.rights}>
        Developed by{" "}
        <a href="https://github.com/Steddyz" target="_blank" rel="norefereer">
          Steddy
        </a>
      </div>
      <div className={cl.socials}>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
          </svg>
        </a>

        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
          </svg>
        </a>
      </div>
    </section>
  );
}
