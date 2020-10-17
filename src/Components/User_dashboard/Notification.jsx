import React, { useContext, useEffect } from "react";
import { RegisterContextMembers } from "../../Context/RegisteredMemberContext";
import CustomImage from "../../Common/Image.component/Image";
import CustomInput from "../../Common/Input.component/Input";
import NotificationStyles from "../../Styles/User_dashboard/Notification.module.css";
import axios from "axios";

const Notification = ({ history }) => {
  const {
    section,
    tag,
    notificationWrapper,
    listWrapper,
    list,
    leftView,
    img,
    description: descriptions,
    duration,
  } = NotificationStyles;
  const [state, setState] = useContext(RegisterContextMembers);
  const { Notifications } = state;

  const userId = JSON.parse(localStorage.getItem("code"));
  useEffect(() => {
    const handleNotifications = async () => {
      await axios
        .get(`http://localhost:4000/api/v1/dashboard/loggin_user/${userId}`)
        .then((res) => {
          const { notification } = res.data.data;
          console.log("notification", notification);
          setState((data) => ({ ...data, Notifications: notification }));
        })
        .catch((err) => {
          if (err.response === undefined) {
            return;
          }

          return console.log("err.response.data", err.response.data);
        });
    };
    handleNotifications();
    return () => {
      handleNotifications();
    };
  }, [setState, userId]);

  return (
    <section className={section}>
      <div className={tag}>
        <h2>notification</h2>
      </div>
      <div className={notificationWrapper}>
        <div className={listWrapper}>
          {Notifications &&
            Notifications.map(({ title, type, image, description }, index) => (
              <div className={list} key={index}>
                <div className={leftView}>
                  <CustomInput
                    type="radio"
                    isChecked={type || title ? true : false}
                    onChange={(e) => (e.target.checked = false)}
                    onClickCapture={(e) => (e.target.checked = false)}
                  />
                  <CustomImage src={image} alt="food image" className={img} />
                  <span className={descriptions}>
                    {description
                      ? `${description.substr(0, 30)}...`
                      : type + " available"}
                  </span>
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
