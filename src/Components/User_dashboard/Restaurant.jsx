import React, { useContext } from "react";
import { NonRegisterContextMembers } from "../../Context/NonRegisteredMemberContext.js";
import CustomImage from "../../Common/Image.component/Image";
import RestaurantStyles from "../../Styles/User_dashboard/Restaurants.module.css";

const Restaurant = () => {
  const { container, tag, iconWrapper, restaurants, image } = RestaurantStyles;
  const [state] = useContext(NonRegisterContextMembers);
  const { collection } = state;
  const { vendorsIcon } = collection;

  const recomendedItems = vendorsIcon ? (
    vendorsIcon
      .filter((icons, i) => i <= 2)
      .map((icon, index) => (
        <CustomImage
          src={icon}
          alt={"vendors icons"}
          key={index}
          className={image}
        />
      ))
  ) : (
    <p>Sorry no recommendation was seen</p>
  );

  return (
    <section className={container}>
      <div className={tag}>
        <h2>recomended restaurants</h2>
      </div>
      <div className={iconWrapper}>
        <div className={restaurants}>{recomendedItems}</div>
      </div>
    </section>
  );
};

export default Restaurant;
