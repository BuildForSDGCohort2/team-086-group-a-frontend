import React, { useEffect, useContext, useState } from "react";

import Axios from "axios";

import CustomInput from "../../../../Common/Input.component/Input";

import CustomButton from "../../../../Common/Button.component/Button";

import CustomHeader from "../../../../Common/Header.Component/Header";

import CustomFooter from "../../../../Common/Footer.component/Footer";

import { RegisterContextMembers } from "../../../../Context/RegisteredMemberContext";

const DisplaySpecifiedVendorMenu = () => {
  const { REACT_APP_ENDPOINT } = process.env;
  const [state, setState] = useContext(RegisterContextMembers);

  const { vendorMenus } = state;

  const { headerNavLinksRegCollections } = state;

  const [type, setSearchMenu] = useState("");

  const [page, handleMenuPage] = useState("");

  const [limit, handleMenuLimit] = useState("");

  const [menuCount, setMenuCount] = useState("");

  const [menuPage, setMenuPage] = useState("");

  const handleSubmitMenuQuery = async (e) => {
    e.preventDefault();

    await Axios.get(
      `${REACT_APP_ENDPOINT}/api/v1/dashboard/vendor/menu_type/${type}`,
      {
        "content-Type": "application/json",
        withCredentials: true,
      }
    )
      .then((res) => {
        return console.log("res.data", res.data);
      })
      .catch((error) => {
        if (error.response === undefined) {
          return false;
        }
        return console.log(
          "error.response.data.message",
          error.response.data.message
        );
      });
  };

  useEffect(() => {
    const fetchVendorMenu = async () => {
      await Axios.get(
        `${REACT_APP_ENDPOINT}/api/v1/dashboard/vendor/getallmenu/?page=${page}&limit=${limit}`,
        {
          "content-Type": "application/json",
          withCredentials: true,
        }
      )
        .then((res) => {
          console.log("res.data", res.data);
          setState((datas) => ({
            ...datas,
            vendorMenus: res.data.data,
          }));

          setMenuCount(res.data.count);
          setMenuPage(res.data.page);
        })
        .catch((error) => {
          if (error.response === undefined) {
            return false;
          }
          return console.log(
            "error.response.data.message",
            error.response.data.message
          );
        });
    };
    fetchVendorMenu();
  }, [REACT_APP_ENDPOINT, limit, setState, page]);
  return (
    <div>
      <CustomHeader headerNavLinks={headerNavLinksRegCollections} />
      <form onSubmit={handleSubmitMenuQuery}>
        <CustomInput
          type={"text"}
          placeholder={"search for menu"}
          name={"searchMenu"}
          isRequired={true}
          value={type}
          onChange={(e) => setSearchMenu(e.target.value)}
        />
        <CustomButton text="display menus" />
        <div>
          total page:{menuPage}
          <CustomInput
            type="text"
            value={page}
            onChange={(e) => handleMenuPage(e.target.value)}
            width={"50px"}
            list="page"
          />
          <datalist id="page"></datalist>
        </div>

        <div>
          total count: {menuCount}
          <CustomInput
            type="text"
            value={limit}
            onChange={(e) => handleMenuLimit(e.target.value)}
            width={"50px"}
            list="limit"
          />
          <datalist id="limit"></datalist>
        </div>
      </form>
      <CustomFooter />
    </div>
  );
};

export default DisplaySpecifiedVendorMenu;
