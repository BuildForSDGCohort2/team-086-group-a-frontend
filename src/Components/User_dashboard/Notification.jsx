import React, { useContext, useEffect } from "react";
import { RegisterContextMembers } from "../../Context/RegisteredMemberContext";
import CustomImage from "../../Common/Image.component/Image";
import CustomInput from "../../Common/Input.component/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";

import NotificationStyles from "../../Styles/User_dashboard/Notification.module.css";
const Notification = () => {
  const {
    section,
    tag,
    notificationWrapper,
    listWrapper,
    list,
    leftView,
    img,
    description,
    duration,
  } = NotificationStyles;
  const [state, setState] = useContext(RegisterContextMembers);
  const { collection, Notifications } = state;
  const { availableFood } = collection;

  useEffect(() => {
    const handleNotifications = () => {
      const items =
        availableFood &&
        availableFood.filter(
          ({ readyMeal, unique }) => readyMeal || unique === true
        );
      setState((data) => ({ ...data, Notifications: items }));
    };
    handleNotifications();
  }, [setState, availableFood]);

  return (
    <section className={section}>
      <div className={tag}>
        <h2>notification</h2>
      </div>
      <div className={notificationWrapper}>
        <div className={listWrapper}>
          {Notifications &&
            Notifications.map(({ type, image }, index) => (
              <div className={list} key={index}>
                <div className={leftView}>
                  <CustomInput type="radio" />
                  <CustomImage src={image} alt="food image" className={img} />
                  <span className={description}>{type + " available"}</span>
                </div>
                <span className={duration}>2days ago</span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Notification;
