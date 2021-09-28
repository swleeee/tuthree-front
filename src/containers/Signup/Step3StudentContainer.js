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
class Step3StudentContainer extends Component {
  render() {
    return (
      <Provider Auth={authStore}>
        <Container>
          <Name>회원가입</Name>
          <ProgressContainer step="2" />
        </Container>
      </Provider>
    );
  }
}

export default Step3StudentContainer;

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
