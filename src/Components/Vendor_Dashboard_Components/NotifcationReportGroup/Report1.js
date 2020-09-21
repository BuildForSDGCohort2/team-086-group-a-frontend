import React from 'react';


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
            <span><i className="fad fa-truck-container"></i></span>
          </div>
        </div>

        <div>
          <span><i className="fas fa-caret-up"></i> 16% Since last month</span>
        </div>
      </div>
    )
  }
}

