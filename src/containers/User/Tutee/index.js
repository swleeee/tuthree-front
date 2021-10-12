import React, { Component } from 'react';
import { inject, observer, Provider } from 'mobx-react';
import InnerContainer from '../../../components/InnerContainer';
import OuterContainer from '../../../components/OuterContainer';
import Content from './Content';
import DetailContent from './Detail/index';

@inject('Tutee')
@observer
class index extends Component {
  render() {
    const { Tutee } = this.props;
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
