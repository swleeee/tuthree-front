import React, { Component } from 'react';
import styled from 'styled-components';
import InnerContainer from '../../../components/InnerContainer';
import OuterContainer from '../../../components/OuterContainer';
import Container from './Content';

class index extends Component {
  componentWillUnmount = () => {
    console.info('dd');
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
