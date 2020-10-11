import React from 'react';
import styled from 'styled-components';
export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <WelcomeStyle>Welcome!</WelcomeStyle>
      </div>
    )
  }
}

const WelcomeStyle = styled.h2`
  text-align: center;
  font-weight: 900;
  font-size: 3rem;
  margin-bottom: 50px;
`;

