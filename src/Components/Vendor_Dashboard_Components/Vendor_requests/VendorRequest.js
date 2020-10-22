import React, { useContext } from "react";
import CustomInput from "../../../Common/Input.component/Input";
import { RegisterContextMembers } from "../../../Context/RegisteredMemberContext";
import CustomList from "../../../Common/List.component/List";
import styled from "styled-components";
import CategoryModel from "./CategoryModel";

const VendorRequest = () => {
  const requestList = ["category", "menu"];
  const [state, setState] = useContext(RegisterContextMembers);
  const { vendorRequestDropDown, vendorOptionsRequest } = state;

  //handling the vendor request
  const handleRequestchange = ({ target }) => {
    setState((datas) => ({
      ...datas,
      vendorRequestDropDown: target.value,
    }));

    switch (target.value.toLowerCase()) {
      case "category":
        CategoryDropDownComponent();
        break;

      case "menu":
        MenuDropDownComponent();
        break;

      case "":
        removeStateLists();
        break;

      default:
        break;
    }
  };

  //handling the vendor category request
  const CategoryDropDownComponent = () => {
    const categoryRequests = ["add category", "update category"];

    return setState((datas) => ({
      ...datas,
      vendorOptionsRequest: categoryRequests,
    }));
  };

  //handling the vendor menu request
  const MenuDropDownComponent = () => {
    const menuRequests = ["add menu", "update menu", "remove menu"];

    return setState((datas) => ({
      ...datas,
      vendorOptionsRequest: menuRequests,
    }));
  };

  //removing the vendor request option
  const removeStateLists = () =>
    setState((datas) => ({
      ...datas,
      vendorOptionsRequest: [],
    }));

  //displayed the category request modal for category actions
  const displayCategoryModal = () => {
    return setState((datas) => ({
      ...datas,
      categoryModal: true,
    }));
  };

  //handling the request options click
  const requestClick = ({ target }) => {
    //handling the vendor request actions
    switch (target.innerText.toLowerCase()) {
      case "add category":
        displayCategoryModal();
        break;

      default:
        break;
    }
  };
  return (
    <Container>
      <form>
        <CustomInput
          type="text"
          list="requests"
          value={vendorRequestDropDown}
          onChange={handleRequestchange}
          placeholder={"make some changes"}
          paddingLeft="1rem"
        />
        <datalist id="requests">
          {requestList &&
            requestList.map((values, index) => {
              return <option key={index} value={values.toUpperCase()} />;
            })}
        </datalist>
      </form>

      <div>
        <ul>
          {vendorOptionsRequest &&
            vendorOptionsRequest.map((requests, index) => (
              <CustomList
                text={requests}
                key={index}
                click={requestClick}
                cursor={"pointer"}
                listStyle={"none"}
                textTransform={"capitalize"}
              />
            ))}
        </ul>
      </div>
      <CategoryModel />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 3em;
`;

export default VendorRequest;
