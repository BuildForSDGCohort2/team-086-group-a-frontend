import React from "react";
import HeadGroup from "../HeadGroup/HeadGroup";
import NotificationGroup from "../NotifcationReportGroup/NotificationReportGroup";
import FavOrderGroup from "../FavOrderGroup/FavOrderGroup";
import OrderGroup from "../OrderGroup/Orders";
import styled from "styled-components";
export default class VendorDashboard extends React.Component {
  render() {
    return (
        <Div className="container-fluid">
          <HeadGroup />
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
