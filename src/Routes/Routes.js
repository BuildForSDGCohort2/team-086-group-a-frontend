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
import BlogPage from "../Pages/BlogPage/BlogPage";
import PrivacyPage from "../Pages/PrivacyPage/PrivacyPage";
import VendorSignUp from "../Pages/Vendor_registrationPage/VendorSignUp";
import VendorLoginPage from "../Pages/Vendor_registrationPage/VendorLoginPage";
import PaymentModal from "../Components/Payment_modal/paymentModal";
import VendorDashboard from "../Pages/VendorDashboardPage/VendorDashboardPage";

const Routes = () => {
  return (
    <div>
      <Router>
        <NonRegisteredMemberContextProvider>
          <Switch>
            <UnProtectedRoutes
              path="/team-086-group-a-frontend"
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
              path="/team-086-group-a-frontend/testimonials"
              component={Testimonials}
            />
            <UnProtectedRoutes
              path="/team-086-group-a-frontend/paymentModal"
              component={PaymentModal}
            />
            <UnProtectedRoutes
              path="/team-086-group-a-frontend/contact"
              component={ContactPage}
            />
            <UnProtectedRoutes
              path="/team-086-group-a-frontend/privacy"
              component={PrivacyPage}
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
              path="/team-086-group-a-frontend/vendor/signup"
              component={VendorSignUp}
            />
            <ProtectedRoutes
              path="/team-086-group-a-frontend/dashboard"
              component={UserDashBoard}
            />
            <ProtectedRoutes
              path="/team-086-group-a-frontend/vendor/login"
              component={VendorLoginPage}
            />
            <UnProtectedRoutes
              path="/team-086-group-a-frontend/privacy"
              component={PrivacyPage}
            />
            <ProtectedRoutes
              path="/team-086-group-a-frontend/vendor-dashboard"
              component={VendorDashboard}
            />
            <Route render={NotFoundPage} />
          </Switch>
        </NonRegisteredMemberContextProvider>
      </Router>
    </div>
  );
};

export default Routes;
