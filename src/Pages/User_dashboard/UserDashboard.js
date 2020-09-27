import React, { useContext } from "react";
import userDashboardStyles from "../../Styles/User_dashboard/UserDashBord.module.css";
import Header from "../../Common/Header.Component/Header";
import DisplayPicture from "../../Components/User_dashboard/DisplayPicture";
import Notification from "../../Components/User_dashboard/Notification";
import RecommendedRestaurants from "../../Components/User_dashboard/Restaurant";
import UserOrders from "../../Components/User_dashboard/UserOrders";
import RecommendedMeal from "../../Components/User_dashboard/RecommendedMeal";
import Footer from "../../Common/Footer.component/Footer";
import { RegisterContextMembers } from "../../Context/RegisteredMemberContext";

const UserDashboard = () => {
  const { container, wrapper, leftDisplay, order } = userDashboardStyles;
  const [state] = useContext(RegisterContextMembers);
  const { HeaderNavLinksRegCollections } = state;
  return (
    <div className={container}>
      <Header HeaderNavLinks={HeaderNavLinksRegCollections} />
      <DisplayPicture />
      <div className={wrapper}>
        <div className={leftDisplay}>
          <Notification />
          <RecommendedRestaurants />
        </div>
        <div className={order}>
          <UserOrders />
        </div>
      </div>
      <RecommendedMeal />
      <Footer />
    </div>
  );
};

export default UserDashboard;
