import React, { useContext } from "react";
import { NonRegisterContextMembers } from "../../Context/NonRegisteredMemberContext";
import CustomImage from "../../Common/Image.component/Image.jsx";
import blogsStyles from "../../Styles/LandingPageStyles/Blogs.module.css";

const Blogs = () => {
  const [state] = useContext(NonRegisterContextMembers);
  const { collection } = state;
  const { blogs } = collection;
  const {
    section,
    CategoryWrapper,
    CategoryName,
    tag,
    cat,
    blogsWrapper,
    contentWrapper,
    imgField,
    img,
    itemCaption,
  } = blogsStyles;

  return (
    <section className={section}>
      <div className={CategoryWrapper}>
        <div className={CategoryName}>
          <div className={tag}></div>
          <div className={cat}>
            <h2>blog</h2>
          </div>
        </div>
      </div>
      <div className={blogsWrapper}>
        {blogs &&
          blogs.map(({ image, info, _id }, index) => (
            <div className={contentWrapper} key={index}>
              <fieldset className={imgField}>
                <CustomImage src={image} alt={"food display"} className={img} />
              </fieldset>
              <figcaption className={itemCaption}>
                <h3>{info}</h3>
              </figcaption>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Blogs;
