import React from 'react';
import Soup1 from '../../../Asset/soup1.png';

export default class FavOrder1 extends React.Component {
  render() {
    return (
      <div>
        <img src={Soup1} alt="soup" />
        <h3>Egusi Soup</h3>
        <button>View</button>
      </div>
    )
  }
}

