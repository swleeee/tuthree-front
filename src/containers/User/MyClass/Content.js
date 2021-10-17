import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import ClassCard from '../../../components/ClassCard';

const dummyData = [
  {
    id: 143,
    name: '김길동',
    subject: ['영어', '수학'],
    start_Dt: '2021-09-22',
    active: false,
  },
  {
    id: 27234,
    name: '김길동',
    subject: ['영어', '수학'],
    start_Dt: '2021-09-22',
    active: false,
  },
  {
    id: 3234,
    name: '김길동',
    subject: ['영어', '수학'],
    start_Dt: '2021-09-22',
    active: false,
  },
  {
    id: 427,
    name: '김길동',
    subject: ['영어', '수학'],
    start_Dt: '2021-09-22',
    active: false,
  },
  {
    id: 527,
    name: '김길동',
    subject: ['영어', '수학'],
    start_Dt: '2021-09-22',
    active: false,
  },
  {
    id: 276,
    name: '김길동',
    subject: ['영어', '수학'],
    start_Dt: '2021-09-22',
    active: false,
  },
  {
    id: 72534,
    name: '김길동',
    subject: ['영어', '수학'],
    start_Dt: '2021-09-22',
    active: false,
  },
  {
    id: 8234,
    name: '김길동',
    subject: ['영어', '수학'],
    start_Dt: '2021-09-22',
    active: false,
  },
  {
    id: 8234,
    name: '김길동',
    subject: ['영어', '수학'],
    start_Dt: '2021-09-22',
    active: false,
  },
  {
    id: 8234,
    name: '김길동',
    subject: ['영어', '수학'],
    start_Dt: '2021-09-22',
    active: false,
  },
  {
    id: 8234,
    name: '김길동',
    subject: ['영어', '수학'],
    start_Dt: '2021-09-22',
    active: false,
  },
];

@inject('MyClass')
@observer
class Content extends Component {
  render() {
    const { MyClass } = this.props;
    return (
      <Container>
        <Header>
          <Label>MyClass</Label>
          <SortingBox>
            <span>현재 수강 학생</span>
            <span>과거 수강 학생</span>
          </SortingBox>
        </Header>
        <Main>
          {dummyData.map((item, idx) => {
            return (
              <div onClick={() => (MyClass.state = 2)}>
                <ClassCard
                  number={item.id}
                  id={idx}
                  type="teacher"
                  name={item.name}
                  date={item.start_Dt}
                  subject={item.subject}
                  active={item.acitve}
                />
              </div>
            );
          })}
        </Main>
      </Container>
    );
  }
}

export default Content;

const Container = styled.div`
  margin: 100px 0;
  width: 100%;
  //   height: 1000px;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid #000;
  padding-bottom: 10px;
  box-sizing: border-box;

  @media (min-width: 0px) and (max-width: 767.98px) {
    padding-bottom: 5px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
  }
`;
const Label = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
const Main = styled.div`
  display: inline-flex;
  //   flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 24px;
  flex-flow: row wrap;
  //   &:after {
  //     content: '';
  //     flex: auto;
  //   }
  flex-flow: row wrap;
  padding: 0 15px; /* NEW */

  //   @media (min-width: 0px) and (max-width: 591.98px) {
  //     justify-content: center;
  //     > div {
  //       width: 100%;
  //     }
  //     // &:after {
  //     //   height: 0;
  //     //   width: 30%;
  //     //   content: '';
  //     // }
  //   }

  @media (min-width: 0px) and (max-width: 767.98px) {
    > div {
      //   width: 80%;
      width: 100%;
    }
    // &:after {
    //   height: 0;
    //   width: 100%;
    //   content: '';
    // }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
  }

  @media (min-width: 1300px) {
    &:after {
      height: 0;
      width: 30%;
      content: '';
    }
  }
`;

const SortingBox = styled.div`
> span:not(:last-child) {
    border-right: 1px solid #888;
}
  > span {
    
    padding 0 5px;
    box-sizing: border-box;
    font-size: 15px;
  }
  @media (min-width: 0px) and (max-width: 767.98px) {
    >span{
        font-size: 11px;
    }
}
  @media (min-width: 768px) and (max-width: 991.98px) {
    
    >span{
        font-size: 13px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    >span{
        font-size: 14px;
    }
  }
`;
