import React from "react";
import Notification1 from "./Notification1";
import Notification2 from "./Notification2";
import styled from "styled-components";

export default class Notification extends React.Component {
  render() {
    return (
      <div className="col-lg-8">
        <PStyle>Notification</PStyle>
        <Notification1 />
        <Notification2 />
      </div>
    );
  }
}

const PStyle = styled.p`
 font-size: 2rem;
`;


