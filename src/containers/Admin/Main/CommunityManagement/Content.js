import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import AdminCommunity from '../../../../stores/Admin/Community';
import NoticeContainer from './Notice';
import NoticeWritingContainer from './Notice/Writing';
import NoticeDetailContainer from './Notice/DetailContent';

import FaqContainer from './FAQ';
import FaqWritingContainer from './FAQ/Writing';
import FaqDetailContainer from './FAQ/DetailContent';

import CommunityContainer from './Community';
import CommunityDetailContainer from './Community/DetailContent';

@inject('AdminCommunity')
@observer
class Content extends Component {
  render() {
    return (
      <Container>
        <NavBox>
          <Nav
            active={AdminCommunity.type === 1 ? true : false}
            onClick={() => AdminCommunity.onClickNavHandler('faq')}
          >
            <div>FAQ</div>
          </Nav>
          <Nav
            active={AdminCommunity.type === 2 ? true : false}
            onClick={() => AdminCommunity.onClickNavHandler('notice')}
          >
            <div>공지사항</div>
          </Nav>

          <Nav
            active={AdminCommunity.type === 3 ? true : false}
            onClick={() => AdminCommunity.onClickNavHandler('community')}
          >
            <div>커뮤니티</div>
          </Nav>
        </NavBox>

        {AdminCommunity.type === 1 && AdminCommunity.state === 1 && (
          <FaqContainer />
        )}
        {AdminCommunity.type === 1 && AdminCommunity.state === 2 && (
          <FaqWritingContainer />
        )}

        {AdminCommunity.type === 1 && AdminCommunity.state === 3 && (
          <FaqDetailContainer />
        )}

        {AdminCommunity.type === 2 && AdminCommunity.state === 1 && (
          <NoticeContainer />
        )}
        {AdminCommunity.type === 2 && AdminCommunity.state === 2 && (
          <NoticeWritingContainer />
        )}

        {AdminCommunity.type === 2 && AdminCommunity.state === 3 && (
          <NoticeDetailContainer />
        )}

        {AdminCommunity.type === 3 && AdminCommunity.state === 1 && (
          <CommunityContainer />
        )}

        {AdminCommunity.type === 3 && AdminCommunity.state === 3 && (
          <CommunityDetailContainer />
        )}
      </Container>
    );
  }
}

export default Content;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const NavBox = styled.div`
  width: 100%;
  display: flex;

  // min-height: 50px;
  height: 100%;
  // border: 2px solid black;
  padding-left: 10px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  border-bottom: 1px solid #aaaaaa;
  margin: 50px 0;
  @media (min-width: 0px) and (max-width: 767.98px) {
    margin: 24px 0;
    margin-top: 100px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    margin: 32px 0;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    margin: 40px 0;
  }
`;
const Nav = styled.div`
  cursor: pointer;
  width: 120px;
  height: 100%;
  //   border: 3px solid red;
  border-bottom: ${(props) =>
    props.active ? '2px solid rgb(235,114,82)' : 'none'};
  // border-radius: 3px;
  //   background-color: ${(props) =>
    props.active ? 'rgb(235, 114, 82)' : '#ffffff'};

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  > div {
    // color: ${(props) => (props.active ? '#ffffff' : '#000000')};
    font-weight: bold;
    font-size: 16px;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 80px;
    > div {
      font-size: 12px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 100px;
    > div {
      font-size: 14px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 110px;
    > div {
      font-size: 15px;
    }
  }
`;
