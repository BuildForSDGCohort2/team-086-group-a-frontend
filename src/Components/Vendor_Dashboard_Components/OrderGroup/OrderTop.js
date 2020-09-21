import React from 'react';


export default class OrderTop extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>Orders</li>
          <li>1200 total</li>
          <li>Sort by:</li>
          <select name="orders">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="weekend">Weekend</option>
            <option value="weekdays">Weekdays</option>
          </select>
          <li>
            <button>DELIVERY</button>
          </li>
        </ul>
      </div>
    )
  }
}

