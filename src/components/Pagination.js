import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { inject, observer } from 'mobx-react';

import previousImg from '../static/images/Common/previous.png';
import nextImg from '../static/images/Common/next.png';

import AdminCommunity from '../stores/Admin/Community';
import Community from '../stores/Community/Community';
import Tutor from '../stores/Matching/Tutor';

@inject('AdminCommunity', 'Community', 'Tutor', 'Tutee')
@observer
class Pagination extends Component {
  pageMoveHandler = async (e) => {
    const { type, Tutor, Tutee } = this.props;
    console.info(type);
    switch (type) {
      case 'AdminNotice':
        await AdminCommunity.movePage(e);
        break;
      case 'AdminFaq':
        await AdminCommunity.moveFaqPage(e);
        break;
      case 'AdminCommunity':
        await AdminCommunity.moveCommunityPage(e);
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
      case 'Tutor':
        await Tutor.movePage(e);
        break;
      case 'Tutee':
        await Tutee.movePage(e);
        break;
      default:
        break;
    }
  };

  pagePrevHandler = async () => {
    const { type, Tutor, Tutee } = this.props;
    switch (type) {
      case 'AdminNotice':
        await AdminCommunity.pagePrev();
        break;

      case 'AdminFaq':
        await AdminCommunity.pageFaqPrev();
        break;
      case 'AdminCommunity':
        await AdminCommunity.pageCommunityPrev();
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
      case 'Tutor':
        await Tutor.pagePrev();
        break;
      case 'Tutee':
        await Tutee.pagePrev();
        break;
      default:
        break;
    }
  };

  pageNextHandler = async () => {
    const { type, Tutor, Tutee } = this.props;
    switch (type) {
      case 'AdminNotice':
        await AdminCommunity.pageNext();
        break;
      case 'AdminFaq':
        await AdminCommunity.pageFaqNext();
        break;
      case 'AdminCommunity':
        await AdminCommunity.pageCommunityNext();
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
      case 'Tutor':
        await Tutor.pageNext();
        break;
      case 'Tutee':
        await Tutee.pageNext();
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
  > img {
    align-self: center;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 80%;
    > img {
      align-self: auto;
      width: 14px;
      height: 20px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    > img {
      width: 16px;
      height: 22px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    > img {
      width: 18px;
      height: 24px;
    }
  }
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
      color: #eb7252;
    `}

  @media (min-width: 0px) and (max-width: 767.98px) {
    font-size: 18px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 21px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: 23px;
  }
`;
