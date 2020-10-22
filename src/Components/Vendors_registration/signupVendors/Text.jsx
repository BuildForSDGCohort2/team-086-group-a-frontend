import React from "react";
import TextStyle from "../../../Styles/Vendor_registration/Text.module.css";
const Text = () => {
  const { container, text } = TextStyle;
  return (
    <div className={container}>
      <span className={text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        tenetur rem neque, tempora soluta atque saepe autem quod provident
        corporis eligendi totam explicabo deleniti, aliquid odit, inventore
        aperiam? Nesciunt, nihil?
      </span>
    </div>
  );
};

export default Text;
