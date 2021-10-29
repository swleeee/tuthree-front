import React, { Component } from 'react';
import { inject, observer, Provider } from 'mobx-react';
import InnerContainer from '../../../components/InnerContainer';
import OuterContainer from '../../../components/OuterContainer';
import Content from './Content';
import DetailContent from './Detail/index';
// import Tutor from '../../../stores/Matching/Tutor';

@inject('Test')
@observer
class index extends Component {
  render() {
    const { Test } = this.props;
    return (
      <>
        <OuterContainer>
          <InnerContainer>
            {Test.state === 0 ? <Content /> : <DetailContent />}
          </InnerContainer>
        </OuterContainer>
      </>
    );
  }
}

export default index;
