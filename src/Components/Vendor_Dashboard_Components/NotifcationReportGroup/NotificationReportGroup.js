import React from 'react';
import Notification from './Notification';
import Report from './Report';

export default class NotificationReportGroup extends React.Component {
  render() {
    return (
      <section>
        <Notification />
        <Report />
      </section>
    )
  }
}

