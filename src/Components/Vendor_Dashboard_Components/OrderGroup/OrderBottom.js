import React from "react";
import styled from "styled-components";
import OrderBottomStyle from "./OrderTop.module.css";

export default class OrderBottom extends React.Component {
  render() {
    const {alignRight} = OrderBottomStyle;
    return (
      <Div className={alignRight}>
        <p>Rows per page:</p>
        <select name="pages">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <p><span>1-5</span> of <span>100</span> <span>&lt;</span> <span>&gt;</span></p>
        
      </Div>
    );
  }
}

const Div = styled.div`
  text-align: right;
`;

