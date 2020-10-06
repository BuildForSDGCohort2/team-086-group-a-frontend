import React from "react";
import styled from "styled-components";

export default class Report1 extends React.Component {
  render() {
    return (
      <ParntDiv>
        <Div1>
          <div>
            <div>
              <p>TOTAL deliveries</p>
              <p>1200</p>
            </div>
          </div>

          <div>
            <span>
              <i className="fas fa-caret-up"></i> 16% Since last month
            </span>
          </div>
        </Div1>
        <Div2>
          <Span>
          <i className="fas fa-truck-pickup"></i>
          </Span>
        </Div2>
      </ParntDiv>
    );
  }
}

const Div1 = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Div2 = styled.div`
  width: 50px;
  line-height: 46px;
  text-align: center;
  background-color: #f96058;
  border: 2px solid black;
  border-radius: 100%;
`;
const ParntDiv = styled.div`
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 0 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Span = styled.span`
  color: black;
`;
