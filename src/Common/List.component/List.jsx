import React from "react";
import listStyles from "./List.module.css";
const Lists = ({ className, color, text, paddingTop, marginTop, click }) => {
  const { list } = { listStyles };
  return (
    <li
      className={className ? className : list}
      style={{
        color: color ? color : "#000",
        paddingTop: paddingTop ? paddingTop : "",
        marginTop: marginTop ? marginTop : "10px",
      }}
      onClick={click ? click : null}
    >
      {text}
    </li>
  );
};
export default Lists;
