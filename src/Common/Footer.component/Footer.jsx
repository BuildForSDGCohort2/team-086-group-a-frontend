import React from "react";
import { withRouter } from "react-router-dom";
import CustomList from "../List.component/List";
import FooterStyles from "./Footer.module.css";
import { FooterQuickLinksCollections } from "../../Utils/QuickLinks_collection";
import logoImage from "../../Asset/android-chrome-192x192.png";
import CustomImage from "../Image.component/Image";
import CustomInput from "../Input.component/Input";
import CustomButton from "..//Button.component/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagramSquare,
  faFacebookSquare,
  faTwitterSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const {
    container,
    wrapper,
    contentWrapper,
    logo,
    shortLinksWrapper,
    quickLinks,
    listWrapper,
    list,
    listElements,
    openingHours,
    openingHourDetail,
    contactInfo,
    contactInfoDetail,
    subscribe,
    subscribeEvents,
    formWrapper,
    form,
    input,
    button,
    text,
    bottomSection,
    copyright,
    brandslogos,
    hints,
  } = FooterStyles;
  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={contentWrapper}>
          <div className={logo}>
            <CustomImage src={logoImage} alt={"logo image"} width={"100px"} />
          </div>
          <div className={shortLinksWrapper}>
            <div className={quickLinks}>
              <h3>quick links</h3>
              <div className={listWrapper}>
                <ul className={list}>
                  {FooterQuickLinksCollections &&
                    FooterQuickLinksCollections.map((quicklinks, index) => (
                      <CustomList
                        text={quicklinks}
                        key={index}
                        color={"#fff"}
                        className={listElements}
                      />
                    ))}
                </ul>
              </div>
            </div>
            <div className={openingHours}>
              <h3>opening hours</h3>
              <div className={openingHourDetail}>
                <p role="heading">weekdays</p>
                <span>monday - friday</span>
                <br />
                <span>9am-9pm</span>
              </div>
            </div>
            <div className={contactInfo}>
              <h3>contant info</h3>
              <div className={contactInfoDetail}>
                <div>
                  <span>address:</span>
                  <address>12b, kashn Area, here, Nigeria</address>
                </div>
                <div style={{ lineHeight: 1.5 }}>
                  <span>telephone</span>
                  <p>+234 1234 987</p>
                </div>
                <div style={{ lineHeight: 1.5 }}>
                  <span>email</span>
                  <p>info@thinkspicefoods.com</p>
                </div>
              </div>
            </div>
            <div className={subscribe}>
              <h3>subscribe</h3>
              <div className={subscribeEvents}>
                <div className={formWrapper}>
                  <form className={form}>
                    <CustomInput
                      type={"email"}
                      name={"email"}
                      placeholder={"Your Email"}
                      className={input}
                      onChange={({ target }) => target.name}
                    />
                    <CustomButton text={"sign up"} className={button} />
                  </form>
                </div>

                <div className={text}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque libero iure hic, ullam asperiores culpa dolor vitae
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={bottomSection}>
          <div className={copyright}>
            <span>
              <FontAwesomeIcon icon={faCopyright} color="#fff" /> 2020
              ThinkSpiceFood
            </span>
          </div>
          <div className={brandslogos}>
            <div>
              <FontAwesomeIcon
                icon={faInstagramSquare}
                size="2x"
                color="#fff"
              />
            </div>
            <div>
              <FontAwesomeIcon icon={faFacebookSquare} size="2x" color="#fff" />
            </div>
            <div>
              <FontAwesomeIcon icon={faLinkedin} size="2x" color="#fff" />
            </div>
            <div>
              <FontAwesomeIcon icon={faTwitterSquare} size="2x" color="#fff" />
            </div>
          </div>
          <div className={hints}>
            <span>privacy policy</span>
            <span>terms of service</span>
            <span>language</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Footer);
