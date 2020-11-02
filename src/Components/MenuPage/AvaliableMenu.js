import React, { useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { RegisterContextMembers } from "../../Context/RegisteredMemberContext";
import CustomList from "../../Common/List.component/List";
import CustomImage from "../../Common/Image.component/Image";
import AvailableMenuStyles from "../../Styles/MenuPageStyles/AvaliableMenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faLongArrowAltRight,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { errorToastify } from "../react_toastify/toastify";

const AvaliableMenu = ({ match }) => {
  const {
    container,
    wrapper,
    sectionOne,
    aside,
    asideOne,
    asideTwo,
    avMenu,
    checkIcon,
    display,
    list,
    category,
    menuDisplay,
    menuImage,
    caretAngle,
    menuCaption,
    captionsWrapper,
    addCart,
    DropDowns,
    catWrapper,
    filterCategoryList,
    nameWrapper,
    secNameWrapper,
    trailingLine,
    filterCat,
    brandWrapper,
    brand,
    brandLists,
  } = AvailableMenuStyles;
  const [state, setState] = useContext(RegisterContextMembers);
  const {
    specifiedFood,
    categories,
    brandNames,
    availableMenu,
    filters,
  } = state;

  const { category: filterCategory } = filters;
  const { REACT_APP_ENDPOINT } = process.env;

  const handleListClick = ({ target }) => {
    //fetch the categories that match the menu been clicked
    let response =
      availableMenu &&
      availableMenu
        .filter((foodName) => foodName.name === target.innerText.toLowerCase())
        .filter((v, i) => i <= 6);
    setState((data) => ({
      ...data,
      specifiedFood: response,
    }));
  };

  const handleBrandNameClick = async ({ target }) => {
    //fetch the menu and the category of the brandname that was click
    // set it the state to replace the previous state values

    await axios
      .get(
        `${REACT_APP_ENDPOINT}/api/v1/dashboard/user/one_category/${target.innerText.toLowerCase()}`,
        {
          "Content-Type": "application/json",
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log("res.data.data", res.data.data);
        setState((datas) => ({
          ...datas,
          categories: res.data.data,
        }));
      })
      .catch((err) => {
        if (err.response === undefined) {
          return;
        }

        return errorToastify(err.response.data.message);
      });

    await axios
      .get(
        `${REACT_APP_ENDPOINT}api/v1/dashboard/user/one_menu/${target.innerText.toLowerCase()}`,
        {
          "Content-Type": "application/json",
          withCredentials: true,
        }
      )
      .then((res) => {
        setState((datas) => ({
          ...datas,
          availableMenu: res.data.data,
        }));
      })
      .catch((err) => {
        if (err.response === undefined) {
          return;
        }

        return errorToastify(err.response.data.message);
      });
  };

  useEffect(() => {
    //setting the available menu, brandName and categories to the state on didmount
    const availableMenu = async () => {
      await axios
        .get(`${REACT_APP_ENDPOINT}/api/v1/dashboard/user/category`, {
          "Content-Type": "application/json",
          withCredentials: true,
        })
        .then((res) => {
          setState((data) => ({
            ...data,
            categories: res.data.data[0],
          }));
        })
        .catch((error) => {
          if (error.response === undefined) {
            return;
          } else {
            return errorToastify(error.response.data.message);
          }
        });
    };
    availableMenu();

    const handlebrandsNames = async () => {
      //fetching the brandNames from the server
      await axios
        .get(`${REACT_APP_ENDPOINT}/api/v1/menu/all`, {
          "Content-Type": "application/json",
          withCredentials: true,
        })
        .then((res) => {
          setState((datas) => ({
            ...datas,
            brandNames: res.data.data,
          }));
        })
        .catch((err) => console.error(err.response));
    };
    handlebrandsNames();

    const handleMenu = async () => {
      //fetching the menu to be displayed on didmount
      await axios
        .get(`${REACT_APP_ENDPOINT}/api/v1/dashboard/user/menu/`, {
          "Content-Type": "application/json",
          withCredentials: true,
        })
        .then((res) => {
          setState((datas) => ({
            ...datas,
            availableMenu: res.data.data,
          }));
        })
        .catch((err) => errorToastify(err.response.data.message));
    };
    handleMenu();
  }, [setState, REACT_APP_ENDPOINT]);

  return (
    <section className={container}>
      <div className={wrapper}>
        <div className={sectionOne}>
          <aside className={aside}>
            <div className={asideOne}>
              <div className={avMenu}>
                <h3>available menu</h3>
                <FontAwesomeIcon icon={faCheckSquare} className={checkIcon} />
              </div>
              <ul className={list}>
                {categories.category &&
                  categories.category.map((categoriesList, index) => (
                    <CustomList
                      text={categoriesList}
                      key={index}
                      click={handleListClick}
                      className={category}
                    />
                  ))}
              </ul>
            </div>
            <div className={asideTwo}>
              <div className={avMenu}>
                <h3>filters</h3>
                <FontAwesomeIcon
                  icon={state.toggleMenuIcon ? faCaretDown : faCaretUp}
                  size="2x"
                  onClick={() =>
                    setState((data) => ({
                      ...data,
                      toggleMenuIcon: !state.toggleMenuIcon,
                    }))
                  }
                  className={checkIcon}
                />
              </div>
              <div className={DropDowns}>
                <div className={catWrapper}>
                  <div className={nameWrapper}>
                    <FontAwesomeIcon
                      icon={faLongArrowAltRight}
                      className={trailingLine}
                    />
                    <h3>category</h3>
                  </div>
                  <ul className={filterCategoryList}>
                    {filterCategory &&
                      filterCategory.map((categoriesList, index) => (
                        <CustomList
                          text={categoriesList}
                          key={index}
                          click={() => alert("filter has been clicked")}
                          className={filterCat}
                        />
                      ))}
                  </ul>
                </div>

                <div className={brandWrapper}>
                  <div className={secNameWrapper}>
                    <FontAwesomeIcon
                      icon={faLongArrowAltRight}
                      className={trailingLine}
                    />
                    <h3>brands</h3>
                  </div>
                  <ul className={brandLists}>
                    {brandNames &&
                      brandNames.map((categoriesList, index) => (
                        <CustomList
                          text={categoriesList}
                          key={index}
                          click={handleBrandNameClick}
                          className={brand}
                        />
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </aside>
          <div className={display}>
            {handleListClick && specifiedFood ? (
              specifiedFood.map(({ image, type, desc, price }, index) => (
                <fieldset key={index} className={menuDisplay}>
                  <CustomImage
                    src={image}
                    alt="food display"
                    className={menuImage}
                    icon={<div className={caretAngle}></div>}
                  />

                  <figcaption className={menuCaption}>
                    <div className={captionsWrapper}>
                      <h3>{type}</h3>
                      <p>{desc}</p>
                      <span>${price}</span>
                    </div>

                    <div className={addCart}>
                      <span>add to cart</span>
                    </div>
                  </figcaption>
                </fieldset>
              ))
            ) : (
              <div>
                <h2>sorry! food will soon be ready</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(AvaliableMenu);
