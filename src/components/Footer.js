import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
  render() {
    return (
      <Container>
        <license>
          <div>
            <a href="https://www.freepik.com/photos/business">
              Business photo created by jcomp - www.freepik.com
            </a>
          </div>
          <div>
            <a href="https://www.freepik.com/photos/calendar">
              Calendar photo created by rawpixel.com - www.freepik.com
            </a>
          </div>
          <div>
            <a href="https://www.freepik.com/vectors/business">
              Business vector created by stories - www.freepik.com
            </a>
          </div>
          <div>
            <a href="https://www.freepik.com/vectors/school">
              School vector created by macrovector - www.freepik.com
            </a>
          </div>
          <div>
            Icons made by{' '}
            <a href="https://www.freepik.com" title="Freepik">
              Freepik
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>

          <div>
            Icons made by{' '}
            <a href="https://icon54.com/" title="Pixel perfect">
              Pixel perfect
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          {/* <a href="https://www.freepik.com/vectors/idea">
            Idea vector created by stories - www.freepik.com
          </a> */}

          <font>이사만루체 Copyright ⓒ (주)공게임즈. All Rights Reserved.</font>
        </license>
      </Container>
    );
  }
}

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 200px;
  // border: 3px solid red;
  background-color: #25292a;
  display: flex;
  justify-content: center;
  align-items: center;
  > license {
    color: white;

    a {
      color: white;
      text-decoration: none;
    }
  }
`;
