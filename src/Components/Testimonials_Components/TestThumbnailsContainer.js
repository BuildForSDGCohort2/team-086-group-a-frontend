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
        <BottomText>Get your meal today</BottomText></>
    );
  }
}
const DivStyle = styled.div`
  background-color: #eee;
  width: 70%;
  margin: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const BottomText = styled.h5`
  color: #f96058;
  font-weight: bolder;
`;
//#f96058
