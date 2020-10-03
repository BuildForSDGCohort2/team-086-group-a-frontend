import React, { Component } from 'react';
import styled from 'styled-components';

export default class ClientDetails extends Component {
  render() {
    return (
      <div>
        <H4>Henry KC</H4>
        <h5>Software Engr.</h5>
      </div>
    )
  }
}

const H4 = styled.h4`
  color: #333333;
  margin-top: 40px;
  margin-bottom: 0;
`;

