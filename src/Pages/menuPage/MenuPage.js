import React from "react";
import Header from "../../Common/Header.Component/Header";
import Footer from "../../Common/Footer.component/Footer";
import TopBgView from "../../Components/MenuPage/TopBgView.jsx";
import SearchBar from "../../Components/MenuPage/SearchBar";
import AvaliableMenu from "../../Components/MenuPage/AvaliableMenu";
import MenuPageStyles from "../../Styles/MenuPageStyles/MenuPage.module.css";
const MenuPage = () => {
  const { container } = MenuPageStyles;
  return (
    <div className={container}>
      <Header />
      <TopBgView />
      <SearchBar />
      <AvaliableMenu />
      <Footer />
    </div>
  );
};

export default MenuPage;
