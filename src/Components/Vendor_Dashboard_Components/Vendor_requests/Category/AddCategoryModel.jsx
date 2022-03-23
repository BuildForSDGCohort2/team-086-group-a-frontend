import React, { useState, useContext } from "react";
import Modal from "react-modal";
import CustomInput from "../../../../Common/Input.component/Input";
import CustomButton from "../../../../Common/Button.component/Button";
import {
  infoToastify,
  successToastify,
  errorToastify,
} from "../../../react_toastify/toastify";
import Axios from "axios";
import { RegisterContextMembers } from "../../../../Context/RegisteredMemberContext";

//seting the appending node as the root
Modal.setAppElement("#root");

const AddCategoryModel = () => {
  const [state, setState] = useContext(RegisterContextMembers);
  const { addCategoryModal } = state;
  const [input, setInput] = useState([""]);
  const [brandName, setBrandName] = useState("");
  const { REACT_APP_ENDPOINT } = process.env;

  //adding new inputs
  const handleAppendNewInput = () => {
    if (input.length + 1 > 10) {
      return infoToastify("menu list must not be more then 10");
    }
    setInput(input.concat(""));
  };

  //adding values to the input onchange
  const handleChange = ({ event, index }) => {
    setInput(
      input.map((value, i) => {
        if (index === i) {
          value = event.target.value;
        }
        return value;
      })
    );
  };

  //removing specified input on click
  const handleRemoveInputs = ({ index }) => {
    setInput(input.filter((v, i) => i !== index));
  };

  //submiting the category to the endpoint
  const handleSubmitCategory = async (e) => {
    e.preventDefault();
    let category;
    input.length &&
      input.map((value) => {
        if (value === "") {
          return false;
        }
        category = input;
        return false;
      });

    //validating the business name field
    if (brandName === "" || undefined) {
      return infoToastify("business name field is required");
    }

    //assigning vendor data to menuObject
    const menuObject = { category, brandName };

    //sending data to the endpoints
    await Axios.post(
      `${REACT_APP_ENDPOINT}/api/v1/dashboard/vendor/category/${brandName}`,
      menuObject,
      {
        "Content-Type": "application/json",
        withCredentials: true,
      }
    )
      .then((res) => {
        //sending a success message to the client
        successToastify(res.data.message);

        //closing the modal
        setState((datas) => ({
          ...datas,
          addCategoryModal: false,
        }));
      })
      .catch((err) => {
        //breaking the process if error is undefined
        if (err.response === undefined) {
          return;
        } else {
          //sending an error message to the client
          errorToastify(err.response.data.message);
        }
      });
  };

  return (
    <div>
      <Modal isOpen={addCategoryModal}>
        <div>
          <CustomInput
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            placeholder="add your business name"
            paddingLeft={"1rem"}
            isRequired={true}
          />
          {input.length &&
            input.map((value, index) => (
              <div key={index}>
                <CustomInput
                  value={value}
                  onChange={(event) => handleChange({ event, index })}
                  placeholder={`menu ${index + 1} eg soup, rice, drinks`}
                  paddingLeft={"1rem"}
                  isRequired={true}
                />

                <CustomButton
                  text={"remove"}
                  click={() => handleRemoveInputs({ index })}
                />
              </div>
            ))}
        </div>

        <CustomButton
          text="ok"
          textTransform="uppercase"
          click={handleAppendNewInput}
        />
        <CustomButton text={"submit"} click={handleSubmitCategory} />
        <CustomButton
          text={"cancel"}
          click={() =>
            setState((data) => ({
              ...data,
              categoryModal: false,
            }))
          }
        />
      </Modal>
    </div>
  );
};

export default AddCategoryModel;
