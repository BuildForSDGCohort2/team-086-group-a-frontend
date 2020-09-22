import React from 'react';
import Notification from './Notification';
import Report from './Report';
// import styled from 'styled-components';

export default class NotificationReportGroup extends React.Component {
  render() {
    return (
      <section className="row mt-5">
        <Notification />
        <Report />
      </section>
    )
  }
}

// const SectionStyle = styled.section`
//   margin: 2px;
// `;



