import React from 'react';
import HeadGroup from '../HeadGroup/HeadGroup';
import NotificationGroup from '../NotifcationReportGroup/NotificationReportGroup';
import FavOrderGroup from '../FavOrderGroup/FavOrderGroup';
import OrderGroup from '../OrderGroup/Orders';
import VendorDashboardStyle from '../../../Styles/VendorDashboardStyle.module.css';

export default class VendorDashboard extends React.Component {
  render() {
    const { Body } = VendorDashboardStyle;
    return (
      <div className={Body}>
        <HeadGroup />
        <NotificationGroup />
        <FavOrderGroup />
        <OrderGroup />
      </div>
    );
  };
};
