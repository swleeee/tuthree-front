import React, { Component } from 'react';
import styled from 'styled-components';

class Banner extends Component {
  render() {
    return <Container>main contents~</Container>;
  }
}

export default Banner;

const Container = styled.div`
  width: 100%;
  height: 400px;
  border: 3px solid blue;
`;
