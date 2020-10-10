import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import ContactPage from "../Pages/ContactPage/contact";
import SigninRegistrationPage from "../Pages/RegistrationPages/SigninRegistration";
import SignupRegistrationPage from "../Pages/RegistrationPages/RegistrationPages";
import MenuPage from "../Pages/menuPage/MenuPage";
import UserDashBoard from "../Pages/User_dashboard/UserDashboard";
import UnProtectedRoutes from "./UnprotectedRoutes";
import ProtectedRoutes from "./ProtectRouted";
import { NonRegisteredMemberContextProvider } from "../Context/NonRegisteredMemberContext";
import NotFoundPage from "../Pages/NotFoundPages/NotFound";
import Testimonials from "../Pages/TestimonialsPage/Testimonials";
import ContactUs from "../Pages/ContactPageModule/contact";
import BlogPage from "../Pages/BlogPage/BlogPage";

const Routes = () => {
  return (
    <div>
      <Router>
        <NonRegisteredMemberContextProvider>
          <Switch>
            <UnProtectedRoutes
              path="/team-086-group-a-frontend/"
              exact
              component={LandingPage}
            />
            <UnProtectedRoutes
              path="/team-086-group-a-frontend/home"
              component={LandingPage}
            />
            <UnProtectedRoutes
              path="/team-086-group-a-frontend/signin"
              component={SigninRegistrationPage}
            />
            <UnProtectedRoutes
              path="/team-086-group-a-frontend/signup"
              component={SignupRegistrationPage}
            />
            <UnProtectedRoutes
              path="/team-086-group-a-frontend/contactUs"
              component={ContactUs}
            />

            <UnProtectedRoutes
              path="/team-086-group-a-frontend/testimonials"
              component={Testimonials}
            />
            <UnProtectedRoutes
              path="/team-086-group-a-frontend/contact"
              component={ContactPage}
            />
            <ProtectedRoutes
              path="/team-086-group-a-frontend/menu"
              component={MenuPage}
            />
            <ProtectedRoutes
              path="/team-086-group-a-frontend/blogs"
              component={BlogPage}
            />
            <ProtectedRoutes
              path="/team-086-group-a-frontend/dashboard"
              component={UserDashBoard}
            />
            <UnProtectedRoutes
              path="/team-086-group-a-frontend/privacy"
              // exact
              component={PrivacyPage}
            />
            <Route render={NotFoundPage} />
          </Switch>
        </NonRegisteredMemberContextProvider>
      </Router>
    </div>
  );
};

export default Routes;
