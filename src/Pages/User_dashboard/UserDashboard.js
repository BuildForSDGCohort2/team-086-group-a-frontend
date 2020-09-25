import React from "react";
import DisplayPicture from "../../Components/User_dashboard/DisplayPicture";
import Notification from "../../Components/User_dashboard/Notification";
import Header from "../../Common/Header.Component/Header";
import Footer from "../../Common/Footer.component/Footer";
const UserDashboard = () => {
  return (
    <div>
      <Header />
      <DisplayPicture />
      <Notification />
      <Footer />
    </div>
  );
};

export default UserDashboard;
