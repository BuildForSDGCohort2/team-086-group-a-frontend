import React, { useContext, useRef } from "react";
import { withRouter } from "react-router-dom";
import SignUpStyles from "../../../Styles/SignUp.module.css";
import Button from "../../../Common/Button.component/Button";
import CustomInput from "../../../Common/Input.component/Input";
import CustomLink from "../../../Common/Link.component/Link";
import CustomImage from "../../../Common/Image.component/Image";
import RegImage from "../../../Asset/Rectangle 105.png";
// import axios from "axios";
import { NonRegisterContextMembers } from "../../../Context/NonRegisteredMemberContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebookF,
  faKeycdn,
} from "@fortawesome/free-brands-svg-icons";
//
const Signup = ({ history }) => {
  //function for SignUp users
  const [datas, setData] = useContext(NonRegisterContextMembers);
  const {
    container,
    imageView,
    image,
    asideWrapper,
    signupText,
    signupLinks,
    googleSignup,
    googleIcon,
    facebookSignup,
    facebookIcon,
    lineWrapper,
    leftLine,
    textWrapper,
    rightLine,
    formWrapper,
    form,
    input,
    button,
    signinNav,
    passwordVisibilityStatus,
  } = SignUpStyles;
  const FormRef = useRef();
  const inputsRef = useRef();
  const { regValue } = datas;

  const handleSignNavigation = async () => {
    await history.push("/team-086-group-a-frontend/signin");
  };

  //toggling the visibility status of password
  const handleTogglePassword = () => {
    return inputsRef.current.children[3].firstChild.type === "password" &&
      inputsRef.current.children[3].firstChild.value !== ""
      ? (inputsRef.current.children[3].firstChild.type = "text")
      : (inputsRef.current.children[3].firstChild.type = "password");
  };

  //toggling the visibility status of confirm password
  const handleToggleConfirmPassword = () => {
    return inputsRef.current.children[4].firstChild.type === "password" &&
      inputsRef.current.children[4].firstChild.value !== ""
      ? (inputsRef.current.children[4].firstChild.type = "text")
      : (inputsRef.current.children[4].firstChild.type = "password");
  };

  //toggling the passwords icon on visibility check
  const handlePasswordToggleIconColor = ({ ref }) =>
    ref.currentTarget.style.color === "" &&
    inputsRef.current.children[3].firstChild.value !== ""
      ? (ref.currentTarget.style.color = "#ff0000")
      : (ref.currentTarget.style.color = "");

  const handleConfirmPasswordToggleIconColor = ({ ref }) =>
    ref.currentTarget.style.color === "" &&
    inputsRef.current.children[4].firstChild.value !== ""
      ? (ref.currentTarget.style.color = "#ff0000")
      : (ref.currentTarget.style.color = "");

  const isNumeric = (n) => {
    //function that checks for numbers
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  const handleChange = ({ target }) => {
    //function to handle input value onchange
    setData((formData) => ({
      ...formData,
      formValue: { ...regValue, [target.name]: target.value },
    }));
  };

  const handleUSerSigUp = async (e) => {
    e.preventDefault();
    const {
      fullName,
      phoneNumber,
      email,
      password,
      confirmPassword,
    } = regValue;

    //conditionion the input value datas

    if (isNumeric(fullName)) {
      alert("Number is not an option");
      inputsRef.current.children[0].firstChild.focus();
      return false;
    } else if (password.length < 8) {
      alert("Password must not be less 8 characters");
      inputsRef.current.children[3].firstChild.focus();
      return false;
    } else if (confirmPassword.length < 8) {
      alert("confirm password must not be less 8 characters");
      inputsRef.current.children[4].firstChild.focus();
      return false;
    } else if (confirmPassword !== password) {
      alert("Password does not match");
      inputsRef.current.children[4].firstChild.focus();
      return false;
    }

    //adding the userInformations to an object
    let userObject = {
      fullName,
      phoneNumber,
      email,
      password,
      confirmPassword,
    };
    console.log(userObject);

    FormRef.current.reset(); //reset form on submit

    //post to the server
    try {
      // await axios.post("http://endPoint/", userObject)
    } catch (error) {
      throw error;
    }
    alert("sign up successfully");
    //routing to signin page on componentdid update
    handleSignNavigation();
  };

  return (
    <div className={container}>
      <div className={imageView}>
        <CustomImage src={RegImage} alt={"food image"} className={image} />
      </div>
      <div className={asideWrapper}>
        <div className={signupText}>
          <h2>sign up</h2>
        </div>
        <div className={signupLinks}>
          <CustomLink
            text={
              <div className={googleSignup}>
                <FontAwesomeIcon icon={faGoogle} className={googleIcon} />
                <span>signup with google</span>
              </div>
            }
            url={"/"}
          />
          <CustomLink
            text={
              <div className={facebookSignup}>
                <FontAwesomeIcon icon={faFacebookF} className={facebookIcon} />
                <span>signup with facebook</span>
              </div>
            }
            url={"/team-086-group-a-frontend"}
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
                type={"text"}
                name={"fullName"}
                placeholder={"fullname"}
                className={input}
                onChange={handleChange}
                value={regValue.fullName}
                isRequired={true}
                color={"black"}
              />

              <CustomInput
                type={"number"}
                name={"phoneNumber"}
                placeholder={"Phone Number"}
                className={input}
                value={regValue.phoneNumber}
                onChange={handleChange}
                isRequired={true}
              />

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
                    onClick={(ref) => handlePasswordToggleIconColor({ ref })}
                    className={passwordVisibilityStatus}
                  />
                }
                iconClick={handleTogglePassword}
              />
              <CustomInput
                type={"password"}
                name={"confirmPassword"}
                placeholder={"Confirm Password"}
                className={input}
                value={regValue.confirmPassword}
                onChange={handleChange}
                isRequired={true}
                icon={
                  <FontAwesomeIcon
                    icon={faKeycdn}
                    onClick={(ref) =>
                      handleConfirmPasswordToggleIconColor({ ref })
                    }
                    className={passwordVisibilityStatus}
                  />
                }
                iconClick={handleToggleConfirmPassword}
              />
            </div>
            <Button
              text={"create account"}
              name={"signup"}
              className={button}
            />
          </form>
        </div>
        <div className={signinNav}>
          <span>
            Already have and account{" "}
            <CustomLink
              text="Login"
              url={"/team-086-group-a-frontend/signin"}
              color={"#ff0000"}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Signup);
