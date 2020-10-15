import React from 'react';
import Notification1 from './Notification1';
import Notification2 from './Notification2';

export default class Notification extends React.Component {
  render() {
    return (
      <div className="col-lg-8">
        <h1>Notification</h1>
        <Notification1 />
        <Notification2 />
      </div>
    )
  }
}

