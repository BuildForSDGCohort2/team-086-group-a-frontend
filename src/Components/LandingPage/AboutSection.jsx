import React from "react";
import FoodImage from "../../Asset/Rectangle 16.svg";
import CustomImage from "../../Common/Image.component/Image";
import AboutStyles from "../../Styles/LandingPageStyles/AboutSection.module.css";

const AboutSection = () => {
  const {
    section,
    container,
    wrapper,
    textWrapper,
    image,
    aside,
    text,
  } = AboutStyles;

  return (
    <section className={section}>
      <div className={container}>
        <div className={wrapper}>
          <CustomImage src={FoodImage} alt={"food image"} className={image} />
          <aside className={aside}>
            <div className={textWrapper}>
              <h4>about</h4>
              <h2>welcome</h2>
              <div className={text}>
                <figure>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Labore, voluptatem quis temporibus hic nostrum magni modi
                  harum sequi, tempora neque similique fugit exercitationem
                  aperiam id beatae, error accusantium tenetur aliquid.
                </figure>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
