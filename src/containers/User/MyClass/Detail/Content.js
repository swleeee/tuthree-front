import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import Calendar from '../../../../components/Calendar';

@inject('MyClass')
@observer
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { today: new Date() };
  }

  componentWillUnmount = () => {
    const { MyClass } = this.props;
    MyClass.state = 1;
  };
  render() {
    const { MyClass } = this.props;
    return (
      // <Container>
      <Calendar today={this.state.today} history={this.props.history} />
      // </Container>
    );
  }
}

export default Content;

const Container = styled.div`
  // height: 100%;
  display: flex;
  margin: 100px 0;
  width: 100%;
  border: 2px solid red;
`;
