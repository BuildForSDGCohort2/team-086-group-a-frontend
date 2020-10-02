import React, { useContext } from "react";
import Header from "../../Common/Header.Component/Header";
import Footer from "../../Common/Footer.component/Footer";
import { RegisterContextMembers } from "../../Context/RegisteredMemberContext";

const BlogPage = () => {
  const [state] = useContext(RegisterContextMembers);
  console.log("state", state);
  const { headerNavLinksRegCollections } = state;
  return (
    <div>
      {sessionStorage.getItem("Token") ? (
        <Header headerNavLinks={headerNavLinksRegCollections} />
      ) : null}
      <h2>hellow</h2>

      <Footer />
    </div>
  );
};

export default BlogPage;
