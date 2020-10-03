import React, { useContext } from "react";
import { RegisterContextMembers } from "../../Context/RegisteredMemberContext";
import CustomImage from "../../Common/Image.component/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import OrderStyles from "../../Styles/User_dashboard/Orders.module.css";
import Expenses from "../../Components/User_dashboard/Expenses";

const UserOrders = () => {
  const {
    aside,
    tag,
    orderWrapper,
    fieldset,
    displayItems,
    foodImage,
    foodType,
    timesIconWrapper,
    timesIcon,
    expensesContainer,
  } = OrderStyles;
  const [state] = useContext(RegisterContextMembers);
  const { collection } = state;
  const { availableFood } = collection;

  const orders = availableFood
    ? availableFood
        .filter((value, index) => index <= 3)
        .map(({ image, type, price }, index) => (
          <div className={fieldset} key={index}>
            <div className={displayItems}>
              <CustomImage
                src={image}
                alt={"food image"}
                className={foodImage}
              />
              <figcaption className={foodType}>
                <div>
                  <span>{type}</span>
                  <p>${price}</p>
                </div>
              </figcaption>
            </div>
            <div className={timesIconWrapper}>
              <FontAwesomeIcon icon={faTimes} className={timesIcon} />
            </div>
          </div>
        ))
    : null;
  return (
    <aside className={aside}>
      <div className={tag}>
        <h2>my order</h2>
      </div>
      <div className={orderWrapper}>{orders}</div>
      <div className={expensesContainer}>
        <Expenses />
      </div>
    </aside>
  );
};

export default UserOrders;
