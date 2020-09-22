import React from 'react';
import TopImg from '../../../Asset/DASHBOARD.svg';
import styled from 'styled-components';

export default class Img extends React.Component {
  render() {
    return (
      <div>
        <ImgStyle src={TopImg} alt="Cool Restaurant" />
      </div>
    )
  }
}
const ImgStyle = styled.img`
  width: 100%;
`;



