import React, { useContext } from "react";
import Header from "../../Common/Header.Component/Header";
import Footer from "../../Common/Footer.component/Footer";
import { RegisterContextMembers } from "../../Context/RegisteredMemberContext";
import TopBgImage from "../../Components/Blogs/TopBgImage";
import Feeds from "../../Components/Blogs/Feeds";
import AllFeeds from "../../Components/Blogs/AllFeeds";

const BlogPage = () => {
  const [state] = useContext(RegisterContextMembers);
  const { headerNavLinksRegCollections } = state;
  return (
    <div>
      {sessionStorage.getItem("Token") ? (
        <Header headerNavLinks={headerNavLinksRegCollections} />
      ) : null}

      <TopBgImage />
      <Feeds />
      <AllFeeds />
      <Footer />
    </div>
  );
};

export default BlogPage;
