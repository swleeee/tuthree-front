import React, { Component } from 'react';
import { inject, observer, Provider } from 'mobx-react';
import styled from 'styled-components';
import MainContainer from './DetailContent';
import SubContainer from './SubContent';
import MobileContent from './MobileContent';
import Common from '../../../../stores/Common/Common';

@inject('Auth', 'Common')
@observer
class index extends Component {
  render() {
    console.info(Common.width);
    return (
      <>
        <Container>
          {Common.width > 767.98 ? (
            <>
              <MainBox />
              <SubBox />
            </>
          ) : (
            <MobileContent />
          )}
        </Container>
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

const MainBox = styled(MainContainer)`
  border: 2px solid red;
  > div {
    border: 2px solid red;
  }
`;
const SubBox = styled(SubContainer)`
  width: 100%;
  position: absolute;
`;
