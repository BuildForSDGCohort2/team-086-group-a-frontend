import React, { useContext } from "react";
import Header from "../../Common/Header.Component/Header";
import Footer from "../../Common/Footer.component/Footer.jsx";
import VendorDashboard from "../../Components/Vendor_Dashboard_Components/VendorMain/VendorDashboard";
import { RegisterContextMembers } from "../../Context/RegisteredMemberContext";

const VendorDashboardPage = () => {
  const [state] = useContext(RegisterContextMembers);
  const { headerNavLinksRegCollections } = state;

  return (
    <main>
      <Header headerNavLinks={headerNavLinksRegCollections} />
      <VendorDashboard />
      <Footer />
    </main>
  );
};

export default VendorDashboardPage;
