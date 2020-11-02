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
const AddMenuModal = () => {
  const [state, setState] = useContext(RegisterContextMembers);

  const { addMenuModal } = state;

  const [data, setData] = useState({
    name: "",
    type: "",
    desc: "",
    discount: "",
    readyMeal: "",
    offers: "",
    images: "",
  });
  const { REACT_APP_ENDPOINT } = process.env;

  const [brandName, setBrandName] = useState("");

  const [fileData, setFileData] = useState();

  //adding values to the input onchange
  const handleChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  //handling the filechanges
  const handleFileChange = ({ target }) => {
    setFileData(target.files[0]);
    setData({ ...data, images: target.value });
  };

  //submiting the category to the endpoint

  const handleSubmitMenu = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    //adding all state to the form data
    formdata.append("image", fileData);
    formdata.append("name", data.name);
    formdata.append("type", data.type);
    formdata.append("desc", data.desc);
    formdata.append("price", data.price);
    formdata.append("discount", data.discount);
    formdata.append("readyMeal", data.readyMeal);
    formdata.append("offers", data.offers);

    //validating the business name field
    if (brandName === "" || undefined) {
      return infoToastify("business name field is required");
    }

    //sending data to the endpoints
    await Axios.post(
      `${REACT_APP_ENDPOINT}/api/v1/dashboard/vendor/menu/${brandName}`,
      formdata,
      {
        "Content-Type": "application/json",
        withCredentials: true,
      }
    )
      .then((res) => {
        //sending a success message to the client
        successToastify(res.data.message);

        //closing the modal
        // setState((datas) => ({
        //   ...datas,
        //   addCategoryModal: false,
        // }));
      })
      .catch((err) => {
        //breaking the process if error is undefined
        if (err.response === undefined) {
          return;
        } else {
          //sending an error message to the client
          console.log("err.response.data.message", err.response.data);
          return errorToastify(err.response.data.message);
        }
      });
  };

  const { name, type, desc, price, discount, readyMeal, offers, images } = data;

  return (
    <div>
      <Modal isOpen={addMenuModal}>
        <form>
          <CustomInput
            text="text"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            placeholder="add your business name"
            paddingLeft={"1rem"}
            isRequired={true}
          />
          <CustomInput
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="menu name eg: soup"
            paddingLeft={"1rem"}
            isRequired={true}
          />

          <CustomInput
            type="text"
            name="type"
            value={type}
            onChange={handleChange}
            placeholder="menu type eg: egbusi soup"
            paddingLeft={"1rem"}
            isRequired={true}
          />

          <textarea
            type="text"
            name="desc"
            value={desc}
            onChange={handleChange}
            placeholder="tell the client about the food"
            required={true}
          ></textarea>

          <CustomInput
            type="text"
            name="price"
            value={price}
            onChange={handleChange}
            placeholder="menu price eg: 1000"
            paddingLeft={"1rem"}
            isRequired={true}
          />

          <CustomInput
            type="text"
            name="discount"
            value={discount}
            onChange={handleChange}
            placeholder="discount eg: 50"
            paddingLeft={"1rem"}
          />

          <CustomInput
            type="text"
            name="readyMeal"
            list="readyMeal"
            value={readyMeal}
            onChange={handleChange}
            placeholder="set if the meal is ready"
            paddingLeft={"1rem"}
            isRequired={true}
          />

          <CustomInput
            type="text"
            name="offers"
            list="offer"
            value={offers}
            onChange={handleChange}
            placeholder="set if the meal comes with a discount"
            paddingLeft={"1rem"}
            isRequired={true}
          />
          <CustomInput
            type="file"
            value={images}
            name="file"
            accept="image/*"
            onChange={handleFileChange}
            placeholder="menu image"
            paddingLeft={"1rem"}
            isRequired={true}
          />
          {/* dropdown for ready meal */}
          <datalist id="readyMeal">
            <option value="true" />
            <option value="false" />
          </datalist>

          {/* dropdown for offers */}
          <datalist id="offer">
            <option value="true" />
            <option value="false" />
          </datalist>
        </form>

        <CustomButton text={"submit"} click={handleSubmitMenu} />

        <CustomButton
          text={"cancel"}
          click={() =>
            setState((data) => ({
              ...data,
              addMenuModal: false,
            }))
          }
        />
      </Modal>
    </div>
  );
};

export default AddMenuModal;
