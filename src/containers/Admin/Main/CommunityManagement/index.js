import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import Content from './Content';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as Connection,
} from 'react-router-dom';

class index extends Component {
  render() {
    return (
      <>
        <Content />
      </>
    );
  }
}

export default index;

const Container = styled.div`
  //   width: 100%;
  //   height: 100%;
  //   // border: 2px solid red;
  //   display: flex;
  //   flex-direction: column;
`;
