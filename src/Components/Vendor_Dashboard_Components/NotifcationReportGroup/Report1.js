import React from 'react';
import styled from 'styled-components';


export default class Report1 extends React.Component {
  render() {
    return (
      <Div>
        <div>
          <div>
            <p>TOTAL deliveries</p>
            <h3>1200</h3>
          </div>

          <div>
            <span><i className="fad fa-truck-container"></i></span>
          </div>
        </div>

        <div>
          <span><i className="fas fa-caret-up"></i> 16% Since last month</span>
        </div>
      </Div>
    )
  }
}

const Div = styled.div`
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 0 40px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

