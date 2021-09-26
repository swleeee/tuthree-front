import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
  render() {
    return (
      <Container>
        Footer
        <licence>
          <a href="https://www.freepik.com/photos/business">
            Business photo created by jcomp - www.freepik.com
          </a>
          <a href="https://www.freepik.com/photos/calendar">
            Calendar photo created by rawpixel.com - www.freepik.com
          </a>

          <a href="https://www.freepik.com/vectors/business">
            Business vector created by stories - www.freepik.com
          </a>

          <a href="https://www.freepik.com/vectors/school">
            School vector created by macrovector - www.freepik.com
          </a>

          {/* <a href="https://www.freepik.com/vectors/idea">
            Idea vector created by stories - www.freepik.com
          </a> */}
        </licence>
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
