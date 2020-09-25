import React from "react";
import Header from "../../Common/Header.Component/Header";
import DisplayPicture from "../../Components/User_dashboard/DisplayPicture";
import Notification from "../../Components/User_dashboard/Notification";
import RecommendedRestaurants from "../../Components/User_dashboard/Restaurant";
import Footer from "../../Common/Footer.component/Footer";
const UserDashboard = () => {
  return (
    <div>
      <Header />
      <DisplayPicture />
      <Notification />
      <RecommendedRestaurants />
      <Footer />
    </div>
  );
};

export default UserDashboard;
