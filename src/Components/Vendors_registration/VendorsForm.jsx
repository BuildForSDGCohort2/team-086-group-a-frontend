import React, { useRef, useContext } from "react";
import CustomInput from "../../Common/Input.component/Input";
import vendorFormStyles from "../../Styles/Vendor_registration/vendorForm.module.css";
import { RegisterContextMembers } from "../../Context/RegisteredMemberContext";

const VendorsForm = ({ history }) => {
  //destructuring the styles
  const { formWrapper, form, input } = vendorFormStyles;

  const FormRef = useRef();

  const inputsRef = useRef();

  //destructuring the context
  const [state, setState] = useContext(RegisterContextMembers);

  const { vendorFormData, businessTypes, subscriptionPlans } = state;

  //destructuring the input data
  const {
    businessName,
    officeAddress,
    businessNumber,
    email,
    taxId,
    businessType,
    subscriptionPlan,
  } = vendorFormData;

  //function to handle input value onchange
  const handleChange = ({ target }) => {
    setState((formData) => ({
      ...formData,
      vendorFormData: { ...vendorFormData, [target.name]: target.value },
    }));
  };

  return (
    <div className={formWrapper}>
      <form ref={FormRef} className={form}>
        <div ref={inputsRef}>
          <CustomInput
            type={"text"}
            name={"businessName"}
            placeholder={"business name"}
            className={input}
            onChange={handleChange}
            value={businessName}
            isRequired={true}
            color={"black"}
          />
          <CustomInput
            type={"text"}
            name={"businessType"}
            placeholder={"business type"}
            className={input}
            value={businessType}
            onChange={handleChange}
            isRequired={true}
            list={"btype"}
          />
          <datalist id={"btype"} name={"btype"}>
            {businessTypes &&
              businessTypes.map((values, index) => (
                <option key={index} value={values} />
              ))}
          </datalist>
          <CustomInput
            type={"email"}
            name={"email"}
            placeholder={"Email"}
            className={input}
            value={email}
            onChange={handleChange}
            isRequired={true}
          />
          <CustomInput
            type={"text"}
            name={"officeAddress"}
            placeholder={"office address"}
            className={input}
            value={officeAddress}
            onChange={handleChange}
            isRequired={true}
          />
          <CustomInput
            type={"tel"}
            name={"businessNumber"}
            placeholder={"business number"}
            className={input}
            value={businessNumber}
            onChange={handleChange}
            isRequired={true}
          />
          <CustomInput
            type={"text"}
            name={"taxId"}
            placeholder={"tax id number"}
            className={input}
            value={taxId}
            onChange={handleChange}
            isRequired={true}
          />{" "}
          <CustomInput
            type={"text"}
            name={"subscriptionPlan"}
            placeholder={"subscription plan"}
            className={input}
            value={subscriptionPlan}
            onChange={handleChange}
            isRequired={true}
            list="plans"
          />
          <datalist id={"plans"} name={"plans"}>
            {subscriptionPlans &&
              subscriptionPlans.map((values, index) => (
                <option key={index} value={values} />
              ))}
          </datalist>
        </div>
      </form>
    </div>
  );
};

export default VendorsForm;
