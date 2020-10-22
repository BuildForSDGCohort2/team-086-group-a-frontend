import React, { useContext, useRef } from "react";
import { withRouter } from "react-router-dom";
import SigninStyles from "../../../Styles/Signin.module.css";
import Button from "../../../Common/Button.component/Button";
import CustomInput from "../../../Common/Input.component/Input";
import CustomLink from "../../../Common/Link.component/Link";
import CustomImage from "../../../Common/Image.component/Image";
import RegImage from "../../../Asset/Rectangle 105.png";
import { NonRegisterContextMembers } from "../../../Context/NonRegisteredMemberContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faKeycdn } from "@fortawesome/free-brands-svg-icons";
import Axios from "axios";
import { errorToastify, successToastify } from "../../react_toastify/toastify";

const Signin = ({ history }) => {
  //function for SignUp users
  const [datas, setData] = useContext(NonRegisterContextMembers);

  const {
    container,
    imageView,
    image,
    asideWrapper,
    signinText,
    signinLinks,
    googleSignin,
    googleIcon,
    facebookSignin,
    facebookIcon,
    lineWrapper,
    leftLine,
    textWrapper,
    rightLine,
    formWrapper,
    form,
    input,
    button,
    passwordVisibilityStatus,
    options,
    remindMe,
    forgotPassword,
    noAccount,
  } = SigninStyles;

  //toggling the visibility status of password
  const handleTogglePassword = () => {
    return inputsRef.current.children[1].firstChild.type === "password" &&
      inputsRef.current.children[1].firstChild.value !== ""
      ? (inputsRef.current.children[1].firstChild.type = "text")
      : (inputsRef.current.children[1].firstChild.type = "password");
  };

  //toggling the passwords icon on visibility check
  const handleToggleIconColor = ({ ref }) =>
    ref.currentTarget.style.color === "" &&
    inputsRef.current.children[1].firstChild.value !== ""
      ? (ref.currentTarget.style.color = "#ff0000")
      : (ref.currentTarget.style.color = "");

  const FormRef = useRef();
  const inputsRef = useRef();
  const { regValue } = datas;

  const handleChange = ({ target }) => {
    //function to handle input value onchange
    setData((formData) => ({
      ...formData,
      regValue: { ...regValue, [target.name]: target.value },
    }));
  };

  const handleUSerSigUp = async (e) => {
    e.preventDefault();

    const { email, password } = regValue;

    //adding the userInformations to an object
    let userObject = {
      email,
      password,
    };

    FormRef.current.reset(); //reset form on submit

    const config = {
      method: "post",
      url: "http://localhost:4000/api/v1/user/login",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
      data: JSON.stringify(userObject),
    };

    await Axios(config)
      .then((response) => {
        successToastify(response.data.message);
        sessionStorage.setItem("Token", JSON.stringify(response.data.token));
        localStorage.setItem("code", JSON.stringify(response.data.userId));
        history.push({
          pathname: "/team-086-group-a-frontend/dashboard",
        });
      })
      .catch((error) => {
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
          <h2>sign in</h2>
        </div>
        <div className={signinLinks}>
          <CustomLink
            text={
              <div className={googleSignin}>
                <FontAwesomeIcon icon={faGoogle} className={googleIcon} />
                <span>signin with google</span>
              </div>
            }
            url={"/"}
          />
          <CustomLink
            text={
              <div className={facebookSignin}>
                <FontAwesomeIcon icon={faFacebookF} className={facebookIcon} />
                <span>signin with facebook</span>
              </div>
            }
            url={"/"}
          />
        </div>

        <div className={lineWrapper}>
          <div className={leftLine}></div>

          <div className={textWrapper}>
            <b>or</b>
          </div>

          <div
            style={{ width: "37%", height: "2px", backgroundColor: "#000" }}
            className={rightLine}
          ></div>
        </div>
        <div className={formWrapper}>
          <form ref={FormRef} onSubmit={handleUSerSigUp} className={form}>
            <div ref={inputsRef}>
              <CustomInput
                type={"email"}
                name={"email"}
                placeholder={"Email"}
                className={input}
                value={regValue.email}
                onChange={handleChange}
                isRequired={true}
              />

              <CustomInput
                type={"password"}
                name={"password"}
                placeholder={"Password"}
                className={input}
                value={regValue.password}
                onChange={handleChange}
                isRequired={true}
                icon={
                  <FontAwesomeIcon
                    icon={faKeycdn}
                    onClick={(ref) => handleToggleIconColor({ ref })}
                    className={passwordVisibilityStatus}
                  />
                }
                iconClick={handleTogglePassword}
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
                url={"/team-086-group-a-frontend/signup"}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Signin);
