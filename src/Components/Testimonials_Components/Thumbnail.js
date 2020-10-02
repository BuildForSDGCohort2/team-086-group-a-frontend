import React from 'react';
import styled from 'styled-components';
import ClientDetails from './ClientDetails';
import Avatar from '../../Asset/preWed.png';

export default class Thumbnail extends React.Component {
  render() {
    return (
      <DivStyle className="col-lg-3 col-md-4">
        <Span1Style><i className="fas fa-quote-left"></i></Span1Style>
        <ImgStyle src={Avatar} alt="Aveteur"/>
        <PAfterImg>Lorem ipsum dolor sit, amet consectetur adipisicin</PAfterImg>
        <ClientDetails />
        <Span2Style>
          <i className="fas fa-quote-right"></i>
        </Span2Style>
      </DivStyle>
    );
  }
}
const ImgStyle = styled.img`
  clear: both;
  width: 30%;
  border-radius: 100%;
`;

const PAfterImg = styled.p`
  font-size: 1rem;
  margin-top: 40px;
`;
const DivStyle = styled.div`
  background-color: white;
  margin: 30px;
  box-shadow: 0 0 10px #ccc;
`;
const Span1Style = styled.p`
  color: #f96058;
  font-size: 1rem;
  text-align: left;
`;

const Span2Style = styled.p`
  color: #f96058;
  font-size: 1rem;
  float: right;
`;
//#f96058
