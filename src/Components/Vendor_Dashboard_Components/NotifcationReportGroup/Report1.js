import React from 'react';
import RoundRainbow from '../../../Asset/rainbow_ring.png';


export default class Report1 extends React.Component {
  render() {
    return (
      <div>

        <div>
          <div>
            <p>TOTAL deliveries</p>
            <h3>1200</h3>
          </div>
          <div>
            <span><i class="fad fa-truck-container"></i></span>
          </div>
        </div>

        <div>
          <div>
            <span>Payment Method</span>
            <span><i class="fad fa-sync"></i></span>
          </div>
          <div>
            <div>
              <img src={RoundRainbow} alt="round ring" />
            </div>

            <div>
              <div>
                <ul>
                  <li><i class="fas fa-exchange-alt"></i></li>
                  <li><i class="fas fa-university"></i></li>
                </ul>
              </div>
              <div></div>
              <div></div>
            </div>

            <div></div>
          </div>

          <div></div>
        </div>
      </div>
    )
  }
}

