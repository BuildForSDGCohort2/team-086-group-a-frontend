import React, { useContext, useEffect } from "react";
import { RegisterContextMembers } from "../../Context/RegisteredMemberContext";
import CustomImage from "../../Common/Image.component/Image";
import CustomList from "../../Common/List.component/List";
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
        {Notifications &&
          Notifications.map(({ type, image }, index) => (
            <div key={index} className={listWrapper}>
              <div style={{ backgroundColor: "blue" }} className={list}>
                <div className={leftView}>
                  <CustomImage src={image} alt="food image" className={img} />
                  <CustomList
                    text={type + " available"}
                    className={description}
                  />
                </div>
                <span className={duration}>2days ago</span>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Notification;
