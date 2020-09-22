import React from 'react';
import RoundRainbow from '../../../Asset/rainbow_ring.png';

export default class Report2 extends React.Component {
  render() {
    return (
      <div>
          <div>
            <span>Payment Method</span>
            <span><i className="far fa-sync-alt"></i></span>
          </div>

          <div>
            <div>
              <img src={RoundRainbow} alt="round ring" />
            </div>

            <div>
              <div>
                <ul>
                  <li><i className="fas fa-exchange-alt"></i></li>
                  <li><i className="fas fa-university"></i></li>
                </ul>
              </div>

              <div>Cash</div>

              <div>
                <ul>
                  <li><i className="fal fa-mobile-android"></i></li>
                  <li>Mobile</li>
                </ul>
              </div>

              <div>
                <div>68%</div>
                <div>10%</div>
                <div>22%</div>
              </div>
            </div>
          </div>

          <div>
            <span>Last 7 days <i className="fas fa-caret-right"></i></span>
            <span>List <i className="fas fa-caret-right"></i></span>
          </div>
      </div>
    )
  }
}

