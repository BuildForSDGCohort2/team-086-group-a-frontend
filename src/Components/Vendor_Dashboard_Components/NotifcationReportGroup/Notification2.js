import React from 'react';
import Gokada from '../../../Asset/Gokada_logo.png';
import MaxNG from '../../../Asset/max_ng.jpg';

export default class Notification2 extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={Gokada} alt="Gokada" />
          <h3>GOKADA</h3>
          <p>The largest last mile delivery service in nigeria. 
            Quality drivers. Affordable prices. Tracking</p>
        </div>
        <div>
          <img src={MaxNG} alt="Max.NG" />
          <h3>MAX.NG</h3>
          <p>Beat traffic with a safe and affordable transport and
             delivery service on a safe and affordable Okada.</p>
        </div>
      </div>
    )
  }
}

