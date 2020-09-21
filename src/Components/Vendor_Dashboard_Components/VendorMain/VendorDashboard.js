import React from 'react';
import HeadGroup from '../HeadGroup/HeadGroup';
import NotificationGroup from '../NotifcationReportGroup/NotificationReportGroup';
// import FavOrderGroup from '../FavOrderGroup/FavOrderGroup';
// import OrderGroup from '../OrderGroup/Orders';

export default class VendorDashboard extends React.Component {
  render() {
    return (
      <div>
        <HeadGroup />
        <NotificationGroup />
      </div>
    );
  };
};
