import React from 'react';
import Gokada from '../../../Asset/Gokada_logo.png';
import MaxNG from '../../../Asset/max_ng.jpg';
import styled from 'styled-components';


export default class Notification2 extends React.Component {
  render() {
    return (
      <ParentDiv>
        <Div>
          <Image src={Gokada} alt="Gokada" />
          <h3>GOKADA</h3>
          <p>The largest last mile delivery service in nigeria. 
            Quality drivers. Affordable prices. Tracking</p>
        </Div>
        <Div>
          <Image src={MaxNG} alt="Max.NG" />
          <h3>MAX.NG</h3>
          <p>Beat traffic with a safe and affordable transport and
             delivery service on a safe and affordable Okada.</p>
        </Div>
      </ParentDiv>
    )
  }
}

const ParentDiv = styled.div`
  border: 2px solid #ccc;
  border-radius: 10px;
  width: 95%;
  margin: 30px 0;
  padding: 30px 0;
  font-size: 2rem;
  text-align: center;
`;

const Div = styled.div`
  border-right: 1px solid #bbb;
  border-left: 1px solid #bbb;
  margin-right: 10px;
  display: inline-block;
  text-align: center;
  min-width: 250px;
  max-width: 300px;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
`;

