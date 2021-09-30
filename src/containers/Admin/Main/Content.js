import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as Connection,
} from 'react-router-dom';

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
const Menu = styled.div`
  display: flex;
  // justify-content: space-around;
  // border: 3px solid blue;
  width: 70%;

  // padding: 10px;
`;

const NavBox = styled.div`
  padding: 0 30px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 50px;
  // border: 2px solid blue;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div:nth-of-type(1) {
    width: 200px;
    // border: 2px solid green;
    text-align: center;
    color: #fff;
  }
`;
const MainBox = styled.div``;
const TabBox = styled.div`
  width: 200px;
  height: 100vh;
  border: 2px solid blue;
  background-color: rgb(42, 42, 55);
`;
const MainContent = styled.div``;
const Button = styled.button`
  width: 120px;
  height: 30px;
  border: none;
  background-color: rgb(235, 114, 82);
  font-size: 18px;
  color: #fff;
  border-radius: 3px;
  font-weight: bold;
`;
const Link = styled(Connection)`
  text-decoration: none;
  color: black;
  font-family: RobotoBlack;

  box-sizing: border-box;
  display: block;
  text-align: center;
  color: #fff;
  // width: ${(props) => (props.menu ? '70%' : '1%')};
  margin: ${(props) => (props.menu ? '0 30px' : '0 0')};
`;
