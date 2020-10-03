import React, { useContext } from "react";
import { NonRegisterContextMembers } from "../../Context/NonRegisteredMemberContext";
import CustomImage from "../../Common/Image.component/Image";
import TestimonailsStyles from "../../Styles/LandingPageStyles/Testimonials.module.css";

const Testimonials = () => {
  const [state] = useContext(NonRegisterContextMembers);
  const { collection } = state;
  const { testimonials } = collection;
  const {
    section,
    CategoryWrapper,
    CategoryName,
    tag,
    cat,
    testimony,
    testimonyContainer,
    testimonyWrapper,
    texts,
    testifierInfo,
    pix,
    testifierDesc,
  } = TestimonailsStyles;

  return (
    <section className={section}>
      <div className={CategoryWrapper}>
        <div className={CategoryName}>
          <div className={tag}></div>
          <div className={cat}>
            <h2>testimonials</h2>
          </div>
        </div>
      </div>
      <div className={testimony}>
        {testimonials &&
          testimonials.map(({ text, image, name, job, _id }) => (
            <div className={testimonyContainer} key={_id}>
              <div className={testimonyWrapper}>
                <div className={texts}>
                  <p>{text}</p>
                </div>
                <div className={testifierInfo}>
                  <CustomImage
                    src={image}
                    alt={"testimonies"}
                    className={pix}
                  />
                  <div className={testifierDesc}>
                    <strong>{name}</strong>
                    <em>{job}</em>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Testimonials;
