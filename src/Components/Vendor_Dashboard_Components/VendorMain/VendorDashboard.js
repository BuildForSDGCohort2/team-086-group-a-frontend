import React from "react";
import HeadGroup from "../HeadGroup/HeadGroup";
import NotificationGroup from "../NotifcationReportGroup/NotificationReportGroup";
import FavOrderGroup from "../FavOrderGroup/FavOrderGroup";
import OrderGroup from "../OrderGroup/Orders";
import styled from "styled-components";
import VendorRequests from "../Vendor_requests/VendorRequest";

export default class VendorDashboard extends React.Component {
  render() {
    return (
      <Div className="container-fluid">
        <HeadGroup />
        <VendorRequests />
        <NotificationGroup />
        <FavOrderGroup />
        <OrderGroup />
      </Div>
    );
  }
}

const Div = styled.div`
  width: 85%;
`;
