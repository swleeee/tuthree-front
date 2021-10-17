import React, { Component } from 'react';
import Content from './Content';
import { inject, observer } from 'mobx-react';
import InnerContainer from '../../../components/InnerContainer';
import OuterContainer from '../../../components/OuterContainer';
import DetailContent from './Detail';

@inject('MyClass')
@observer
class index extends Component {
  render() {
    const { MyClass } = this.props;
    return (
      <OuterContainer>
        <InnerContainer>
          {MyClass.state === 1 ? <Content /> : <DetailContent />}
        </InnerContainer>
      </OuterContainer>
    );
  }
}

export default index;
