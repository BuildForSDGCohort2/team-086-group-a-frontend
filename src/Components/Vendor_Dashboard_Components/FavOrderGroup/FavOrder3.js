import React from 'react';
import Soup3 from '../../../Asset/soup3.png';
import styled from 'styled-components';

export default class FavOrder1 extends React.Component {
  render() {
    return (
      <Div className="col-lg-4 col-md-12">
        <Img src={Soup3} alt="soup" />
        <h3>Tai Platter</h3>
        <Button>View</Button>
      </Div>
    )
  }
}

const Div = styled.div`
min-width: 400px;
max-width: 400px;
  margin: 5px 10px 5px 0;
  text-align: center;
  border: 3px solid #f96058;
  border-radius: 10px;
`;
const Img = styled.img`
  width: 80%;
  margin: 40px 0px;
`;
const Button = styled.button`
  width: 200px;
  border: 8px solid black;
  border-radius: 10px;
  padding: 10px 0;
  margin: 0 0 10px 0;
  background-color: white;
  font-size: 1.5rem;
  font-weight: bolder;
`;

