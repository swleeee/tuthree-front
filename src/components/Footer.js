import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
  render() {
    return (
      <Container>
        Footer
        <font>이사만루체 Copyright ⓒ (주)공게임즈. All Rights Reserved.</font>
      </Container>
    );
  }
}

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 200px;
  border: 3px solid red;
`;
