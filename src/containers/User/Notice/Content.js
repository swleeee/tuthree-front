import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as Connection,
} from 'react-router-dom';

import NoticeContainer from './Notice';
import NoticeDetailContainer from './Notice/DetailContent';
import FaqContainer from './Faq';

import Notice from '../../../stores/Community/Notice';

@inject('Notice')
@observer
class Content extends Component {
  render() {
    return (
      <Container>
        <NavBox>
          <Nav
            active={Notice.type === 1 ? true : false}
            onClick={() => Notice.onClickNavHandler('notice')}
          >
            <div>공지사항</div>
          </Nav>
          <Nav
            active={Notice.type === 2 ? true : false}
            onClick={() => Notice.onClickNavHandler('faq')}
          >
            <div>FAQ</div>
          </Nav>
        </NavBox>

        {Notice.type && Notice.type === 1 && <NoticeContainer />}
        {Notice.type && Notice.type === 2 && <FaqContainer />}
      </Container>
    );
  }
}

export default Content;

const Container = styled.div`
  width: 100%;
  // height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavBox = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  // border: 2px solid black;
  padding-bottom: 10px;
  margin-bottom: 40px;
  border-bottom: 2px solid #aaaaaa;
  margin: 50px 0;
`;
const Nav = styled.div`
  cursor: pointer;
  width: 150px;
  height: 100%;
  border: ${(props) =>
    props.active ? '1px solid transparent' : '1px solid black'};
  // border-radius: 3px;
  background-color: ${(props) =>
    props.active ? 'rgb(235, 114, 82)' : '#ffffff'};

  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    color: ${(props) => (props.active ? '#ffffff' : '#000000')};
    font-weight: bold;
    font-size: 16px;
  }
`;
