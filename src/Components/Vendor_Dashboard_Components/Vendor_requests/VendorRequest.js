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

  const CategoryDropDownComponent = () => {
    const categoryRequests = ["add category", "update category"];

    return setState((datas) => ({
      ...datas,
      vendorOptionsRequest: categoryRequests,
    }));
  };

  const MenuDropDownComponent = () => {
    const menuRequests = ["add menu", "update menu", "remove menu"];

    return setState((datas) => ({
      ...datas,
      vendorOptionsRequest: menuRequests,
    }));
  };

  const removeStateLists = () =>
    setState((datas) => ({
      ...datas,
      vendorOptionsRequest: [],
    }));

  const displayCategoryModal = () => {
    return setState((datas) => ({
      ...datas,
      categoryModal: true,
    }));
  };

  const requestClick = ({ target }) => {
    console.log("target.va;ie", target.innerText);
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
