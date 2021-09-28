import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer, Provider } from 'mobx-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as Connection,
} from 'react-router-dom';

import authStore from '../../stores/Account/Auth';

@observer
class Content extends Component {
  onIdHandler = (e) => {
    console.log(e.target.value);
  };

  onPasswordHandler = (e) => {
    console.log(e.target.value);
  };
  o0nClickNavHandler = (type) => {
    console.info(type);
    switch (type) {
      case 'id':
        authStore.forgottonType = 1;
        break;
      case 'password':
        authStore.forgottonType = 2;
        break;
      default:
        break;
    }
    // this.setState({ g: 3 });

    console.info(authStore.forgottonType);
  };
  render() {
    console.info('render');
    return (
      <Provider Auth={authStore}>
        <Container>
          <Name>아이디/비밀번호 찾기</Name>
          <span>{authStore.forgottonType}</span>
          <NavBox>
            <Nav
              active={authStore.forgottonType === 1 ? true : false}
              onClick={() => this.onClickNavHandler('id')}
            >
              <div>아이디 찾기</div>
            </Nav>
            <Nav
              active={authStore.forgottonType === 2 ? true : false}
              onClick={() => this.onClickNavHandler('password')}
            >
              <div>비밀번호 찾기</div>
            </Nav>
          </NavBox>
          <MainBox>
            <TabBox>
              <Tab>
                <div>이메일 인증</div>
              </Tab>
              <Tab>
                <div>휴대전화 인증</div>
              </Tab>
            </TabBox>
            <MainContent>ㅇㄴㄹㄴㅇ</MainContent>
          </MainBox>
        </Container>
      </Provider>
    );
  }
}

export default observer(Content);

const Container = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.div`
  font-size: 40px;
  color: #eb7252;
  font-family: RobotoBlack;
  font-weight: bold;
  margin: 110px 0;
`;

const NavBox = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  border: 2px solid black;
  margin-bottom: 50px;
`;
const Nav = styled.div`
  width: 150px;
  height: 100%;
  border: 2px solid blue;
  background-color: ${(props) =>
    props.active ? 'rgb(235, 114, 82)' : '#ffffff'};
`;
const MainBox = styled.div`
  display: flex;
  width: 100%;
  height: 800px;
`;
const MainContent = styled.div`
  width: 100%;
  height: 500px;
  border: 2px solid green;
`;
const TabBox = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.6);
  margin-right: 50px;
`;
const Tab = styled.div`
  width: 250px;
  height: 100px;
  display: flex;
  flex-direction: column;
`;

const Link = styled(Connection)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-family: RobotoBlack;
  font-weight: bold;

  box-sizing: border-box;
  display: block;
  text-align: center;
`;
