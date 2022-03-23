import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import Modal from "react-modal";
import { RegisterContextMembers } from "../../../../Context/RegisteredMemberContext";
import {
  errorToastify,
  infoToastify,
  successToastify,
} from "../../../react_toastify/toastify";
import CustomInput from "../../../../Common/Input.component/Input";
import CustomButton from "../../../../Common/Button.component/Button";

Modal.setAppElement("#root");

const UpdateCategoryModal = () => {
  const [state, setState] = useContext(RegisterContextMembers);
  const [categories, setcategory] = useState([]);
  const { updateCategoryModal } = state;
  const [input, setInput] = useState([""]);
  const { REACT_APP_ENDPOINT } = process.env;

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

    const { _id } = categories;
    const id = _id;
    //assigning vendor data to menuObject

    //sending updated data to the endpoints
    await Axios.put(
      `${REACT_APP_ENDPOINT}/api/v1/dashboard/vendor/category/list/${id}`,
      { category },
      {
        "Content-Type": "application/json",
        withCredentials: true,
      }
    )
      .then((res) => {
        //sending a success message to the client
        successToastify(res.data.message);

        //closing the category modal
        setState((datas) => ({
          ...datas,
          updateCategoryModal: false,
        }));
      })
      .catch((err) => {
        if (err.response === undefined) {
          //break the response once the response is undefined
          return;
        } else {
          //sending an error message to  client
          errorToastify(err.response.data.message);
        }
      });
  };

  //getting the vendor category once the component mount
  useEffect(() => {
    //function to handle the get request of the vendor category
    const fetchCategoryForUPdate = async () => {
      //fetching the category once the category modal is opened
      if (updateCategoryModal === true) {
        //making a get request of the category of the logged vendor
        await Axios.get(
          `${REACT_APP_ENDPOINT}/api/v1/dashboard/vendor/category/list`,
          {
            "Content-Type": "application/json",
            withCredentials: true,
          }
        )
          .then((res) => {
            //setting the response data to the state
            setcategory(res.data.data);

            //setting the category to the state
            setInput(res.data.data.category);
          })
          .catch((err) => {
            if (err.response === undefined) {
              return;
            }

            //returning an error message to the client
            return errorToastify(err.response.data.message);
          });
      }
    };

    fetchCategoryForUPdate();
  }, [updateCategoryModal, REACT_APP_ENDPOINT]);

  return (
    <div>
      <Modal isOpen={updateCategoryModal}>
        <div>
          {categories &&
            input.length &&
            input.map((values, index) => (
              <div key={index}>
                <CustomInput
                  typ="text"
                  value={values}
                  onChange={(event) => handleChange({ event, index })}
                />
                <CustomButton
                  text="remove category"
                  click={() => handleRemoveInputs({ index })}
                />
              </div>
            ))}
        </div>
        <CustomButton text="add new category" click={handleAppendNewInput} />
        <CustomButton text="submit" click={handleSubmitCategory} />
      </Modal>
    </div>
  );
};

export default UpdateCategoryModal;
