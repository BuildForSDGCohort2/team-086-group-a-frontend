import React, { useState, useContext } from "react";
import Modal from "react-modal";
import CustomInput from "../../../Common/Input.component/Input";
import CustomButton from "../../../Common/Button.component/Button";
import {
  infoToastify,
  successToastify,
  errorToastify,
} from "../../react_toastify/toastify";
import Axios from "axios";
import { RegisterContextMembers } from "../../../Context/RegisteredMemberContext";

Modal.setAppElement("#root");

const CategoryModel = () => {
  const [state, setState] = useContext(RegisterContextMembers);
  const { categoryModal } = state;
  const [input, setInput] = useState([""]);
  const [brandName, setBrandName] = useState("");

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
  const handleSubmitCategory = (e) => {
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

    //assigning vendor data to menuObject
    const menuObject = { category, brandName };

    //sending data to the endpoints
    Axios.post(
      `http://localhost:4000/api/v1/dashboard/vendor/category`,
      menuObject,
      {
        "Content-Type": "application/json",
        withCredentials: true,
      }
    )
      .then((res) => {
        successToastify(res.data.message);
      })
      .catch((err) => {
        if (err.response === undefined) {
          return;
        } else {
          errorToastify(err.response.data.message);
        }
      });
  };

  return (
    <div>
      <Modal isOpen={categoryModal}>
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

export default CategoryModel;
