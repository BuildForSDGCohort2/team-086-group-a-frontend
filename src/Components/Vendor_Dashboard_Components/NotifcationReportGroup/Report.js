import React from 'react';
import Report1 from './Report1';
import Report2 from './Report2';

export default class Report extends React.Component {
  render() {
    return (
      <div className="col-lg-4 col-md-12">
        <h1>Report</h1>
        <Report1 />
        <Report2 />
      </div>
    )
  }
}



