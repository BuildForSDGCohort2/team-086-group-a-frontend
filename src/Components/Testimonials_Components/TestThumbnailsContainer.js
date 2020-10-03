import React from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail';

export default class TestThumbnailsContainer extends React.Component {
  render() {
    return (
      <>
        <DivStyle className="">
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </DivStyle>
        <BottomText>Get your meal today</BottomText>
      </>
    );
  }
}
const DivStyle = styled.div`
  background-color: #eee;
  width: 90%;
  margin: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 10px;
    width: 100%;
  }
`;
const BottomText = styled.h5`
  color: #f96058;
  font-weight: bolder;
`;
//#f96058
