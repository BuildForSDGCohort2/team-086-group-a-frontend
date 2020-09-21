import React from 'react';
import Soup2 from '../../../Asset/soup2.png';

export default class FavOrder1 extends React.Component {
  render() {
    return (
      <div>
        <img src={Soup2} alt="soup" />
        <h3>Fish Soup with Garlic</h3>
        <button>View</button>
      </div>
    )
  }
}

