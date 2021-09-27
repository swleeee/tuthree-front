import React, { Component } from 'react';
import styled from 'styled-components';
import InnerContainer from '../../components/InnerContainer';
import OuterContainer from '../../components/OuterContainer';
import Step1Container from './Step1Container';

class index extends Component {
  render() {
    return (
      <>
        <OuterContainer>
          <InnerContainer>
            <Step1Container />
          </InnerContainer>
        </OuterContainer>
      </>
    );
  }
}

export default index;
