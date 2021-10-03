import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as Connection,
} from 'react-router-dom';

import Community from '../../../../stores/Community/Community';
import searchImg from '../../../../static/images/Admin/Main/search.png';
import Pagination from '../../../../components/Pagination';

const dummydata = [
  {
    id: '293',
    title: 'title1',
    type: {
      korType: '사용자 인증',
    },
    writeAt: '2021-09-27',
    content: 'content1',
  },
  {
    id: '291',
    title: 'title2',
    type: {
      korType: '수업매칭서비스',
    },
    writeAt: '2021-09-27',
    content: 'content1',
  },
  {
    id: '288',
    title: 'title3',
    type: {
      korType: '수업관리서비스',
    },
    writeAt: '2021-09-27',
    content: 'content1',
  },
  {
    id: '281',
    title: 'title4',
    type: {
      korType: '기타',
    },
    writeAt: '2021-09-27',
    content: 'content1',
  },
  {
    id: '271',
    title: 'title5',
    type: {
      korType: '기타',
    },
    writeAt: '2021-09-27',
    content: 'content1',
  },
];

@inject('Community')
@observer
class Content extends Component {
  componentDidMount = () => {
    Community.getNoticeList();
  };
  render() {
    return (
      <Container>
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
        <MainBox>
          <Line title={true}>
            <Number>번호</Number>
            <Type>분류</Type>
            <Title>제목</Title>
            <Date>등록일</Date>
          </Line>

          {/* <Line>
            <Number>1</Number>
            <Title>안녕!</Title>
            <Date>2021.09.28</Date>
          </Line> */}
          {dummydata &&
            dummydata.map((item, idx) => {
              return (
                <Item>
                  <Line onClick={() => Community.dropdownHandler(item, idx)}>
                    <Number>{idx}</Number>
                    <Type>{item.type.korType}</Type>
                    <Title>{item.title}</Title>
                    <Date>{item.writeAt}</Date>
                  </Line>
                  <Answer active={idx === Community.faqDropdownState}>
                    {item.content}
                  </Answer>
                </Item>
              );
            })}
        </MainBox>
        <Pagination
          currentSet={Community.faqCurrentSet}
          currentPage={Community.faqCurrentPage}
          totalPage={Community.faqTotalPage}
        />
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
    font-size: ${(props) => (props.title ? '20' : '16')}px;
    font-weight: ${(props) => (props.title ? 'bold' : '400')};
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
`;
const Date = styled.div`
  //   border: 2px solid green;
  flex-grow: 1;
  width: 3%;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
`;
const Answer = styled.div`
  width: 100%;
  //   border: 2px solid red;
  border-bottom: 1px solid #aaaaaa;
  min-height: 200px;
  padding: 0 50px;
  box-sizing: border-box;
  display: ${(props) => (props.active ? 'block' : 'none')};
`;
