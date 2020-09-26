import React from "react";
import DisplayPictureStyles from "../../Styles/User_dashboard/DisplayPicture.module.css";

const DisplayPicture = () => {
  const {
    wrapper,
    CategoryWrapper,
    CategoryName,
    tag,
    cat,
    imageContainer,
    bgWrapper,
    textWrapper,
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
      <div className={bgWrapper}>
        <div className={imageContainer}>
          <div className={textWrapper}>
            <span>try create your own meal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayPicture;
