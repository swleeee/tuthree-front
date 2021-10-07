import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
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
    Community.getFaqList(Community.faqCurrentPage);
  };
  render() {
    return (
      <Container>
        {/* <SearchBox>
          <Input
            placeholder="질문을 입력하세요."
            // onChange={(e) => AdminAuth.onUserHandler(e, 'id')}
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = '질문을 입력하세요.')}
          />
          <Search>
            <img src={searchImg} />
          </Search>
        </SearchBox> */}
        <Header>
          <Count>
            총 <span>{Community.faqListTotalCount}</span>개
          </Count>
        </Header>
        <MainBox>
          <Line title={true}>
            <Number>번호</Number>
            <Type>분류</Type>
            <Title>제목</Title>
            <Date>등록일</Date>
            <View>조회수</View>
          </Line>

          {Community.faqList &&
            Community.faqList.map((item, idx) => {
              return (
                <Item>
                  <Line onClick={() => Community.dropdownHandler(item, idx)}>
                    <Number>
                      {idx + 1 + 10 * (Community.faqCurrentPage - 1)}
                    </Number>
                    <Type>{item.type}</Type>
                    <Title>{item.title}</Title>
                    <Date>{item.writeAt}</Date>
                    <View>{item.view}</View>
                  </Line>
                  <Answer active={idx === Community.faqDropdownState}>
                    {item.content}
                  </Answer>
                </Item>
              );
            })}

          {/* {dummydata &&
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
            })} */}
        </MainBox>
        <Pagination
          type="Faq"
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
  // height: 1000px;
  //   border: 3px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  cursor: pointer;
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
    flex-grow: 2;
    width: 12%;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 15%;
  }
`;
const Date = styled.div`
  //   border: 2px solid green;
  flex-grow: 1;
  width: 3%;
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 5%;
  }
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
  padding: 10px 50px;
  box-sizing: border-box;
  display: ${(props) => (props.active ? 'block' : 'none')};
  background-color: rgba(235, 114, 82, 0.3);

  @media (min-width: 0px) and (max-width: 767.98px) {
    padding: 4px 15px;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    padding: 6px 25px;
  }
  @media (min-width: 992px) and (max-width: 1299.98px) {
    padding: 8px 35px;
  }
`;

const View = styled.div`
  width: 1%;
  flex-grow: 1;

  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 3%;
  }
`;

const Header = styled.div`
  width: 100%;
  // height: 40px;
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
