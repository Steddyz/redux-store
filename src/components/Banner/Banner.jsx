import React from "react";

import cl from "../../styles/Home.module.css";
import bannerImage from "../../images/banner.png";

export default function Banner() {
  return (
    <section className={cl.banner}>
      <div className={cl.left}>
        <p className={cl.content}>
          NEW YEAR<span>SALE</span>
        </p>
        <button className={cl.more}>See more</button>
      </div>
      <div
        className={cl.right}
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <p className={cl.discount}>
          save up to <span>50%</span>
        </p>
      </div>
    </section>
  );
}
