import React, { Component } from 'react';
import styled from 'styled-components';

class Content extends Component {
  render() {
    return (
      <>
        <Container>
          <MainBox>
            {/* <TabBox></TabBox> */}
            <MainContent></MainContent>
          </MainBox>
        </Container>
      </>
    );
  }
}

export default Content;

const Container = styled.div`
  width: 100%;
  height: 100%;
  // border: 2px solid red;
  display: flex;
  flex-direction: column;
`;

const MainBox = styled.div``;

const MainContent = styled.div``;
