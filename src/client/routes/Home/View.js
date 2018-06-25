import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HomeContainer } from './styles';

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        This is Home.js
        <Link to={'/about'}>Go to about</Link>
      </HomeContainer>
    )
  }
}

export default Home;