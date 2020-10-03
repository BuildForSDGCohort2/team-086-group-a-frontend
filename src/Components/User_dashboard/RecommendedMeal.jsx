import React, { useContext, useEffect } from "react";
import RecommendedMealStyles from "../../Styles/User_dashboard/RecommendedMeal.module.css";
import { RegisterContextMembers } from "../../Context/RegisteredMemberContext";
import CustomImage from "../../Common/Image.component/Image";
const RecommendedMeal = () => {
  const {
    container,
    tag,
    display,
    wrapper,
    menuDisplay,
    menuImage,
    caretAngle,
    menuCaption,
    captionsWrapper,
    addCart,
  } = RecommendedMealStyles;
  const [state, setState] = useContext(RegisterContextMembers);
  const { collection, specifiedFood } = state;
  const { availableFood } = collection;

  useEffect(() => {
    const displayReadyFood = () => {
      let response = availableFood && availableFood.filter((v, i) => i <= 2);
      setState((data) => ({
        ...data,
        specifiedFood: response,
      }));
    };
    displayReadyFood();
  }, [setState, availableFood]);
  return (
    <section className={container}>
      <div className={tag}>
        <h2>Recommended foods</h2>
      </div>
      <div className={display}>
        {specifiedFood && specifiedFood.length > 0 ? (
          specifiedFood.map(({ image, type, desc, price }, index) => (
            <div className={wrapper} key={index}>
              <div className={menuDisplay}>
                <CustomImage
                  src={image}
                  alt="food display"
                  className={menuImage}
                  icon={<div className={caretAngle}></div>}
                />

                <figcaption className={menuCaption}>
                  <div className={captionsWrapper}>
                    <h3>{type}</h3>
                    <p>{desc}</p>
                  </div>

                  <div className={addCart}>
                    <span>cart</span>
                  </div>
                </figcaption>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h2>sorry! food will soon be ready</h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecommendedMeal;
