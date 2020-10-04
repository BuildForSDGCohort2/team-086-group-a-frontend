import React from "react";
import styled from 'styled-components';
import OrderTopStyle from './OrderTop.module.css';

export default class OrderTop extends React.Component {
  render() {
    const {bold} = OrderTopStyle;
    return (
      <Div>
        <div>
          <MargRight className={bold}>Orders</MargRight>
          <MargLeft>1200 total</MargLeft>
        </div>
        <div>
          <MargLeft className={bold}>Sort by:</MargLeft>
          <MargLeftSel className={bold} name="orders">
            <option value="newest" selected="selected">
              Newest
            </option>
            <option value="oldest">Oldest</option>
            <option value="weekend">Weekend</option>
            <option value="weekdays">Weekdays</option>
          </MargLeftSel>
          <MargLeft className={bold}>
            <button className={bold}>DELIVERY</button>
          </MargLeft>
        </div>
      </Div>
    );
  }
}

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MargRight = styled.div`
  display: inline-block;
  margin-right: 30px;
`;

const MargLeft = styled.div`
  display: inline-block;
  margin-left: 30px;
`;
const MargLeftSel = styled.select`
  display: inline-block;
`;

