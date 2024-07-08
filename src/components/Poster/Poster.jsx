import React from "react";

import cl from "../../styles/Home.module.css";
import BackGr from "../../images/computer.png";

export default function Poster() {
  return (
    <section className={cl.home}>
      <div className={cl.title}>BIG SALE 20%</div>
      <div className={cl.product}>
        <div className={cl.text}>
          <div className={cl.subtitle}>The bestseller of 2024</div>
          <h1 className={cl.head}>LENNON r2d2 with NVIDIA 5090 TI</h1>
          <button className={cl.button}>Shop now</button>
        </div>
        <div className={cl.image}>
          <img src={BackGr} alt="Back Ground" />
        </div>
      </div>
    </section>
  );
}
