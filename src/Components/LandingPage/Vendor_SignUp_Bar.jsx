import React from "react";
import CustomLink from "../../Common/Link.component/Link";
import Styles from "../../Styles/LandingPageStyles/Vendor_Bar.module.css";
const Vendor_SignUp_Bar = () => {
  const { container, wrapper, text } = Styles;
  return (
    <div className={container}>
      <div className={wrapper}>
        <p className={text}>
          Do you want to become a Vendor.{" "}
          <CustomLink text="Click here" url="/team-086-group-a-frontend/" /> to
          subscribe now
        </p>
      </div>
    </div>
  );
};

export default Vendor_SignUp_Bar;
