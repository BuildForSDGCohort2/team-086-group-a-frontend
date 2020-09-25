import React, { Component } from 'react';
import TestimonialsHeading from '../../Components/Testimonials_Components/TestimonialsHeading';
import TestimonialsBody from '../../Components/Testimonials_Components/TestimonialsBody';

export default class Testimonials extends Component {
  render() {
    return (
      <div className="container-fluid">
        <TestimonialsHeading />
        <TestimonialsBody />
      </div>
    )
  }
}

