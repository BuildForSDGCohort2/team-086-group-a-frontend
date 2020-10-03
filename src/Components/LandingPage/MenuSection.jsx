import React, { useContext } from "react";
import { NonRegisterContextMembers } from "../../Context/NonRegisteredMemberContext";
import CustomImage from "../../Common/Image.component/Image.jsx";
import MenuStyles from "../../Styles/LandingPageStyles/Menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Menu = () => {
  const [state] = useContext(NonRegisterContextMembers);
  const { collection } = state;
  const { menus } = collection;
  const {
    section,
    CategoryWrapper,
    CategoryName,
    tag,
    cat,
    menuWrapper,
    contentWrapper,
    imgField,
    subCategory,
    subCat,
    img,
    itemCaption,
    more,
    moreWrapper,
  } = MenuStyles;

  return (
    <section className={section}>
      <div className={CategoryWrapper}>
        <div className={CategoryName}>
          <div className={tag}></div>
          <div className={cat}>
            <h2>menu</h2>
          </div>
        </div>
      </div>
      <div className={menuWrapper}>
        {menus &&
          menus.map(({ category, image, name, price, _id }) => (
            <div key={_id} className={contentWrapper}>
              <fieldset className={imgField}>
                <div className={subCategory}>
                  <h3 className={subCat}>{category}</h3>
                </div>
                <CustomImage src={image} alt={"food display"} className={img} />
              </fieldset>
              <figcaption className={itemCaption}>
                <h3>{name}</h3>
                <span>${price}</span>
              </figcaption>
            </div>
          ))}
      </div>
      <div className={more}>
        <div className={moreWrapper}>
          <span>more</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </section>
  );
};

export default Menu;
