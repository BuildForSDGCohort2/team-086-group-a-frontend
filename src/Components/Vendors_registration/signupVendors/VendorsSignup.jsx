import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import SignUpVendorStyles from "../../../Styles/Vendor_registration/signUpVendors.module.css";
import Button from "../../../Common/Button.component/Button";
import CustomLink from "../../../Common/Link.component/Link";
import CustomImage from "../../../Common/Image.component/Image";
import RegImage from "../../../Asset/Rectangle 105.png";
import { RegisterContextMembers } from "../../../Context/RegisteredMemberContext";
import Axios from "axios";
import Text from "./Text";
import VendorsForm from "../VendorsForm";
import PrivacyPaths from "./PrivacyPaths";
//
const VendorSignup = ({ history }) => {
  //function for SignUp users
  const {
    container,
    imageView,
    image,
    asideWrapper,
    signupText,
    button,
    signinNav,
  } = SignUpVendorStyles;
  const [state] = useContext(RegisterContextMembers);

  const { vendorFormData } = state;

  const handleSignNavigation = async () => {
    await history.push("/team-086-group-a-frontend/vendor-dashboard");
  };
  const handleVendorSubmit = async (e) => {
    e.preventDefault();

    const config = {
      method: "post",
      url: "http://localhost:4000/api/v1/vendor/signup",
      headers: {
        "content-type": "application/json",
      },
      data: JSON.stringify(vendorFormData),
    };

    Axios(config)
      .then((res) => {
        console.log(res.data);
        handleSignNavigation();
      })
      .catch((error) => {
        if (error.response === undefined) {
          return;
        }
        console.error(error.response);
      });
  };
  return (
    <div className={container}>
      <div className={imageView}>
        <CustomImage src={RegImage} alt={"food image"} className={image} />
      </div>
      <div className={asideWrapper}>
        <div className={signupText}>
          <h2>vendor form</h2>
        </div>
        <VendorsForm />
        <PrivacyPaths />
        <Text />
        <Button
          text={"suscribe"}
          name={"signup"}
          className={button}
          click={handleVendorSubmit}
        />

        <div className={signinNav}>
          <span>
            back to the{" "}
            <CustomLink
              text="user dashboard"
              url={"/team-086-group-a-frontend/signin"}
              color={"#ff0000"}
              textTransform={"capitalize"}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(VendorSignup);
