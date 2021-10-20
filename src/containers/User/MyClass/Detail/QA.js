import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import AnswerWriting from './Writing/AnswerWriting';
import deleteImg from '../../../../static/images/Signup/delete.png';

const dummyData = [
  { id: 1, title: '2021-2학기 모의고사 문제지', file: 'werrfewfefewf' },
  { id: 2, title: '2021-2학기 모의고사 문제지', file: 'werrfewfefewf' },
  { id: 3, title: '2021-2학기 모의고사 문제지', file: 'werrfewfefewf' },
  { id: 4, title: '2021-2학기 모의고사 문제지', file: 'werrfewfefewf' },
  {
    id: 5,
    title: '2021-2학기 모의고사 문제지dsfsdfdfd',
    file: 'werrfewfefewf',
  },
  { id: 6, title: '2021-2학기 모의고사 문제지', file: 'werrfewfefewf' },
  { id: 7, title: '2021-2학기 모의고사 문제지', file: 'werrfewfefewf' },
  { id: 8, title: '2021-2학기 모의고사 문제지', file: 'werrfewfefewf' },
  { id: 9, title: '2021-2학기 모의고사 문제지', file: 'werrfewfefewf' },
  //   { id: 10, title: '2021-2학기 모의고사 문제지', file: 'werrfewfefewf' },
];

@inject('MyClass', 'Common')
@observer
class Content extends Component {
  constructor(props) {
    super(props);
    this.file = React.createRef();
  }
  componentDidMount = () => {
    const { MyClass } = this.props;
    MyClass.getQuestionList();
  };
  componentWillUnmount = () => {
    const { MyClass } = this.props;
    console.info('un2');
    // MyClass.state = 1;
  };
  openModal = () => {
    const { Common } = this.props;
    Common.modalActive = false;
  };
  closeModal = () => {
    const { Common } = this.props;
    Common.modalActive = true;
  };

  handleFileChange = (event) => {
    console.info(event.target.files[0]);
  };

  // formData라는 instance에 담아 보냄
  handleFileUpload = () => {
    // const formData = new FormData();
    // formData.append("userfile", selectedFile, selectedFile.name);
    // axios.post("api/uploadfile", formData)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };
  render() {
    const { MyClass, Common } = this.props;
    return (
      <Container>
        {Common.modalActive === true && Common.modalState === 1 && (
          <Layer>
            <div>
              <AnswerWriting
                // width={width}
                open={this.openModal}
                close={this.closeModal}
              />
            </div>
          </Layer>
        )}

        <ButtonBox>
          <input
            type="file"
            // multiple={'multiple'}
            fileName={'fileName[]'}
            style={{ display: 'none' }}
            onChange={(e) => MyClass.onChangeHandler(e, 'set_question')}
            id="inputFile"
            ref={this.file}
            value=""
            // placeholder={'파일을 선택해 주세요.'}
          />

          <Button
            width={160}
            onClick={() => {
              // console.info('click');
              // this.handleFileUpload();
              this.file.current.click();
            }}
          >
            <div>문제지 업로드</div>
          </Button>
        </ButtonBox>
        <Table>
          <Header>
            <Section>
              <Question type="header">
                <div>문제지</div>
              </Question>
              <Answer type="header">
                <div>답안지</div>
              </Answer>
              <TuteeAnswer type="headerBold">
                <div>학생 답안</div>
              </TuteeAnswer>
            </Section>

            {/* <Section>
                  <Question type="header">
                    <div>문제지</div>
                  </Question>
                  <Answer type="header">
                    <div>답안지</div>
                  </Answer>
                  <TuteeAnswer>
                    <div>학생 답안</div>
                  </TuteeAnswer>
                </Section> */}
          </Header>
          <Main>
            {/* {dummyData &&
                  dummyData.map((item, idx) => {
                    console.info(dummyData.length);
                    console.info(idx);
                    if ((dummyData.length + 1) % 2 === 1) {
                      console.info(dummyData.length >= idx + 2);
                    } else {
                      console.info(dummyData.length === idx + 1);
                    }

                    return (
                      // <SubMain>

                      <Section type="main">
                        <Question
                          type="header"
                          active={
                            (dummyData.length + 1) % 2 === 1
                              ? dummyData.length >= idx + 2
                              : dummyData.length === idx + 1
                          }
                        >
                          <div>{item.title}</div>
                        </Question>
                        <Answer
                          type="main"
                          active={
                            (dummyData.length + 1) % 2 === 1
                              ? dummyData.length >= idx + 2
                              : dummyData.length === idx + 1
                          }
                        >
                          <div
                            onClick={() => {
                              Common.modalActive = true;
                            }}
                          >
                            <div>제출</div>
                          </div>
                        </Answer>
                        {(idx + 1) % 2 === 1 ? (
                          <TuteeAnswer
                            type="headerBold"
                            active={
                              (dummyData.length + 1) % 2 === 1
                                ? dummyData.length >= idx + 2
                                : dummyData.length === idx + 1
                            }
                          >
                            <div>b</div>
                          </TuteeAnswer>
                        ) : (
                          <TuteeAnswer
                            type="main"
                            active={
                              (dummyData.length + 1) % 2 === 1
                                ? dummyData.length >= idx + 2
                                : dummyData.length === idx + 1
                            }
                          >
                            <div>b</div>
                          </TuteeAnswer>
                        )} */}

            {MyClass.questionTotalList &&
              MyClass.questionTotalList.map((item, idx) => {
                console.info(MyClass.questionTotalList.length);
                console.info(idx);
                if ((MyClass.questionTotalList.length + 1) % 2 === 1) {
                  console.info(MyClass.questionTotalList.length >= idx + 2);
                } else {
                  console.info(MyClass.questionTotalList.length === idx + 1);
                }

                return (
                  // <SubMain>

                  <Section type="main">
                    <Question
                      type="header"
                      active={
                        (MyClass.questionTotalList.length + 1) % 2 === 1
                          ? MyClass.questionTotalList.length >= idx + 2
                          : MyClass.questionTotalList.length === idx + 1
                      }
                    >
                      <div
                        onClick={() => {
                          console.info(item.file);
                          // var byteArray = new Uint8Array(item.file);
                          // var byteArray = item.file.arrayBuffer();
                          // console.info(byteArray);

                          const blob = new Blob([item.file], {
                            type: 'application/json',
                          });
                          let file = new File([blob], item.title);
                          console.info(blob);
                          console.info(file);
                          const url = window.URL.createObjectURL(blob);
                          console.info(url);
                          const a = document.createElement('a');
                          a.href = url;
                          a.setAttribute('download', `${item.title}`);

                          // window.open(url);
                          // // a.href = `${url}`;
                          // // a.download = `${url}`;
                          a.click();
                          a.remove();
                          window.URL.revokeObjectURL(url);
                        }}
                      >
                        {item.title}
                      </div>
                      <img
                        src={deleteImg}
                        onClick={() => {
                          console.info(item.id);
                          MyClass.delQuestion(item.id);
                        }}
                      />
                    </Question>
                    <Answer
                      type="main"
                      active={
                        (MyClass.questionTotalList.length + 1) % 2 === 1
                          ? MyClass.questionTotalList.length >= idx + 2
                          : MyClass.questionTotalList.length === idx + 1
                      }
                    >
                      <div
                        onClick={() => {
                          Common.modalActive = true;
                        }}
                      >
                        <div>제출</div>
                      </div>
                    </Answer>

                    <TuteeAnswer
                      type="headerBold"
                      active={
                        (MyClass.questionTotalList.length + 1) % 2 === 1
                          ? MyClass.questionTotalList.length >= idx + 2
                          : MyClass.questionTotalList.length === idx + 1
                      }
                    >
                      <div>b</div>
                    </TuteeAnswer>

                    {/* <TuteeAnswer
                        type="main"
                        active={
                          (MyClass.questionTotalList.length + 1) % 2 === 1
                            ? MyClass.questionTotalList.length >= idx + 2
                            : MyClass.questionTotalList.length === idx + 1
                        }
                      >
                        <div>b</div>
                      </TuteeAnswer> */}
                  </Section>
                  // </SubMain>
                );
              })}
          </Main>
        </Table>
      </Container>
    );
  }
}

export default Content;

const Container = styled.div`
  // height: 100%;
  display: flex;
  flex-direction: column;
  //   margin: 100px 0;
  width: 100%;
  //   border: 2px solid black;
  //   border-bottom:  1px solid black;
`;
const Table = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  // div {
  //   font-size: 16px;
  // }

  // @media (min-width: 0px) and (max-width: 767.98px) {
  //   div {
  //     font-size: 12px;
  //   }
  // }
  // @media (min-width: 768px) and (max-width: 991.98px) {
  //   div {
  //     font-size: 14px;
  //   }
  // }

  // @media (min-width: 992px) and (max-width: 1299.98px) {
  //   div {
  //     font-size: 15px;
  //   }
  // }
`;
const Header = styled.div`
  display: flex;
  width: 100%;
  //   border: 2px solid blue;
  background-color: rgba(103, 46, 30, 0.85);
  border-bottom: 1px solid #000;
  div {
    color: #fff;
    font-size: 16px;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    div {
      font-size: 12px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    div {
      font-size: 14px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    div {
      font-size: 15px;
    }
  }
`;
const Section = styled.div`
  display: flex;
  width: ${(props) => (props.type === 'header' ? '100%' : '100%')};
  //   border: 2px solid black;
  border-bottom: ${(props) =>
    props.type === 'main' ? '1px solid #707070' : 'none'};
  box-sizing: border-box;

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 100%;
  }
`;
const Question = styled.div`
  padding: 3px 8px;
  //   width: ${(props) => (props.type === 'header' ? '60%' : '55%')};
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //   border: 2px solid green;
  border-right: ${(props) =>
    props.type === 'header' ? '1px solid #000' : 'none'};
  border-bottom: ${(props) => (props.active ? 'none' : '1px solid #707070')};

  > img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  > div {
    font-size: 16px;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 50%;
    > img {
      width: 15px;
      height: 15px;
    }
    > div {
      font-size: 12px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 54%;
    > img {
      width: 17px;
      height: 17px;
    }
    > div {
      font-size: 14px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    > img {
      width: 18px;
      height: 18px;
    }
    > div {
      font-size: 15px;
    }
  }
`;
const Answer = styled.div`
  padding: 3px 8px;
  //   width: ${(props) => (props.type === 'header' ? '20%' : '18%')};
  width: 20%;
  display: flex;
  align-items: center;
  // justify-content: ${(props) =>
    props.type === 'main' ? 'center' : 'flex-start'};

  border-right: 1px solid #000;
  border-bottom: ${(props) => (props.active ? 'none' : '1px solid #707070')};

  > div {
    // border: 1px solid #707070;
    // height: 100%;
    width: ${(props) => (props.type === 'main' ? '50px' : '')};
    height: ${(props) => (props.type === 'main' ? '20px' : '')};
    border-radius: ${(props) => (props.type === 'main' ? '15px' : '')};
    background-color: ${(props) =>
      props.type === 'main' ? 'rgba(0, 85, 255, 0.6)' : ''};
    color: ${(props) => (props.type === 'main' ? '#000' : '#fff')};
    display: ${(props) => (props.type === 'main' ? 'flex' : 'block')};
    justify-content: center;
    align-items: center;
    padding: ${(props) => (props.type === 'main' ? '3px 8px' : '')};
    box-sizing: border-box;
    font-size: ${(props) => (props.type === 'main' ? '14px' : '16px')};
    cursor: ${(props) => (props.type === 'main' ? 'pointer' : 'initial')};
  }
  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 25%;

    > div {
      width: ${(props) => (props.type === 'main' ? '42px' : '')};
      height: ${(props) => (props.type === 'main' ? '16px' : '')};
      font-size: ${(props) => (props.type === 'main' ? '10px' : '12px')};
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 23%;
    > div {
      width: ${(props) => (props.type === 'main' ? '45px' : '')};
      height: ${(props) => (props.type === 'main' ? '18px' : '')};
      font-size: ${(props) => (props.type === 'main' ? '12px' : '14px')};
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    > div {
      width: ${(props) => (props.type === 'main' ? '48px' : '')};
      height: ${(props) => (props.type === 'main' ? '20px' : '')};
      font-size: ${(props) => (props.type === 'main' ? '13px' : '15px')};
    }
  }
`;
const TuteeAnswer = styled.div`
  padding: 3px 8px;
  //   width: ${(props) => (props.type === 'header' ? '20%' : '19%')};
  width: 20%;
  border-right: ${(props) =>
    props.type === 'header'
      ? '1px solid #000'
      : props.type === 'headerBold'
      ? '2px solid #000'
      : 'none'};
  border-bottom: ${(props) => (props.active ? 'none' : '1px solid #707070')};
  box-sizing: border-box;
  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 25%;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 23%;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
  }
`;
const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SubMain = styled.div`
  display: flex;
  border: 2px solid red;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.button`
  width: ${(props) => (props.width ? props.width : '120')}px;
  height: 36px;
  background-color: rgba(235, 114, 82, 1);
  color: #fff;
  border: none;
  margin: 0 5px;
  margin-right: ${(props) => (props.last ? '5px' : '')};
  border-radius: 5px;
  margin-bottom: 10px;
  > div {
    font-size: 15px;
    font-weight: bold;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: ${(props) => (props.width ? props.width - 40 : '120')}px;
    > div {
      font-size: 12px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: ${(props) => (props.width ? props.width - 30 : '120')}px;
    > div {
      font-size: 13px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: ${(props) => (props.width ? props.width - 20 : '120')}px;
    > div {
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
