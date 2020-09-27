import React, { useContext } from "react";
import Header from "../../Common/Header.Component/Header";
import Footer from "../../Common/Footer.component/Footer";
import TopBgView from "../../Components/MenuPage/TopBgView.jsx";
import SearchBar from "../../Components/MenuPage/SearchBar";
import AvaliableMenu from "../../Components/MenuPage/AvaliableMenu";
import MenuPageStyles from "../../Styles/MenuPageStyles/MenuPage.module.css";
import { RegisterContextMembers } from "../../Context/RegisteredMemberContext";
import { NonRegisterContextMembers } from "../../Context/NonRegisteredMemberContext";
const MenuPage = () => {
  const [state] = useContext(RegisterContextMembers);
  const [nonRegState] = useContext(NonRegisterContextMembers);
  const { HeaderNavLinksRegCollections } = state;
  const { HeaderNavLinksCollections } = nonRegState;
  const { container } = MenuPageStyles;
  return (
    <div className={container}>
      {sessionStorage.getItem("Token") ? (
        <Header HeaderNavLinks={HeaderNavLinksRegCollections} />
      ) : (
        <Header HeaderNavLinks={HeaderNavLinksCollections} />
      )}
      <TopBgView />
      <SearchBar />
      <AvaliableMenu />
      <Footer />
    </div>
  );
};

export default MenuPage;
