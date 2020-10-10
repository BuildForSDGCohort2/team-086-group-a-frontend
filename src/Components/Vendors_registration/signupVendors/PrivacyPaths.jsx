import React from "react";
import CustomLink from "../../../Common/Link.component/Link";
import PrivacyStyle from "../../../Styles/Vendor_registration/privacyPath.module.css";
const PrivacyPaths = () => {
  //destructure styles

  const { container, text, unique } = PrivacyStyle;
  return (
    <div className={container}>
      <span className={text}>
        by continuing, you agree to THINKSPICEFOOD{" "}
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
