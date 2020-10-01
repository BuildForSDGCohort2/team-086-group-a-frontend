import React from 'react';
import Logo from '../../../Asset/logo.png';
import styled from 'styled-components';

export default class Notification1 extends React.Component {
  render() {
    return (
      <ParentDiv className="container">
        <ChildDive>
          <InnerDiv>
            <RedDot><i className="fas fa-circle"></i></RedDot>
            <ImageSpan><ImgStyle src={Logo} alt="brand" /></ImageSpan>
            <span><span>You have a new message</span></span>
            <FloatRightSpan><span>8:45pm</span></FloatRightSpan>
          </InnerDiv>
        </ChildDive>

        <ChildDive>
          <InnerDiv>
            <RedDot><i class="fas fa-cog"></i></RedDot>
            <span><CogSpan><i className="fas fa-cog"></i></CogSpan></span>
            <span><span>New customer registered</span></span>
            <FloatRightSpan><span>1 hour ago</span></FloatRightSpan>
          </InnerDiv>
        </ChildDive>

        <ChildDive>
          <InnerDiv>
            <span><i className="fas fa-circle"></i></span>
            <span><span>15% OFF</span></span>
            <span><span>15% promo ends today</span></span>
            <FloatRightSpan><span>3 hours ago</span></FloatRightSpan>
          </InnerDiv>
        </ChildDive>
        
        <ChildDive>
          <InnerDiv>
            <span><i className="fas fa-circle"></i></span>
            <span><span><i className="fad fa-star"></i></span></span>
            <span><span>Your weekly ratings are ready</span></span>
            <FloatRightSpan><span>3 hours ago</span></FloatRightSpan>
          </InnerDiv>
        </ChildDive>
        <span><span>Load More...</span></span>
      </ParentDiv>
    )
  }
}

const ParentDiv = styled.div`
  background-color: #f4f4f4;
  border: 1px solid #eaeaea;
  border-radius: 2%;
  width: 95%;
  margin-left: 0;
`;

const ChildDive = styled.div`
  height: 60px;
  padding: 10px 20px;
  background-color: white;
  margin: 20px 10px;
  box-shadow: 0 0 30px #ddd;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const ImgStyle = styled.img`
  width: 50px;
  height: 50px;
`;

const CogSpan = styled.span`
  color: #f96058;
  font-size: 2.5rem;
`;

const ImageSpan = styled.span`
  display: inline-block;
  border-radius: 100%;
  background-color: #f96058;
  margin: 0 40px 0 20px;
`;

const RedDot = styled.i`
  font-size: 0.5rem;
  color:  #f96058;
`;

const FloatRightSpan = styled.span`
  display: inline-block;
  font-size: 12px;
  float: right;
`;

const InnerDiv = styled.div`
  width: 100%;
`;

