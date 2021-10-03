import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { inject, observer } from 'mobx-react';

import previousImg from '../static/images/Common/previous.png';
import nextImg from '../static/images/Common/next.png';

import AdminCommunity from '../stores/Admin/Community';
import Community from '../stores/Community/Community';

@inject('AdminCommunity', 'Community')
@observer
class Pagination extends Component {
  pageMoveHandler = async (e) => {
    const { type } = this.props;
    switch (type) {
      case 'AdminNotice':
        await AdminCommunity.movePage(e);
        break;
      case 'AdminFaq':
        await AdminCommunity.moveFaqPage(e);
        break;
      case 'Notice':
        await Community.moveNoticePage(e);
        break;
      case 'Faq':
        await Community.moveFaqPage(e);
        break;
      case 'Community':
        await Community.moveCommunityPage(e);
        break;
      default:
        break;
    }
  };

  pagePrevHandler = async () => {
    const { type } = this.props;
    switch (type) {
      case 'AdminNotice':
        await AdminCommunity.pagePrev();
        break;

      case 'AdminFaq':
        await AdminCommunity.pageFaqPrev();
        break;
      case 'Notice':
        await Community.pageNoticePrev();
        break;
      case 'Faq':
        await Community.pageFaqPrev();
        break;
      case 'Community':
        await Community.pageCommunityPrev();
        break;
      default:
        break;
    }
  };

  pageNextHandler = async () => {
    const { type } = this.props;
    switch (type) {
      case 'AdminNotice':
        await AdminCommunity.pageNext();
        break;
      case 'AdminFaq':
        await AdminCommunity.pageFaqNext();
        break;
      case 'Notice':
        await Community.pageNoticeNext();
        break;
      case 'Faq':
        await Community.pageFaqNext();
        break;
      case 'Community':
        await Community.pageCommunityNext();
        break;
      default:
        break;
    }
  };
  render() {
    const { currentSet, currentPage, totalPage } = this.props;

    return (
      <PageBar>
        <img
          src={previousImg}
          style={{
            opacity: currentSet == 1 && currentPage <= 1 ? 0.4 : 1,
            cursor: 'pointer',
          }}
          onClick={this.pagePrevHandler}
        />
        <PageCount
          onClick={(e) => this.pageMoveHandler(e)}
          value={5 * (currentSet - 1)}
          active={currentPage % 5 == 1}
          style={{
            display: totalPage < 5 * (currentSet - 1) + 1 ? 'none' : 'block',
          }}
        >
          {' '}
          {5 * (currentSet - 1) + 1}{' '}
        </PageCount>
        <PageCount
          value={5 * (currentSet - 1) + 1}
          active={currentPage % 5 == 2}
          style={{
            display: totalPage < 5 * (currentSet - 1) + 2 ? 'none' : 'block',
          }}
          onClick={(e) => this.pageMoveHandler(e)}
        >
          {' '}
          {5 * (currentSet - 1) + 2}{' '}
        </PageCount>
        <PageCount
          value={5 * (currentSet - 1) + 2}
          active={currentPage % 5 == 3}
          style={{
            display: totalPage < 5 * (currentSet - 1) + 3 ? 'none' : 'block',
          }}
          onClick={(e) => this.pageMoveHandler(e)}
        >
          {' '}
          {5 * (currentSet - 1) + 3}{' '}
        </PageCount>
        <PageCount
          value={5 * (currentSet - 1) + 3}
          active={currentPage % 5 == 4}
          style={{
            display: totalPage < 5 * (currentSet - 1) + 4 ? 'none' : 'block',
          }}
          onClick={(e) => this.pageMoveHandler(e)}
        >
          {' '}
          {5 * (currentSet - 1) + 4}{' '}
        </PageCount>
        <PageCount
          value={5 * (currentSet - 1) + 4}
          active={currentPage % 5 == 0}
          style={{
            display: totalPage < 5 * (currentSet - 1) + 5 ? 'none' : 'block',
          }}
          onClick={(e) => this.pageMoveHandler(e)}
        >
          {' '}
          {5 * (currentSet - 1) + 5}{' '}
        </PageCount>
        <img
          src={nextImg}
          style={{
            opacity: totalPage == currentPage ? 0.4 : 1,
            cursor: 'pointer',
          }}
          onClick={this.pageNextHandler}
        />
      </PageBar>
    );
  }
}

export default Pagination;

const PageBar = styled.div`
  width: 351px;
  margin-top: 109px;
  margin-bottom: 157px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
`;

const PageCount = styled.span`
  width: 14px;
  height: 30px;
  font-size: 25px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.63px;
  text-align: left;
  color: #999999;
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      font-weight: 700;
      color: #0933b3;
    `}
`;
