import React from "react";
import CustomImage from "../../Common/Image.component/Image";
import Image from "../../Asset/Rectangle 193.png";
import DisplayPictureStyles from "../../Styles/User_dashboard/DisplayPicture.module.css";

const DisplayPicture = () => {
  const {
    wrapper,
    CategoryWrapper,
    CategoryName,
    tag,
    cat,
    imageContainer,
    image,
  } = DisplayPictureStyles;
  return (
    <div className={wrapper}>
      <div className={CategoryWrapper}>
        <div className={CategoryName}>
          <div className={tag}></div>
          <div className={cat}>
            <h2>dashboard</h2>
          </div>
        </div>
      </div>
      <div className={imageContainer}>
        <CustomImage src={Image} alt="display image" className={image} />
      </div>
    </div>
  );
};

export default DisplayPicture;
