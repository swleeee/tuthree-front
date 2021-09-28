import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer, Provider } from 'mobx-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as Connection,
} from 'react-router-dom';
import ProgressContainer from './ProgressContainer';

import teacherImg from '../../static/images/Signup/teacher.png';
import studentImg from '../../static/images/Signup/student.png';
import authStore from '../../stores/Account/Auth';

// @inject('authStore')
@observer
class Step1Container extends Component {
  render() {
    console.info(authStore.forgottonType);
    return (
      <Provider Auth={authStore}>
        <Container>
          <Name>회원가입</Name>
          <ProgressContainer step="1" />

          <CardContainer>
            <CardItem
              onClick={() => {
                authStore.step = 2;
                authStore.userType = 1;
                console.log(authStore.step);
              }}
            >
              <div>과외 선생님</div>
              <img src={teacherImg} />
              <div>학생을 찾고 있어요!</div>
            </CardItem>

            <CardItem
              onClick={() => {
                authStore.step = 2;
                authStore.userType = 2;
                console.log(authStore.step);
              }}
            >
              <div>학생/학부모</div>
              <img src={studentImg} />
              <div>과외 선생님을 찾고 있어요!</div>
            </CardItem>
          </CardContainer>
        </Container>
      </Provider>
    );
  }
}

export default Step1Container;

const Container = styled.div`
  width: 100%;
  height: 1200px;
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
const CardContainer = styled.div`
  display: flex;
  margin-top: 90px;
  justify-content: space-around;
  width: 100%;
`;
const CardItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.16);
  width: 400px;
  height: 400px;
  padding-top: 25px;
  padding-bottom: 60px;
  box-sizing: border-box;

  img {
    width: 128px;
    height: 128px;
  }
  div:nth-of-type(1) {
    font-size: 28px;
    font-weight: bold;
    padding-bottom: 15px;
    box-sizing: border-box;
    border-bottom: 1px solid #707070;
    width: 80%;
    text-align: center;
  }
  div:nth-of-type(2) {
    font-size: 20px;
    font-weight: 500;
  }
`;
