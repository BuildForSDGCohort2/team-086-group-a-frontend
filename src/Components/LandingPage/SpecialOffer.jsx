import React, { useContext } from "react";
import { NonRegisterContextMembers } from "../../Context/NonRegisteredMemberContext";
import CustomImage from "../../Common/Image.component/Image.jsx";
import SpecialOfferStyles from "../../Styles/LandingPageStyles/SpecialOffers.module.css";

const SpecialOffer = () => {
  const [state] = useContext(NonRegisterContextMembers);
  const { collection } = state;
  const { specialOffers } = collection;
  const {
    section,
    CategoryWrapper,
    CategoryName,
    tag,
    cat,
    specialOffersWrapper,
    contentWrapper,
    imgField,
    img,
    discounts,
    itemCaption,
  } = SpecialOfferStyles;

  return (
    <section className={section}>
      <div className={CategoryWrapper}>
        <div className={CategoryName}>
          <div className={tag}></div>
          <div className={cat}>
            <h2>special offers</h2>
          </div>
        </div>
      </div>
      <div className={specialOffersWrapper}>
        {specialOffers &&
          specialOffers.map(({ image, name, price, discount, _id }) => (
            <div key={_id} className={contentWrapper}>
              <fieldset className={imgField}>
                <CustomImage src={image} alt={"food display"} className={img} />
                <div className={discounts}>
                  {discount ? <span>{discount + "%"}</span> : null}
                </div>
              </fieldset>
              <figcaption className={itemCaption}>
                <h3>{name}</h3>
                <span>${price}</span>
              </figcaption>
            </div>
          ))}
      </div>
    </section>
  );
};

export default SpecialOffer;
