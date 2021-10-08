import React, { Component } from 'react';
import styled from 'styled-components';
import Filter from '../../../components/Filter';
import Card from '../../../components/Card';

const dummyData = [
  {
    id: 1,
    name: '김길동',
    school: '가천대학교 컴퓨터공학과',
    gender: 'MALE',
    subject: '영어, 수학',
    location: '서울시 강남구',
    budget: '30만원',
    rating: 3,
    registration: 'CLOSE',
  },
  {
    id: 1,
    name: '김길동',
    school: '가천대학교 컴퓨터공학과',
    gender: 'MALE',
    subject: '영어, 수학',
    location: '서울시 강남구',
    budget: '30만원',
    rating: 4.1,
    registration: 'CLOSE',
  },
  {
    id: 1,
    name: '김길동',
    school: '가천대학교 컴퓨터공학과',
    gender: 'MALE',
    subject: '영어, 수학',
    location: '서울시 강남구',
    budget: '30만원',
    rating: 4.7,
    registration: 'CLOSE',
  },
  {
    id: 1,
    name: '김길동',
    school: '가천대학교 컴퓨터공학과',
    gender: 'FEMALE',
    subject: '영어, 수학',
    location: '서울시 강남구',
    budget: '30만원',
    rating: 4.7,
    registration: 'CLOSE',
  },
  {
    id: 1,
    name: '김길동',
    gender: 'MALE',
    school: '가천대학교 컴퓨터공학과',
    subject: '영어, 수학',
    location: '서울시 강남구',
    budget: '30만원',
    rating: 4.7,
    registration: 'CLOSE',
  },
  {
    id: 1,
    name: '김길동',
    gender: 'FEMALE',
    school: '가천대학교 컴퓨터공학과',
    subject: '영어, 수학',
    location: '서울시 강남구',
    budget: '30만원',
    rating: 4.7,
    registration: 'CLOSE',
  },
  {
    id: 1,
    name: '김길동',
    gender: 'MALE',
    school: '가천대학교 컴퓨터공학과',
    subject: '영어, 수학',
    location: '서울시 강남구',
    budget: '30만원',
    rating: 4.7,
    registration: 'CLOSE',
  },
  {
    id: 1,
    name: '김길동',
    gender: 'FEMALE',
    school: '가천대학교 컴퓨터공학과',
    subject: '영어, 수학',
    location: '서울시 강남구',
    budget: '30만원',
    rating: 4.7,
    registration: 'CLOSE',
  },
  {
    id: 1,
    name: '김길동',
    gender: 'MALE',
    school: '가천대학교 컴퓨터공학과',
    subject: '영어, 수학',
    location: '서울시 강남구',
    budget: '30만원',
    rating: 4.7,
    registration: 'OPEN',
  },
  {
    id: 1,
    name: '김길동',
    gender: 'MALE',
    school: '가천대학교 컴퓨터공학과',
    subject: '영어, 수학',
    location: '서울시 강남구',
    budget: '30만원',
    rating: 4.7,
    registration: 'OPEN',
  },
  {
    id: 1,
    name: '김길동',
    gender: 'MALE',
    school: '가천대학교 컴퓨터공학과',
    subject: '영어, 수학',
    location: '서울시 강남구',
    budget: '30만원',
    rating: 4.7,
    registration: 'CLOSE',
  },
  {
    id: 1,
    name: '김길동',
    gender: 'FEMALE',
    school: '가천대학교 컴퓨터공학과',
    subject: '영어, 수학',
    location: '서울시 강남구',
    budget: '30만원',
    rating: 4.7,
    registration: 'CLOSE',
  },
];

class Content extends Component {
  render() {
    return (
      <Container>
        <Name>과외 선생님 찾기</Name>
        <Filter type="tutor" />
        <MainBox>
          <Header>
            <span>303명</span>의 선생님이 있습니다.
          </Header>
          <CardContainer>
            {dummyData.map((item, idx) => {
              return (
                <Card
                  type="teacher"
                  name={item.name}
                  gender={item.gender}
                  rating={item.rating}
                  school={item.school}
                  subject={item.subject}
                  location={item.location}
                  budget={item.budget}
                  registration={item.registration}
                />
              );
            })}
          </CardContainer>
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
  justify-content: center;
  margin: 100px 0;
`;
const Name = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 50px;

  @media (min-width: 0px) and (max-width: 767.98px) {
    font-size: 22px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 24px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: 26px;
  }
`;
const MainBox = styled.div`
  margin-top: 50px;
  width: 100%;
`;
const Header = styled.div`
  border-bottom: 1px solid #707070;
  padding-bottom: 10px;
  margin-bottom: 27px;
  font-size: 20px;
  > span {
    font-weight: bold;
  }
  @media (min-width: 0px) and (max-width: 767.98px) {
    font-size: 16px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 18px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: 19px;
  }
`;

const CardContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 0px) and (max-width: 767.98px) {
    justify-content: center;
  }
`;
