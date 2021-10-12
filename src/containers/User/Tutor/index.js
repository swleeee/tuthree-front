import React, { Component } from 'react';
import { inject, observer, Provider } from 'mobx-react';
import InnerContainer from '../../../components/InnerContainer';
import OuterContainer from '../../../components/OuterContainer';
import Content from './Content';
import DetailContent from './Detail/index';
import Tutor from '../../../stores/Matching/Tutor';

@inject('Tutor')
@observer
class index extends Component {
  render() {
    return (
      <>
        <OuterContainer>
          <InnerContainer>
            {Tutor.state === 0 ? <Content /> : <DetailContent />}
          </InnerContainer>
        </OuterContainer>
      </>
    );
  }
}

export default index;
