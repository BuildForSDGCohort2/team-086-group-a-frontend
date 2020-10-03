import React, { useContext } from "react";
import { NonRegisterContextMembers } from "../../Context/NonRegisteredMemberContext";
import CustomImage from "../../Common/Image.component/Image";
import VendorLogoStyles from "../../Styles/LandingPageStyles/VendorsLogo.module.css";

const VendorsLogo = () => {
  const [state] = useContext(NonRegisterContextMembers);
  const { collection } = state;
  const { vendorsIcon } = collection;
  const { section, logoWrapper, logoField, logoImage } = VendorLogoStyles;

  return (
    <section className={section}>
      <div className={logoWrapper}>
        {vendorsIcon &&
          vendorsIcon.map((logo, index) => (
            <fieldset key={index} className={logoField}>
              <CustomImage
                src={logo}
                alt={"vendors logo"}
                className={logoImage}
              />
            </fieldset>
          ))}
      </div>
    </section>
  );
};

export default VendorsLogo;
