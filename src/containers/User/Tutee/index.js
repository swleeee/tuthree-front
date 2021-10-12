import React, { Component } from 'react';
import { inject, observer, Provider } from 'mobx-react';
import InnerContainer from '../../../components/InnerContainer';
import OuterContainer from '../../../components/OuterContainer';
import Content from './Content';
import DetailContent from './Detail/index';
import Tutee from '../../../stores/Matching/Tutee';

@inject('Tutee')
@observer
class index extends Component {
  render() {
    return (
      <>
        <OuterContainer>
          <InnerContainer>
            {Tutee.state === 0 ? <Content /> : <DetailContent />}
          </InnerContainer>
        </OuterContainer>
      </>
    );
  }
}

export default index;
