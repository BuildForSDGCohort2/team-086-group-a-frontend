import React from "react";
import Logo from "../../../Asset/android-chrome-192x192.png";
import styled from "styled-components";

export default class Notification1 extends React.Component {
  render() {
    return (
      <ParentDiv className="container">
        <ChildDive>
          <InnerDiv>
            <DotAndImg>
              <RedDot>
                <i className="fas fa-circle"></i>
              </RedDot>
              <ImageSpan>
                <ImgStyle src={Logo} alt="brand" />
              </ImageSpan>
            </DotAndImg>
            <Small>
              <span>You have a new message</span>
            </Small>
            <Small>
              <span>8:45pm</span>
            </Small>
          </InnerDiv>
        </ChildDive>

        <ChildDive>
          <InnerDiv>
            <DotAndImg>
              <RedDot>
                <i className="fas fa-cog"></i>
              </RedDot>
              <CogSpan>
                <i className="fas fa-cog"></i>
              </CogSpan>
            </DotAndImg>
            <Small>
              <span>New customer registered</span>
            </Small>
            <Small>
              <span>1 hour ago</span>
            </Small>
          </InnerDiv>
        </ChildDive>

        <ChildDive>
          <InnerDiv>
            <DotAndImg>
              <GrayDot>
                <i className="fas fa-circle"></i>
              </GrayDot>
              <Span>15% OFF</Span>
            </DotAndImg>
            <Small>
              <span>15% promo ends today</span>
            </Small>
            <Small>
              <span>3 hours ago</span>
            </Small>
          </InnerDiv>
        </ChildDive>

        <ChildDive>
          <InnerDiv>
            <DotAndImg>
              <GrayDot>
                <i className="fas fa-circle"></i>
              </GrayDot>
              <Span>
                <i className="fas fa-adjust"></i>
              </Span>
            </DotAndImg>
            <Small>
              <span>Your weekly ratings are ready</span>
            </Small>
            <Small>
              <span>3 hours ago</span>
            </Small>
          </InnerDiv>
        </ChildDive>
        <Learn>Load More...</Learn>
      </ParentDiv>
    );
  }
}

const ParentDiv = styled.div`
  background-color: #f4f4f4;
  border: 1px solid #eaeaea;
  border-radius: 2%;
  margin-left: 0;
  display: flex;
  flex-direction: column;
`;

const ChildDive = styled.div`
  height: 50px;
  padding: 5px 10px;
  background-color: white;
  margin: 10px 5px;
  box-shadow: 0 0 30px #ddd;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const ImgStyle = styled.img`
  width: 30px;
  height: 30px;
`;

const CogSpan = styled.div`
  color: #f96058;
  font-size: 2rem;
`;

const ImageSpan = styled.span`
  display: block;
  border-radius: 100%;
  background-color: #f96058;
`;

const Span = styled.span`
  display: inline-block;
  height: 30px;
  padding: 10px 0 0 0;
  max-heigh: 35px;
  width: 30px;
  text-align: center;
  border-radius: 100%;
  font-size: 0.3rem;
  background-color: #b5b5b5;
`;

const RedDot = styled.i`
  margin-right: 5px;
  display: block;
  font-size: 0.5rem;
  color: #f96058;
`;
const GrayDot = styled.i`
  font-size: 0.5rem;
  margin-right: 5px;
  color: #b5b5b5;
`;

const InnerDiv = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Learn = styled.div`
  text-align: right;
  color: #f96058;
  margin: 10px 0;
  padding-right: 10px;
  font-size: 1rem;
`;

const DotAndImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 10%;
`;

const Small = styled.span`
  font-size: 10px;
`;
