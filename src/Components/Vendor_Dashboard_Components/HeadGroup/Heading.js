import React from 'react';
import styled from 'styled-components';

export default class Heading extends React.Component {
  render() {
    return (
      <div>
        <H1Style>VENDOR DASHBOARD</H1Style>
      </div>
    )
  }
}
const H1Style = styled.h1`
  border-left: 15px solid #f96058;
  margin: 60px;
  margin-left: 0;
  padding-left: 30px;
  line-height: 1.5;
  font-size: 2.5rem;
  font-weight: bold;
  color: #33394b;
  @media screen and (max-width: 780px) {
      border-left: 10px solid #f96058;
      margin: 20px;
      margin-left: 0;
      padding-left: 10px;
      line-height: 1.5;
      font-size: 1.5rem;
      font-weight: bold;
      color: #33394b;
    }
  
`;

