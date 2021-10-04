import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import InnerContainer from '../../../components/InnerContainer';
import OuterContainer from '../../../components/OuterContainer';
import Container from './Content';
import Writing from './Writing';
import Community from '../../../stores/Community/Community';

@inject('Community')
@observer
class index extends Component {
  render() {
    return (
      <>
        <OuterContainer>
          <InnerContainer>
            {Community.communityState === 1 && <Container />}
            {Community.communityState === 2 && <Writing />}
            {/* {Community.communityState === 1 && <Container />} */}
          </InnerContainer>
        </OuterContainer>
      </>
    );
  }
}

export default index;
