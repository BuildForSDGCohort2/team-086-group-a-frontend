import React from "react";
import Report1 from "./Report1";
import Report2 from "./Report2";
import styled from "styled-components";

export default class Report extends React.Component {
  render() {
    return (
      <div className="col-lg-4 col-md-12">
        <PStyle>Report</PStyle>
        <Report1 />
        <Report2 />
      </div>
    );
  }
}
const PStyle = styled.p`
 font-size: 2rem;
`;


