import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as Connection,
} from 'react-router-dom';

import FindIdContainer from './FindId/FindId';
import CompletionId from './FindId/Completion';

import FindPasswordContainer from './FindPassword/FindPassword';
import FindPasswordContainer2 from './FindPassword/Phone2';
import CompletionPassword from './FindPassword/Completion';

import Auth from '../../stores/Account/Auth';

@inject('Auth')
@observer
class Content extends Component {
  onIdHandler = (e) => {
    console.log(e.target.value);
  };

  onPasswordHandler = (e) => {
    console.log(e.target.value);
  };
  onClickNavHandler = (type) => {
    console.info(type);
    switch (type) {
      case 'id':
        Auth.forgottenType = 1;
        Auth.idStep = 1;
        break;
      case 'password':
        Auth.forgottenType = 2;
        Auth.passwordStep = 1;
        break;
      default:
        break;
    }
    // this.setState({ g: 3 });

    console.info(Auth.forgottenType);
  };
  render() {
    console.info('render');
    console.info(Auth.forgottenType);
    console.info(Auth.idStep);

    return (
      // <Provider Auth={Auth}>
      <Container>
        {/* <Name>아이디/비밀번호 찾기</Name> */}
        <NavBox>
          <Nav
            active={Auth.forgottenType === 1 ? true : false}
            onClick={() => this.onClickNavHandler('id')}
          >
            <div>아이디 찾기</div>
          </Nav>
          <Nav
            active={Auth.forgottenType === 2 ? true : false}
            onClick={() => this.onClickNavHandler('password')}
          >
            <div>비밀번호 찾기</div>
          </Nav>
        </NavBox>

        {Auth.forgottenType === 1 && Auth.idStep === 1 && <FindId />}
        {Auth.forgottenType === 1 && Auth.idStep === 2 && <CompletionId />}
        {Auth.forgottenType === 2 &&
          (Auth.passwordStep === 1 || Auth.passwordStep === 2) && (
            <FindPassword />
          )}
        {Auth.forgottenType === 2 && Auth.passwordStep === 3 && (
          <CompletionPassword />
        )}
      </Container>
      // </Provider>
    );
  }
}

export default observer(Content);

const Container = styled.div`
  width: 100%;
  // height: 1000px;
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
  // border: 2px solid black;
  padding-bottom: 10px;
  margin-bottom: 40px;
  border-bottom: 2px solid #aaaaaa;
  margin: 50px 0;
`;
const Nav = styled.div`
  cursor: pointer;
  width: 150px;
  height: 100%;
  border: ${(props) =>
    props.active ? '1px solid transparent' : '1px solid black'};
  // border-radius: 3px;
  background-color: ${(props) =>
    props.active ? 'rgb(235, 114, 82)' : '#ffffff'};

  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    color: ${(props) => (props.active ? '#ffffff' : '#000000')};
    font-weight: bold;
    font-size: 16px;
  }
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

const FindId = styled(FindIdContainer)``;
const FindPassword = styled(FindPasswordContainer)``;
const FindPassword2 = styled(FindPasswordContainer2)``;
