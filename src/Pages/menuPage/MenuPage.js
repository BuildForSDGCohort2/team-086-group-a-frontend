import React from "react";
import Header from "../../Common/Header.Component/Header";
import Footer from "../../Common/Footer.component/Footer";
import TopBgView from "../../Components/MenuPage/TopBgView.jsx";
import MenuPageStyles from "../../Styles/MenuPageStyles/TopBgView.module.css";
const MenuPage = () => {
  const { container } = MenuPageStyles;
  return (
    <div className={container}>
      <Header />
      <TopBgView />
      <Footer />
    </div>
  );
};

export default MenuPage;
