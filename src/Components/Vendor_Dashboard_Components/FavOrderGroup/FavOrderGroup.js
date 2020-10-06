import React from "react";
import FavOrder1 from "./FavOrder1";
import FavOrder2 from "./FavOrder2";
import FavOrder3 from "./FavOrder3";
import styled from "styled-components";

export default class FavOrderGroup extends React.Component {
  render() {
    return (
      <Div className="mt-5">
        <H1>Favourite Orders</H1>
        <FlexDiv className="d-flex row mb-5">
          <FavOrder1 />
          <FavOrder2 />
          <FavOrder3 />
        </FlexDiv>
      </Div>
    );
  }
}

const Div = styled.div`
  width: 100%;
`;
const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const H1 = styled.h1`
  font-weight: bolder;
  font-size: 2rem;
`;
