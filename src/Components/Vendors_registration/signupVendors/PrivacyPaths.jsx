import React, { useContext } from "react";
import CustomLink from "../../../Common/Link.component/Link";
import PrivacyStyle from "../../../Styles/Vendor_registration/privacyPath.module.css";
import CustomInput from "../../../Common/Input.component/Input";
import { RegisterContextMembers } from "../../../Context/RegisteredMemberContext";

const PrivacyPaths = () => {
  const [, setState] = useContext(RegisterContextMembers);
  //destructure styles
  const { container, text, unique } = PrivacyStyle;

  const handlePrivacyCheck = (checked) => {
    setState((data) => ({
      ...data,
      privacyCheck: checked,
    }));
  };
  return (
    <div className={container}>
      <CustomInput
        type={"checkbox"}
        // isChecked={privacyCheck}
        onClickCapture={(ref) => handlePrivacyCheck(ref.target.checked)}
      />

      <span className={text}>
        By continuing, you agree to THINKSPICEFOOD{" "}
        <em className={unique}>
          <CustomLink
            text={"terms of service "}
            url={"team-086-group-a-frontend"}
            color="red"
          />
        </em>
        and
        <em className={unique}>
          <CustomLink
            text={" privacy policy"}
            url={"team-086-group-a-frontend"}
            color="red"
          />
        </em>
      </span>
    </div>
  );
};

export default PrivacyPaths;
