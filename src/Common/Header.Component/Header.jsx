import React from "react";
import CustomImage from "../Image.component/Image";
import CustomNavLinks from "../NavLink.component/NavLink";
import CustomButton from "../Button.component/Button";
import Image from "../../Asset/logo.png";
import { HeaderNavLinksCollections } from "../../Utils/NavLinksCollections";
import HeaderStyles from "../Header.Component/Header.module.css";
const Header = () => {
  const {
    container,
    headerBackground,
    logo,
    image,
    navWrapper,
    navBars,
    links,
    buttonWrapper,
    button,
  } = HeaderStyles;
  return (
    <div className={container}>
      <div className={headerBackground}>
        <div className={logo}>
          <CustomImage src={Image} ait={"logo icon"} className={image} />
        </div>
        <div className={navWrapper}>
          <div className={navBars}>
            {HeaderNavLinksCollections &&
              HeaderNavLinksCollections.map((navlinks, index) => (
                <CustomNavLinks
                  url={"/"}
                  text={navlinks}
                  key={index}
                  className={links}
                />
              ))}
          </div>
          <div className={buttonWrapper}>
            <CustomButton
              text={"Sign Up"}
              className={button}
              width={"12vw"}
              backgroundColor={"#000"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;