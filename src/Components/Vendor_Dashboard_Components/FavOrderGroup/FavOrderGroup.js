import React from 'react';
import FavOrder1 from './FavOrder1';
import FavOrder2 from './FavOrder2';
import FavOrder3 from './FavOrder3';

export default class FavOrderGroup extends React.Component {
  render() {
    return (
      <div>
        <FavOrder1 />
        <FavOrder2 />
        <FavOrder3 />
      </div>
    )
  }
}

