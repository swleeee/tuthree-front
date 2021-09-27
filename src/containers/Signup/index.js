import React, { Component } from 'react';
import styled from 'styled-components';
import InnerContainer from '../../components/InnerContainer';
import OuterContainer from '../../components/OuterContainer';
import Step1Container from './Step1Container';
import Step2TeacherContainer from './Step2TeacherContainer';
import Step2StudentContainer from './Step2StudentContainer';

import { inject, observer, Provider } from 'mobx-react';
import authStore from '../../stores/Account/Auth';

@observer
class index extends Component {
  render() {
    console.log(authStore.step);
    return (
      <Provider Auth={authStore}>
        <OuterContainer>
          <InnerContainer>
            {authStore.step && authStore.step === 1 && <Step1Container />}

            {authStore.step &&
              authStore.step === 2 &&
              authStore.userType === 1 && <Step2TeacherContainer />}
            {authStore.step &&
              authStore.step === 2 &&
              authStore.userType === 2 && <Step2StudentContainer />}
          </InnerContainer>
        </OuterContainer>
      </Provider>
    );
  }
}

export default index;
