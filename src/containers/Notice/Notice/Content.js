import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as Connection,
} from 'react-router-dom';

import Notice from '../../../stores/Community/Notice';

@inject('Notice')
@observer
class Content extends Component {
  render() {
    return (
      <Container>
        <SearchBox>searchbox</SearchBox>
        <MainBox>
          <Line title={true}>
            <Number>번호</Number>
            <Title>제목</Title>
            <Date>등록일</Date>
          </Line>

          <Line>
            <Number>1</Number>
            <Title>안녕!</Title>
            <Date>2021.09.28</Date>
          </Line>
        </MainBox>
      </Container>
    );
  }
}

export default Content;

const Container = styled.div`
  width: 100%;
  height: 1000px;
  //   border: 3px solid red;
  display: flex;
  flex-direction: column;
`;
const SearchBox = styled.div`
  width: 100%;
  height: 100px;
  //   border: 3px solid green;
`;
const MainBox = styled.div`
  width: 100%;
  height: 500px;
  //   border: 3px solid blue;
  border-top: 3px solid #000000;
  border-bottom: 3px solid #000000;
`;

const Line = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  //   border: 2px solid black;
  align-items: center;
  justify-content: center;
  border-bottom: ${(props) =>
    props.title ? '1px solid black' : '1px solid #aaaaaa'};
  > div {
    // text-align: ${(props) => (props.title ? 'center' : 'left')};
    text-align: center;
    font-size: ${(props) => (props.title ? '20' : '16')}px;
    font-weight: ${(props) => (props.title ? 'bold' : '400')};
  }
`;
const Number = styled.div`
  //   border: 2px solid red;
  flex-grow: 1;
`;
const Title = styled.div`
  //   border: 2px solid blue;
  flex-grow: 6;
`;
const Date = styled.div`
  //   border: 2px solid green;
  flex-grow: 1;
`;
