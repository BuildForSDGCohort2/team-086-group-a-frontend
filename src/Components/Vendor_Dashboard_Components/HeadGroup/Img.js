import React from 'react';
import TopImg from '../../../Asset/Rectangle 105.png';

export default class Img extends React.Component {
  render() {
    return (
      <div>
        <img src={TopImg} alt="Cool Restaurant" />
      </div>
    )
  }
}

