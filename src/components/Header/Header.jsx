import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import cl from "../../styles/Header.module.css";
import Logo from "../../images/logo.svg";
import Avatar from "../../images/avatar.jpg";

export default function Header() {
  return (
    <div className={cl.header}>
      <div className={cl.logo}>
        <Link to={ROUTES.HOME}>
          <img src={Logo} alt="Logo Stuff"></img>
        </Link>
      </div>
      <div className={cl.info}>
        <div className={cl.user}>
          <div
            className={cl.avatar}
            style={{ backgroundImage: `url(${Avatar})` }}
          ></div>
          <div className={cl.username}>Guest</div>

          <form className={cl.form}>
            <div className={cl.icon}>
              <svg className="icon">
                <use
                  xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`}
                />
              </svg>
            </div>
            <div className={cl.input}>
              <input
                type="search"
                name="search"
                placeholder="Search"
                autoComplete="off"
                onChange={() => {}}
                value=""
              />
            </div>
            {false && <div className={cl.box}></div>}
          </form>
          <div className={cl.account}>
            <Link to={ROUTES.HOME} className={cl.favourites}>
              <svg className={cl["icon-fav"]}>
                <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
              </svg>
            </Link>

            <Link to={ROUTES.CART} className={cl.cart}>
              <svg className={cl["icon-cart"]}>
                <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
              </svg>
              <span className={cl.count}>2</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
