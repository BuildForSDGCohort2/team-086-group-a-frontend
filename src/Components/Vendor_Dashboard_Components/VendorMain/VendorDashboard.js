import React from 'react';
import HeadGroup from '../HeadGroup/HeadGroup';
import NotificationGroup from '../NotifcationReportGroup/NotificationReportGroup';
import FavOrderGroup from '../FavOrderGroup/FavOrderGroup';
import OrderGroup from '../OrderGroup/Orders';
import Header from '../../../Common/Header.Component/Header.jsx';
import Footer from '../../../Common/Footer.component/Footer.jsx';
export default class VendorDashboard extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <HeadGroup />
          <NotificationGroup />
          <FavOrderGroup />
          <OrderGroup />
          <Footer />
        </div>
      </div>
    );
  };
};
