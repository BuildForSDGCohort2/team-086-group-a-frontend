import React, { useContext } from "react";
import { RegisterContextMembers } from "../../Context/RegisteredMemberContext";
import CustomList from "../../Common/List.component/List";
import CustomImage from "../../Common/Image.component/Image";
import AvaliableMenuStyles from "../../Styles/MenuPageStyles/AvaliableMenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
const AvaliableMenu = () => {
  const {
    container,
    wrapper,
    sectionOne,
    sectionTwo,
    aside,
    avMenu,
    checkIcon,
    display,
    list,
    category,
    menuDisplay,
    menuImage,
    menuCaption,
    captionsWrapper,
    addCart,
  } = AvaliableMenuStyles;
  const [state, setState] = useContext(RegisterContextMembers);
  const { collection, specifiedFood } = state;
  const { availableFood, categories } = collection;

  const handleListClick = ({ target }) => {
    let response =
      availableFood &&
      availableFood
        .filter((foodName) => foodName.name === target.innerText.toLowerCase())
        .filter((v, i) => i <= 1);
    setState((data) => ({
      ...data,
      specifiedFood: response,
    }));
  };

  return (
    <section className={container}>
      <div className={wrapper}>
        <div className={sectionOne}>
          <aside className={aside}>
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
          </aside>
          <div className={display}>
            {handleListClick && specifiedFood.length > 0 ? (
              specifiedFood.map(({ image, type, desc, price }, index) => (
                <fieldset key={index} className={menuDisplay}>
                  <CustomImage
                    src={image}
                    alt="food display"
                    className={menuImage}
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

        <div className={sectionTwo}>
          <aside className={aside}>
            <div className={avMenu}>
              <h3>filters</h3>
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
          </aside>
          <div className={display}>
            {handleListClick && specifiedFood.length > 0 ? (
              specifiedFood.map(({ image, type, desc, price }, index) => (
                <fieldset key={index} className={menuDisplay}>
                  <CustomImage
                    src={image}
                    alt="food display"
                    className={menuImage}
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

export default AvaliableMenu;
