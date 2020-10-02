import React, { Component } from 'react';
import styled from 'styled-components';

export default class TestBodyTitle extends Component {
  render() {
    return (
      <PStyle>See what our clients have to say about Think-Spice Foods</PStyle>
    )
  }
}

const PStyle = styled.h4`
  color: #333333;
  margin: 60px;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 10px;
  }
`;

