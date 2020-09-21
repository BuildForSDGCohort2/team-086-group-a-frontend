import React from 'react';
import Logo from '../../../Asset/logo.png';

export default class Notification1 extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <div><i className="fas fa-circle"></i></div>
            <div><img style={{backgroundColor: "red"}} src={Logo} alt="brand" /></div>
            <div><span>You have a new message</span></div>
            <div><span>8:45pm</span></div>
          </div>
        </div>
        <div>
          <div>
            <div><i className="fas fa-circle"></i></div>
            <div><span><i className="far fa-cog"></i></span></div>
            <div><span>New customer registered</span></div>
            <div><span>1 hour ago</span></div>
          </div>
        </div>
        <div>
          <div>
            <div><i className="fas fa-circle"></i></div>
            <div><span>15% OFF</span></div>
            <div><span>15% promo ends today</span></div>
            <div><span>3 hours ago</span></div>
          </div>
        </div>
        <div>
          <div>
            <div><i className="fas fa-circle"></i></div>
            <div><span><i className="fad fa-star"></i></span></div>
            <div><span>Your weekly ratings are ready</span></div>
            <div><span>3 hours ago</span></div>
          </div>
        </div>
        <div><span>Load More...</span></div>
      </div>
    )
  }
}

