import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import InnerContainer from '../../components/InnerContainer';
import OuterContainer from '../../components/OuterContainer';
import Container from './Content';
import Auth from '../../stores/Account/Auth';

@inject('Auth')
@observer
class index extends Component {
  componentDidMount = () => {
    Auth.forgottenType = 1;
    Auth.idStep = 1;
    Auth.passwordStep = 1;
  };
  render() {
    return (
      <>
        <OuterContainer>
          <InnerContainer>
            <Container />
          </InnerContainer>
        </OuterContainer>
      </>
    );
  }
}

export default index;
