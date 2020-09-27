import React from "react";
<<<<<<< HEAD
import { Route } from "react-router-dom";
=======
import { Switch, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import { NonRegisteredMemberContextProvider } from "../Context/NonRegisteredMemberContext";
import ContactPage from "../pages/ContactPageModule/contact";
import RegistrationPages from "../pages/RegistrationPages/RegistrationPages";
>>>>>>> contact_page

const UnProtectedRoutes = (props) => {
  return (
    <div>
      <Route {...props} />
    </div>
  );
};
export default UnProtectedRoutes;
