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
            <span>
              <span>You have a new message</span>
            </span>
            <span>
              <span>8:45pm</span>
            </span>
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
            <span>
              <span>New customer registered</span>
            </span>
            <span>
              <span>1 hour ago</span>
            </span>
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
            <span>
              <span>15% promo ends today</span>
            </span>
            <span>
              <span>3 hours ago</span>
            </span>
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
            <span>
              <span>Your weekly ratings are ready</span>
            </span>
            <span>
              <span>3 hours ago</span>
            </span>
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
  width: 95%;
  margin-left: 0;
  display: flex;
  flex-direction: column;
`;

const ChildDive = styled.div`
  height: 70px;
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

const CogSpan = styled.div`
  color: #f96058;
  font-size: 3.5rem;
`;

const ImageSpan = styled.span`
  display: block;
  border-radius: 100%;
  background-color: #f96058;
`;

const Span = styled.span`
  display: inline-block;
  width: 60px;
  text-align: center;
  color: white;
  line-height: 200%;
  font-size: 0.7rem;
  border-radius: 100%;
  background-color: #b5b5b5;
`;

const RedDot = styled.i`
  display: block;
  font-size: 0.5rem;
  color: #f96058;
`;
const GrayDot = styled.i`
  font-size: 0.5rem;
  color: #b5b5b5;
`;

const InnerDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Learn = styled.div`
  text-align: right;
  color: #f96058;
  margin: 20px 0;
  padding-right: 10px;
  font-size: 1.5rem;
`;

const DotAndImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 10%;
`;
