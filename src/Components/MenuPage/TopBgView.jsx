import React from "react";
import CustomImage from "../../Common/Image.component/Image";
import Image from "../../Asset/Rectangle 685.png";
import TopBgViewStyles from "../../Styles/MenuPageStyles/TopBgView.module.css";

const TopBgView = () => {
  const {
    wrapper,
    CategoryWrapper,
    CategoryName,
    tag,
    cat,
    imageContainer,
    image,
  } = TopBgViewStyles;
  return (
    <div className={wrapper}>
      <div className={CategoryWrapper}>
        <div className={CategoryName}>
          <div className={tag}></div>
          <div className={cat}>
            <h2>menu</h2>
          </div>
        </div>
      </div>
      <div className={imageContainer}>
        <CustomImage src={Image} alt="display image" className={image} />
      </div>
    </div>
  );
};

export default TopBgView;
