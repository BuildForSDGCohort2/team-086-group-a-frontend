import React, { useContext, useRef } from "react";
import { withRouter } from "react-router-dom";
import CustomInput from "../../../Common/Input.component/Input";
import { RegisterContextMembers } from "../../../Context/RegisteredMemberContext";
import Axios from "axios";
import {
  successToastify,
  errorToastify,
} from "../../../Components/react_toastify/toastify";
import SigninStyles from "../../../Styles/Signin.module.css";
import CustomImage from "../../../Common/Image.component/Image";
import RegImage from "../../../Asset/Rectangle 105.png";
import Button from "../../../Common/Button.component/Button";
import CustomLink from "../../../Common/Link.component/Link";

const VendorLogin = ({ history }) => {
  const [state, setState] = useContext(RegisterContextMembers);
  const { vendorLoginForm } = state;
  const { vendorId, paymentReference } = vendorLoginForm;
  const Id = useRef();
  const reference = useRef();

  const {
    container,
    imageView,
    image,
    asideWrapper,
    signinText,
    formWrapper,
    form,
    input,
    button,
    options,
    remindMe,
    forgotPassword,
    noAccount,
  } = SigninStyles;
  const handleChange = ({ target }) => {
    setState((data) => ({
      ...data,
      vendorLoginForm: { ...vendorLoginForm, [target.name]: target.value },
    }));
  };

  const handleVendorLogin = async (e) => {
    e.preventDefault();

    const config = {
      method: "post",
      url: "http://localhost:4000/api/v1/vendor/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({ vendorId, paymentReference }),
    };

    await Axios(config)
      .then((response) => {
        successToastify(response.data.message);
        history.push({
          pathname: "/team-086-group-a-frontend/vendor-dashboard/",
          state: response.data.vendorId,
        });
        Id.current.value = "";
        reference.current.value = "";
      })
      .catch(function (error) {
        if (error.response === undefined) {
          return;
        } else {
          return errorToastify(error.response.data.message);
        }
      });
  };

  return (
    <div className={container}>
      <div className={imageView}>
        <CustomImage src={RegImage} alt={"food image"} className={image} />
      </div>
      <div className={asideWrapper}>
        <div className={signinText}>
          <h2>vendor sign in</h2>
        </div>
        <div className={formWrapper}>
          <form onSubmit={handleVendorLogin} className={form}>
            <div>
              <CustomInput
                type={"text"}
                name={"vendorId"}
                placeholder={"vendor id"}
                className={input}
                value={vendorId}
                onChange={handleChange}
                isRequired={true}
                isRefs={Id}
              />

              <CustomInput
                type={"text"}
                name={"paymentReference"}
                placeholder={"reference id"}
                className={input}
                value={paymentReference}
                onChange={handleChange}
                isRequired={true}
                isRefs={reference}
              />
            </div>
            <Button text={"log in"} name={"signin"} className={button} />
          </form>
        </div>
        <div className={options}>
          <div className={remindMe}>
            <CustomInput type="checkbox" name={"checkbox"} />
            <span>Remember me</span>
          </div>
          <div className={forgotPassword}>
            <span>Forgot password?</span>
          </div>
          <div className={noAccount}>
            <span>
              No account?{" "}
              <CustomLink
                text={"Create one"}
                color="#ff0000"
                url={"/team-086-group-a-frontend/vendor/signup"}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(VendorLogin);
