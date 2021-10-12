import React, { Component } from 'react';
import { inject, observer, Provider } from 'mobx-react';
import styled from 'styled-components';
import Content from './Content';
import MobileContent from './MobileContent';
import Common from '../../../stores/Common/Common';
import InnerContainer from '../../../components/InnerContainer';
import OuterContainer from '../../../components/OuterContainer';

@inject('Auth', 'Common')
@observer
class index extends Component {
  render() {
    console.info(Common.width);
    return (
      <>
        <OuterContainer>
          <InnerContainer>
            {Common.width > 767.98 ? <Content /> : <MobileContent />}
          </InnerContainer>
        </OuterContainer>
      </>
    );
  }
}

export default index;

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 100px 0;

  position: relative;
  @media (min-width: 0px) and (max-width: 767.98px) {
    align-items: center;
    justify-content: center;
  }
`;
