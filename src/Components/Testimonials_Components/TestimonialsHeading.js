import React from "react";
import styled from "styled-components";

export default class TestimonialsHeading extends React.Component {
  render() {
    return <Heading1>TESTIMONIALS</Heading1>;
  }
}
const Heading1 = styled.h1`
  border-left: 15px solid #f96058;
  margin: 60px;
  padding-left: 30px;
  line-height: 1.5;
  font-size: 2.5rem;
  font-weight: bold;
  color: #33394b;
  @media (max-width: 768px) {
    border-left: 10px solid #f96058;
    margin: 20px;
    margin-left: 10px;
    padding-left: 10px;
    line-height: 1.2;
    font-size: 1.8rem;
    font-weight: bold;
    color: #33394b;
  }
`;
//#f96058
