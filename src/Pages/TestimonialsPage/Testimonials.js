import React, { Component } from 'react';
import TestimonialsHeading from '../../Components/Testimonials_Components/TestimonialsHeading';
import TestimonialsBody from '../../Components/Testimonials_Components/TestimonialsBody';
import Header from '../../Common/Header.Component/Header.jsx';
import Footer from '../../Common/Footer.component/Footer.jsx';

export default class Testimonials extends Component {
  render() {
    return (
      <div>
        <Header />
        <TestimonialsHeading />
        <TestimonialsBody />
        <Footer />
      </div>
    )
  }
}

