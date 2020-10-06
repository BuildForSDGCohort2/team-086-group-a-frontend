import React from "react";
import OrderTop from "./OrderTop";
import OrderTable from "./OrderTable";
import OrderBottom from "./OrderBottom";

export default class Orders extends React.Component {
  render() {
    return (
      <div>
        <OrderTop />
        <OrderTable />
        <OrderBottom />
      </div>
    );
  }
}

