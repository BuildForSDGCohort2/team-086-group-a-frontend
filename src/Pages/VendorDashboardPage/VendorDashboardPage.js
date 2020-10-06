import React from "react";
import Header from "../../Common/Header.Component/Header";
import Footer from "../../Common/Footer.component/Footer.jsx";
import VendorDashboard from "../../Components/Vendor_Dashboard_Components/VendorMain/VendorDashboard";


export default class VendorDashboardPage extends React.Component {
  render() {
    return (
      <main>  
        <Header />
        <VendorDashboard />
        <Footer />
      </main>
    );
  }
}

//#f96058
