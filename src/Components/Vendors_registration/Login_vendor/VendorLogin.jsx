import React, { useContext, useRef } from "react";
import CustomInput from "../../../Common/Input.component/Input";
import CustomButton from "../../../Common/Button.component/Button";
import { RegisterContextMembers } from "../../../Context/RegisteredMemberContext";
import Axios from "axios";
import {
  successToastify,
  errorToastify,
} from "../../../Components/react_toastify/toastify";
import NavigationComponent from "../../Navigation_components/NavigationComponent";
const VendorLogin = () => {
  const [state, setState] = useContext(RegisterContextMembers);
  const { vendorLoginForm } = state;
  const { vendorId, paymentReference } = vendorLoginForm;
  const form = useRef();
  const Id = useRef();
  const reference = useRef();

  const handleChange = ({ target }) => {
    // console.log("Id.current", Id.current);
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
        const pathname = "http://localhost:3000/vendor-dashboard";
        const state = response.data.vendorId;
        successToastify(response.data.message);
        return NavigationComponent(pathname, state);
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
    <div>
      <form onSubmit={handleVendorLogin} ref={form}>
        <CustomInput
          type="text"
          name="vendorId"
          value={vendorId}
          placeholder="vendor id"
          onChange={handleChange}
          isRefs={Id}
        />
        <CustomInput
          type="text"
          name="paymentReference"
          value={paymentReference}
          placeholder="reference number"
          onChange={handleChange}
          isRefs={reference}
        />
        <CustomButton type={"submit"} text="login" click={handleVendorLogin} />
      </form>
    </div>
  );
};

export default VendorLogin;
