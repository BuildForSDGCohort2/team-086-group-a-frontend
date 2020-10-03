import React from "react";
import ThreeDotsStyles from "../../Styles/LandingPageStyles/ThreeDotStyles.module.css";

const ThreeDots = () => {
  const { section, dotsWrapper, dots } = ThreeDotsStyles;
  return (
    <section className={section}>
      <div className={dotsWrapper}>
        <div className={dots}></div>
        <div className={dots}></div>
        <div className={dots}></div>
      </div>
    </section>
  );
};

export default ThreeDots;
