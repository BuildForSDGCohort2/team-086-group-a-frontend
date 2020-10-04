import React from 'react';
import Report1 from './Report1';
import Report2 from './Report2';
import styled from 'styled-components';

export default class Report extends React.Component {
  render() {
    return (
      <Div className="col-lg-4 col-md-12">
        <h1>Report</h1>
        <Report1 />
        <Report2 />
      </Div>
    )
  }
}

const Div = styled.div`
  
`;

