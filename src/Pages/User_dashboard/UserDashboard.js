import React from "react";
import userDashboardStyles from "../../Styles/User_dashboard/UserDashBord.module.css";
import Header from "../../Common/Header.Component/Header";
import DisplayPicture from "../../Components/User_dashboard/DisplayPicture";
import Notification from "../../Components/User_dashboard/Notification";
import RecommendedRestaurants from "../../Components/User_dashboard/Restaurant";
import UserOrders from "../../Components/User_dashboard/UserOrders";
import Footer from "../../Common/Footer.component/Footer";

const UserDashboard = () => {
  const { container, wrapper, leftDisplay, order } = userDashboardStyles;
  return (
    <div className={container}>
      <Header />
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
      <Footer />
    </div>
  );
};

export default UserDashboard;
