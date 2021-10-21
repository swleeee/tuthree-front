import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import ClassCard from '../../../components/ClassCard';
import ReviewContainer from '../../../components/Review';

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

@inject('MyClass', 'Auth')
@observer
class Content extends Component {
  componentDidMount = async () => {
    const { MyClass, Auth } = this.props;
    await MyClass.getClass(Auth.loggedUserId);
  };
  reviewOpenModal = () => {
    const { MyClass } = this.props;
    MyClass.reviewModalActive = false;
  };
  reviewCloseModal = () => {
    const { MyClass } = this.props;
    MyClass.reviewModalActive = true;
  };

  render() {
    const { MyClass, Auth } = this.props;
    console.info(MyClass.reviewModalActive);
    return (
      <Container>
        <Header>
          <Label>MyClass</Label>
          <SortingBox active={MyClass.status}>
            <span
              onClick={async () => {
                MyClass.status = 'OPEN';
                await MyClass.getClass(Auth.loggedUserId);
              }}
            >
              현재 수강 학생
            </span>
            <span
              onClick={async () => {
                MyClass.status = 'CLOSE';
                await MyClass.getClass(Auth.loggedUserId);
              }}
            >
              과거 수강 학생
            </span>
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
          {/* {MyClass.classAry &&
            MyClass.classAry.map((item, idx) => {
              return (
                <div
                  onClick={async () => {
                    MyClass.state = 2;
                    MyClass.teacherName = item.teacherName;
                    MyClass.studentName = item.studentName;
                    MyClass.teacherId = item.teacherId;
                    MyClass.studentId = item.studentId;
                    await MyClass.getCalendar();
                  }}
                >
                  <ClassCard
                    number={item.id}
                    id={idx}
                    type="teacher"
                    name={item.studentName}
                    date={item.date}
                    subject={item.subject}
                    active={item.acitve}
                  />
                </div>
              );
            })} */}
        </Main>
        {MyClass.reviewModalActive === true && (
          <Layer>
            <div>
              <ReviewContainer
                // width={width}
                open={this.reviewOpenModal}
                close={this.reviewCloseModal}
              />
            </div>
          </Layer>
        )}
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
  >span:nth-of-type(1){
    color: ${(props) => (props.active === 'OPEN' ? 'blue' : 'black')}; 
  }

  >span:nth-of-type(2){
    color: ${(props) => (props.active === 'CLOSE' ? 'blue' : 'black')}; 
  }
  > span {
    // color: ${(props) => (props.active ? 'blue' : 'black')}; 
    padding 0 5px;
    box-sizing: border-box;
    font-size: 15px;
  }
  @media (min-width: 0px) and (max-width: 767.98px) {
    > span {
      font-size: 11px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    > span {
      font-size: 13px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    > span {
      font-size: 14px;
    }
  }
`;

const Layer = styled.div`
  // position: absolute;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 399;
  // opacity: 0.1;
  background-color: rgba(0, 0, 0, 0.5);
  // overflow-y: scroll !important;
  // height: auto;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    // height: 100vh;
    height: 100%;
    overflow-y: scroll !important;
  }
`;
