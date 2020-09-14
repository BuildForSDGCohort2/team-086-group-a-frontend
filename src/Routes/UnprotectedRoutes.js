import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import { NonRegisteredMemberContextProvider } from "../Context/NonRegisteredMemberContext";
import ContactPage from "../pages/ContactPageModule/contact";
import RegistrationPages from "../pages/RegistrationPages/RegistrationPages";

const UnProtectedRoutes = () => {
  return (
    <div>
      <div>
        <NonRegisteredMemberContextProvider>
          <Switch>
            <Route
              path="/team-086-group-a-frontend/"
              exact={true}
              component={LandingPage}
            />

            <Route
              path="/team-086-group-a-frontend/registration"
              exact={true}
              component={RegistrationPages}
            />
            <Route
              path="/team-086-group-a-frontend/contact"
              exact={true}
              component={ContactPage}
            />
          </Switch>
        </NonRegisteredMemberContextProvider>
      </div>
    </div>
  );
};
export default UnProtectedRoutes;
