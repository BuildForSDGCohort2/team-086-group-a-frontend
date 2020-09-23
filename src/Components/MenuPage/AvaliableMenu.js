import React, { useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { RegisterContextMembers } from "../../Context/RegisteredMemberContext";
import CustomList from "../../Common/List.component/List";
import CustomImage from "../../Common/Image.component/Image";
import AvaliableMenuStyles from "../../Styles/MenuPageStyles/AvaliableMenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faLongArrowAltRight,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
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
  } = AvaliableMenuStyles;
  const [state, setState] = useContext(RegisterContextMembers);
  const { collection, specifiedFood } = state;
  const { availableFood, categories, filters } = collection;
  const { brands, category: filterCategory } = filters;

  const handleListClick = ({ target }) => {
    let response =
      availableFood &&
      availableFood
        .filter((foodName) => foodName.name === target.innerText.toLowerCase())
        .filter((v, i) => i <= 6);
    setState((data) => ({
      ...data,
      specifiedFood: response,
    }));
  };

  useEffect(() => {
    const displayReadyFood = () => {
      let response = availableFood && availableFood.filter((v, i) => i <= 1);
      setState((data) => ({
        ...data,
        specifiedFood: response,
      }));
    };
    displayReadyFood();
  }, [setState, availableFood]);

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
                {categories &&
                  categories.map((categoriesList, index) => (
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
                    {brands &&
                      brands.map((categoriesList, index) => (
                        <CustomList
                          text={categoriesList}
                          key={index}
                          click={() => alert("hello this is brands")}
                          className={brand}
                        />
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </aside>
          <div className={display}>
            {handleListClick && specifiedFood.length > 0 ? (
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
