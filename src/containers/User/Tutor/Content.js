import React, { Component } from 'react';
import styled from 'styled-components';
import Filter from '../../../components/Filter';
import Card from '../../../components/Card';

const dummyData = [
  {
    id: 1,
    name: '김길동',
    school: '가천대학교 컴퓨터공학과',
    subject: '영어, 수학',
    location: '서울시 강남구',
    budget: '30만원',
    recruitment: '모집중',
  },
  {
    id: 1,
    name: '김길동',
    school: '가천대학교 컴퓨터공학과',
    subject: '영어, 수학',
    location: '서울시 강남구',
    budget: '30만원',
    recruitment: '모집중',
  },
  {
    id: 1,
    name: '김길동',
    school: '가천대학교 컴퓨터공학과',
    subject: '영어, 수학',
    location: '서울시 강남구',
    budget: '30만원',
    recruitment: '모집중',
  },
  {
    id: 1,
    name: '김길동',
    school: '가천대학교 컴퓨터공학과',
    subject: '영어, 수학',
    location: '서울시 강남구',
    budget: '30만원',
    recruitment: '모집중',
  },
  {
    id: 1,
    name: '김길동',
    school: '가천대학교 컴퓨터공학과',
    subject: '영어, 수학',
    location: '서울시 강남구',
    budget: '30만원',
    recruitment: '모집중',
  },
  {
    id: 1,
    name: '김길동',
    school: '가천대학교 컴퓨터공학과',
    subject: '영어, 수학',
    location: '서울시 강남구',
    budget: '30만원',
    recruitment: '모집중',
  },
  {
    id: 1,
    name: '김길동',
    school: '가천대학교 컴퓨터공학과',
    subject: '영어, 수학',
    location: '서울시 강남구',
    budget: '30만원',
    recruitment: '모집중',
  },
  {
    id: 1,
    name: '김길동',
    school: '가천대학교 컴퓨터공학과',
    subject: '영어, 수학',
    location: '서울시 강남구',
    budget: '30만원',
    recruitment: '모집중',
  },
  {
    id: 1,
    name: '김길동',
    school: '가천대학교 컴퓨터공학과',
    subject: '영어, 수학',
    location: '서울시 강남구',
    budget: '30만원',
    recruitment: '모집중',
  },
  {
    id: 1,
    name: '김길동',
    school: '가천대학교 컴퓨터공학과',
    subject: '영어, 수학',
    location: '서울시 강남구',
    budget: '30만원',
    recruitment: '모집중',
  },
  {
    id: 1,
    name: '김길동',
    school: '가천대학교 컴퓨터공학과',
    subject: '영어, 수학',
    location: '서울시 강남구',
    budget: '30만원',
    recruitment: '모집중',
  },
  {
    id: 1,
    name: '김길동',
    school: '가천대학교 컴퓨터공학과',
    subject: '영어, 수학',
    location: '서울시 강남구',
    budget: '30만원',
    recruitment: '모집중',
  },
];

class Content extends Component {
  render() {
    return (
      <Container>
        <Name>과외 선생님 찾기</Name>
        <Filter type="tutor" />
        <MainBox>
          <Header>303명의 선생님이 있습니다.</Header>
          {dummyData.map((item, idx) => {
            return (
              <Card
                name={item.name}
                rating={item.rating}
                school={item.school}
                subject={item.subject}
                location={item.location}
                budget={item.budget}
                recruitment={item.recruitment}
              />
            );
          })}
        </MainBox>
      </Container>
    );
  }
}

export default Content;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;
const Name = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 50px;
`;
const MainBox = styled.div``;
const Header = styled.div``;
