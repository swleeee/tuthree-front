import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as Connection,
} from 'react-router-dom';

import AdminCommunity from '../../../../../stores/Admin/Community';
import searchImg from '../../../../../static/images/Admin/Main/search.png';
import Pagination from '../../../../../components/Pagination';

@inject('AdminCommunity')
@observer
class Content extends Component {
  componentDidMount = () => {
    AdminCommunity.getAdminNoticeList();
  };
  render() {
    return (
      <Container>
        <Item>
          <SearchBox>
            <Input
              placeholder="질문을 입력하세요."
              // onChange={(e) => AdminAuth.onUserHandler(e, 'id')}
              onFocus={(e) => (e.target.placeholder = '')}
              onBlur={(e) => (e.target.placeholder = '질문을 입력하세요.')}
            />
            <Search>
              <img src={searchImg} />
            </Search>
          </SearchBox>
          <Header>
            <Count>
              총 <span>{AdminCommunity.noticeListTotalCount}</span>개
            </Count>
            <WriteBtn onClick={() => (AdminCommunity.state = 2)}>
              글쓰기
            </WriteBtn>
          </Header>
          <MainBox>
            <Line title={true}>
              <Number>번호</Number>
              <Type>분류</Type>
              <Title>제목</Title>
              <Date>등록일</Date>
              <Management title={true}>관리</Management>
            </Line>

            {AdminCommunity.noticeList &&
              AdminCommunity.noticeList.map((item, idx) => {
                return (
                  <Line>
                    <Number>{idx}</Number>
                    <Type>{item.type.korType}</Type>
                    <Title>{item.title}</Title>
                    <Date>{item.writeAt}</Date>
                    <Management>
                      <CtlBtn>
                        <div>수정</div>
                      </CtlBtn>
                      <CtlBtn del={true}>
                        <div>삭제</div>
                      </CtlBtn>
                    </Management>
                  </Line>
                );
              })}
            {/* <Line>
              <Number>1</Number>
              <Type>일반</Type>
              <Title>안녕!dsfdsfdsfsdfdsfddsdfsdfsdfsdfdsfdsfsf</Title>
              <Date>2021.09.28</Date>
              <Management>
                <CtlBtn>
                  <div>수정</div>
                </CtlBtn>
                <CtlBtn del={true}>
                  <div>삭제</div>
                </CtlBtn>
              </Management>
            </Line> */}
          </MainBox>
          <Pagination
            currentSet={AdminCommunity.noticeCurrentSet}
            currentPage={AdminCommunity.noticeCurrentPage}
            totalPage={AdminCommunity.noticeTotalPage}
          />
        </Item>
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
  justify-content: center;
`;

const Item = styled.div`
  width: 85%;
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
  margin-bottom: 20px;

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

const Header = styled.div`
  width: 100%;
  height: 40px;
  //   border: 2px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;

  @media (min-width: 0px) and (max-width: 767.98px) {
    height: 30px;
    margin-bottom: 5px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
  }
`;
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
const WriteBtn = styled.button`
  border: none;
  background-color: #eb7252;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 50px;
    height: 23px;
    font-size: 11px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 80px;
    height: 30px;
    font-size: 13px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 90px;
    height: 35px;
    font-size: 14px;
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
    font-size: ${(props) => (props.title ? '18' : '14')}px;
    font-weight: ${(props) => (props.title ? 'bold' : '400')};
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    > div {
      font-size: ${(props) => (props.title ? '12' : '10')}px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    > div {
      font-size: ${(props) => (props.title ? '15' : '12')}px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    > div {
      font-size: ${(props) => (props.title ? '16' : '12')}px;
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
  word-break: break-all;
  white-space: break-spaces;
  @media (min-width: 0px) and (max-width: 767.98px) {
    flex-grow: 3;
    width: 15%;
  }
`;
const Date = styled.div`
  //   border: 2px solid green;
  flex-grow: 1;
  width: 3%;

  @media (min-width: 0px) and (max-width: 767.98px) {
    flex-wrap: wrap;
    width: 10%;
  }
`;

const Management = styled.div`
  //   border: 2px solid red;
  flex-grow: 2;
  //   display: ${(props) => (props.title ? 'block' : 'flex')};
  //   justify-content: ${(props) => (props.title ? '' : 'flex-end')};
  width: 5%;

  @media (min-width: 0px) and (max-width: 767.98px) {
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.title ? '' : 'center')};
    width: 2%;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 10%;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 7%;
  }
`;

const CtlBtn = styled.button`
  cursor: pointer;
  width: 80px;
  height: 35px;
  border-radius: 3px;
  border: none;
  background-color: ${(props) => (props.del ? '#ff0000' : '#0b7def')};
  margin-right: ${(props) => (props.del ? '0' : '5')}px;
  color: ${(props) => (props.del ? '#fff' : '#000')};

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 36px;
    height: 20px;
    margin-right: 0px;
    margin-bottom: ${(props) => (props.del ? '0' : '5')}px;
    > div {
      font-size: 10px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 50px;
    height: 25px;
    > div {
      font-size: 13px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 60px;
    height: 30px;
    > div {
      font-size: 14px;
    }
  }

  @media (min-width: 1300px) {
    > div {
      font-size: 16px;
    }
  }
`;
