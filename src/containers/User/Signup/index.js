import React, { Component } from 'react';
import styled from 'styled-components';
import InnerContainer from '../../../components/InnerContainer';
import OuterContainer from '../../../components/OuterContainer';
import Step1Container from './Step1Container';
import Step2TeacherContainer from './Step2TeacherContainer';
import Step2StudentContainer from './Step2StudentContainer';
import Step3TeacherContainer from './Step3TeacherContainer';
import Step3StudentContainer from './Step3StudentContainer';
import Step4Container from './Step4Container';

import { inject, observer, Provider } from 'mobx-react';
import Auth from '../../../stores/Account/Auth';

@inject('Auth')
@observer
class index extends Component {
  componentDidMount = () => {
    Auth.step = 1;
    Auth.userType = 1;
    Auth.resetSignupData();
  };
  render() {
    console.log(Auth.step);
    return (
      <Provider Auth={Auth}>
        <OuterContainer>
          <InnerContainer>
            {Auth.step && Auth.step === 1 && <Step1Container />}

            {Auth.step && Auth.step === 2 && Auth.userType === 1 && (
              <Step2TeacherContainer />
            )}
            {Auth.step && Auth.step === 2 && Auth.userType === 2 && (
              <Step2StudentContainer />
            )}

            {Auth.step && Auth.step === 3 && Auth.userType === 1 && (
              <Step3TeacherContainer />
            )}
            {Auth.step && Auth.step === 3 && Auth.userType === 2 && (
              <Step3StudentContainer />
            )}

            {Auth.step && Auth.step === 4 && <Step4Container />}
          </InnerContainer>
        </OuterContainer>
      </Provider>
    );
  }
}

export default index;
