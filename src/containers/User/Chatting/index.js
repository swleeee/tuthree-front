import React, { Component } from 'react';
import { inject, observer, Provider } from 'mobx-react';
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
