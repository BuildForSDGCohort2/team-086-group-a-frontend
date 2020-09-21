import React from 'react';
import Heading from './Heading';
import Welcome from './Welcome';
import Img from './Img';

export default class HeadGroup extends React.Component {
  render() {
    return (
      <section>
        <Heading />
        <Welcome />
        <Img />
      </section>
    )
  }
}
