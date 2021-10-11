import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as Connection,
} from 'react-router-dom';

import Community from '../../../stores/Community/Community';
import searchImg from '../../../static/images/Admin/Main/search.png';
import Pagination from '../../../components/Pagination';
import Auth from '../../../stores/Account/Auth';

const dummydata = [
  {
    id: '293',
    title: 'title1',
    writeAt: '2021-09-27',
    content: 'content1',
    userId: 'abc1',
    views: 12,
  },
  {
    id: '291',
    title: 'title2',
    writeAt: '2021-09-27',
    content: 'content1',
    userId: 'abc2',
    views: 15,
  },
  {
    id: '288',
    title: 'title3',
    writeAt: '2021-09-27',
    content: 'content1',
    userId: 'abc3',
    views: 22,
  },
  {
    id: '281',
    title: 'title4',

    writeAt: '2021-09-27',
    content: 'content1',
    userId: 'abc4',
    views: 62,
  },
  {
    id: '271',
    title: 'title5',
    writeAt: '2021-09-27',
    content: 'content1',
    userId: 'abc5',
    views: 212,
  },
];

@inject('Community', 'Auth')
@observer
class Content extends Component {
  componentDidMount = () => {
    Community.getCommunityList(Community.communityCurrentPage);
    console.info(Auth.token);
    console.info(localStorage.getItem('token'));
  };
  render() {
    console.info('render!!');
    console.info(Community.communityErrorMessage);
    console.info(Community.communityErrorMessage === '');
    return (
      <Container>
        <SearchBox>
          <Input
            placeholder="제목 및 내용을 입력하세요."
            onChange={(e) => Community.onChangeHandler(e, 'community')}
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) =>
              (e.target.placeholder = '제목 및 내용을 입력하세요.')
            }
          />
          <Search
            onClick={() => {
              console.info('dsfdsf');
              Community.communityErrorMessage = '';
              if (Community.communitySearchValue === '') {
                Community.communitySearchFinalValue = '';
                Community.getCommunityList(1);
              } else {
                Community.searchCommunity(1);
              }
            }}
          >
            <img src={searchImg} />
          </Search>
        </SearchBox>
        <SearchArea
          active={Community.communitySearchFinalValue === ''}
          error={Community.communityErrorMessage === ''}
        >
          <div>
            "<span>{`${Community.communitySearchFinalValue}`}</span>" 로 검색한
            결과입니다
          </div>
          <div>{Community.communityErrorMessage}</div>
        </SearchArea>
        <Header>
          <Count>
            총 <span>{Community.communityListTotalCount}</span>개
          </Count>

          <ButtonBox>
            <Button onClick={() => (Community.communityState = 2)}>
              <div>글 작성</div>
            </Button>
          </ButtonBox>
        </Header>
        <MainBox>
          <Line title={true}>
            <Number>번호</Number>

            <Title>제목</Title>
            <Id>아이디</Id>
            <Date>등록일</Date>
            <View>조회수</View>
          </Line>

          {/* <Line>
            <Number>1</Number>
            <Title>안녕!</Title>
            <Date>2021.09.28</Date>
          </Line> */}
          {/* {dummydata &&
            dummydata.map((item, idx) => {
              return (
                <Line
                  onClick={() => Community.pushToCommunityDetail(item, idx)}
                >
                  <Number>{idx}</Number>
                  <Title>{item.title}</Title>
                  <Id>{item.userId}</Id>
                  <Date>{item.writeAt}</Date>
                  <View>{item.views}</View>
                </Line>
              );
            })} */}
          {Community.communityList &&
            Community.communityList.map((item, idx) => {
              return (
                <Line
                  onClick={() => Community.pushToCommunityDetail(item, idx)}
                >
                  <Number>
                    {idx + 1 + 10 * (Community.communityCurrentPage - 1)}
                  </Number>

                  <Title>{item.title}</Title>
                  <Id>{item.userId}</Id>
                  <Date>{item.writeAt}</Date>
                  <View>{item.view}</View>
                </Line>
              );
            })}
        </MainBox>
        <Pagination
          type="Community"
          currentSet={Community.communityCurrentSet}
          currentPage={Community.communityCurrentPage}
          totalPage={Community.communityTotalPage}
        />
      </Container>
    );
  }
}

export default Content;

const Container = styled.div`
  margin-top: 100px;
  width: 100%;
  // height: 1000px;
  //   border: 3px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SearchBox = styled.div`
  width: 50%;
  height: 40px;
  border: 2px solid #707070;
  border-radius: 21px;
  display: flex;
  align-items: center;
  margin-bottom: 80px;

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 90%;
    height: 30px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 60%;
    height: 35px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 55%;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 40px;
  //   border: 2px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  @media (min-width: 0px) and (max-width: 767.98px) {
    height: 30px;
    margin-bottom: 5px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
  }
`;
const Button = styled.button`
  background-color: #eb7252;
  border: none;
  width: 80px;
  height: 36px;
  border-radius: 5px;
  cursor: pointer;
  > div {
    font-size: 16px;
    font-weight: bold;
    color: #fff;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 60px;
    height: 28px;
    > div {
      font-size: 14px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 80px;
    height: 32px;
    > div {
      font-size: 15px;
    }
  }
`;

const Input = styled.input`
  border: none;
  // border-bottom: 1px solid #000000;
  // padding-bottom: 18px;
  outline: none;
  font-size: 15px;
  //   width: 95%;
  flex-grow: 10;
  padding: 0 20px;
  box-sizing: border-box;
  border-radius: 21px;
  height: 40px;

  @media (min-width: 0px) and (max-width: 767.98px) {
    height: 30px;
    font-size: 12px;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    height: 35px;
    font-size: 13px;
  }
  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: 14px;
  }
  @media (min-width: 1300px) {
  }
`;

const Search = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  //   border: 2px solid blue;
  //   background-color: #eb7252;
  //   border-radius: 0 21px 21px 0;
  box-sizing: border-box;
  > img {
    width: 24px;
    height: 24px;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 30px;
    > img {
      width: 16px;
      height: 16px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    > img {
      width: 20px;
      height: 20px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
  }
`;
const MainBox = styled.div`
  width: 100%;
  // height: 500px;
  //   border: 3px solid blue;
  border-top: 3px solid #000000;
  border-bottom: 3px solid #000000;
`;

const Line = styled.div`
  cursor: pointer;
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
  @media (min-width: 0px) and (max-width: 767.98px) {
    > div {
      font-size: ${(props) => (props.title ? '14' : '11')}px;
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    > div {
      font-size: ${(props) => (props.title ? '18' : '14')}px;
    }
  }
`;
const Number = styled.div`
  //   border: 2px solid red;
  flex-grow: 1;
  width: 2%;
`;

const Type = styled.div`
  //   border: 2px solid red;
  flex-grow: 1;
  width: 3%;
`;
const Title = styled.div`
  //   border: 2px solid blue;
  flex-grow: 6;
  width: 20%;

  @media (min-width: 0px) and (max-width: 767.98px) {
    flex-grow: 2.5;
    width: 12%;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 15%;
  }
`;
const Id = styled.div`
  flex-grow: 1;
  width: 3%;
`;

const Date = styled.div`
  //   border: 2px solid green;
  flex-grow: 1;
  width: 3%;

  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 5%;
  }
`;
const View = styled.div`
  flex-grow: 1;
  width: 3%;

  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 3%;
  }
`;
const ButtonBox = styled.div``;

const Count = styled.div`
  font-size: 16px;
  > span {
    font-weight: bold;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    font-size: 11px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 13px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: 14px;
  }
`;

const SearchArea = styled.div`
  width: 100%;
  // height: 100px;
  // border: 2px solid red;
  // display: none;
  margin-bottom: 30px;
  display: ${(props) =>
    !props.error ? 'flex' : props.active ? 'none' : 'flex'};
  // display: flex;
  align-items: center;
  justify-content: center;

  > div {
    font-size: 24px;
    > span {
      font-weight: bold;
      color: #eb7252;
    }
  }
  div:nth-of-type(1) {
    display: ${(props) => (props.error ? 'block' : 'none')};
  }

  div:nth-of-type(2) {
    display: ${(props) => (props.error ? 'none' : 'block')};
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    > div {
      font-size: 17px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    > div {
      font-size: 20px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    > div {
      font-size: 22px;
    }
  }
`;
