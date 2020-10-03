import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faBiking,
} from "@fortawesome/free-solid-svg-icons";
import IllustrationStyle from "../../Styles/LandingPageStyles/IllustrationStyle.module.css";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";

const Illustration_Section = () => {
  const {
    section,
    title,
    option,
    search,
    iconWrapper,
    icon,
    select,
    pay,
    delivery,
  } = IllustrationStyle;
  return (
    <section className={section}>
      <div className={title}>
        <h2>how it works</h2>
      </div>
      <div className={option}>
        <div className={search}>
          <div className={iconWrapper}>
            <FontAwesomeIcon icon={faSearch} className={icon} size="2x" />
          </div>
          <span>search</span>
        </div>
        <div className={select}>
          <div className={iconWrapper}>
            <FontAwesomeIcon icon={faShoppingCart} className={icon} size="2x" />
          </div>
          <span>select</span>
        </div>
        <div className={pay}>
          <div className={iconWrapper}>
            <FontAwesomeIcon icon={faPaypal} className={icon} size="2x" />
          </div>
          <span>pay</span>
        </div>
        <div className={delivery}>
          <div className={iconWrapper}>
            <FontAwesomeIcon icon={faBiking} className={icon} size="2x" />
          </div>
          <span>delivery</span>
        </div>
      </div>
    </section>
  );
};

export default Illustration_Section;
