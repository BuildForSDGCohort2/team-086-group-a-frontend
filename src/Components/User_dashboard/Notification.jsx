import React, { useContext, useEffect } from "react";
import { RegisterContextMembers } from "../../Context/RegisteredMemberContext";
import CustomImage from "../../Common/Image.component/Image";
import CustomList from "../../Common/List.component/List";

const Notification = () => {
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
    <section>
      <div>
        <h2>notification</h2>
      </div>
      <div>
        {Notifications &&
          Notifications.map(({ type, image }, index) => (
            <div key={index} style={{ backgroundColor: "red" }}>
              <ul style={{ backgroundColor: "blue" }}>
                <CustomImage src={image} alt="food image" />{" "}
                <CustomList text={type} />
              </ul>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Notification;
