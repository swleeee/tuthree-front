import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { inject, observer } from 'mobx-react';
import MultipleToggleButton from '../../../../../components/MultipleToggleButton';
import { toJS } from 'mobx';

@inject('Common', 'MyClass')
@observer
class AnswerWriting extends Component {
  render() {
    const { open, close, header, children, width, Common, MyClass } =
      this.props;
    console.info(MyClass.totalQuestion);

    console.info(toJS(MyClass.questionAry));

    return (
      <>
        {Common.width > 991.98 ? (
          <ModalBox
            modal={open ? 'openModal modal' : 'modal'}
            style={{ display: open ? 'block' : 'none' }}
          >
            {open ? (
              <>
                <button
                  className="close"
                  onClick={(e) => {
                    console.info('close');
                    e.stopPropagation();
                    Common.modalActive = false;
                  }}
                >
                  {' '}
                  &times;{' '}
                </button>
                <Container>
                  <Header>답안지 입력</Header>
                  <Main>
                    <TotalCount>
                      <Label type="header">1. 총 문제수를 입력해주세요.</Label>
                      <Content type="header">
                        <Input
                          ml={15}
                          mr={15}
                          bd={true}
                          width={120}
                          placeholder="ex) 10"
                          onChange={(e) =>
                            MyClass.onChangeHandler(e, 'make_question')
                          }
                          onFocus={(e) => (e.target.placeholder = '')}
                          onBlur={(e) => (e.target.placeholder = 'ex) 10')}
                        />
                        <span>문제</span>
                      </Content>
                    </TotalCount>

                    <Answer>
                      <Label>2. 문제에 대한 답을 입력해주세요.</Label>
                      <Content count={MyClass.totalQuestion}>
                        {MyClass.questionAry &&
                          MyClass.questionAry.map((item, idx) => {
                            return (
                              // <SubMain>

                              <Section type="main">
                                <Number
                                  type="header"
                                  // active={
                                  //   (MyClass.questionAry.length + 1) % 2 === 1
                                  //     ? MyClass.questionAry.length >= idx + 2
                                  //     : MyClass.questionAry.length === idx + 1
                                  // }
                                >
                                  <div>{item.number}</div>
                                </Number>

                                <Choice
                                  type="main"
                                  // active={
                                  //   (MyClass.questionAry.length + 1) % 2 === 1
                                  //     ? MyClass.questionAry.length >= idx + 2
                                  //     : MyClass.questionAry.length === idx + 1
                                  // }
                                >
                                  {' '}
                                  <div>객관식</div>
                                  <MultipleToggleButton
                                    number={idx}
                                    state="type"
                                  />
                                </Choice>

                                <Choice
                                  type="main"
                                  // active={
                                  //   (MyClass.questionAry.length + 1) % 2 === 1
                                  //     ? MyClass.questionAry.length >= idx + 2
                                  //     : MyClass.questionAry.length === idx + 1
                                  // }
                                >
                                  <div>자동채점</div>
                                  <MultipleToggleButton
                                    number={idx}
                                    state="auto"
                                  />
                                </Choice>

                                {(idx + 1) % 2 === 1 ? (
                                  <AnswerInput
                                    type="headerBold"
                                    //   active={
                                    //     (MyClass.questionAry.length + 1) % 2 === 1
                                    //       ? MyClass.questionAry.length >= idx + 2
                                    //       : MyClass.questionAry.length === idx + 1
                                    //   }
                                  >
                                    <Input
                                      bd={false}
                                      width={120}
                                      height={20}
                                      placeholder="답"
                                      onChange={(e) =>
                                        MyClass.onChangeHandler(
                                          e,
                                          'make_question_answer',
                                          idx
                                        )
                                      }
                                      onFocus={(e) =>
                                        (e.target.placeholder = '')
                                      }
                                      onBlur={(e) =>
                                        (e.target.placeholder = '답')
                                      }
                                    />
                                  </AnswerInput>
                                ) : (
                                  <AnswerInput
                                    type="main"
                                    //   active={
                                    //     (MyClass.questionAry.length + 1) % 2 === 1
                                    //       ? MyClass.questionAry.length >= idx + 2
                                    //       : MyClass.questionAry.length === idx + 1
                                    //   }
                                  >
                                    <Input
                                      width={120}
                                      height={20}
                                      placeholder="답"
                                      onChange={(e) =>
                                        MyClass.onChangeHandler(
                                          e,
                                          'make_question_answer',
                                          idx
                                        )
                                      }
                                      onFocus={(e) =>
                                        (e.target.placeholder = '')
                                      }
                                      onBlur={(e) =>
                                        (e.target.placeholder = '답')
                                      }
                                    />
                                  </AnswerInput>
                                )}
                              </Section>
                              // </SubMain>
                            );
                          })}
                      </Content>
                    </Answer>
                  </Main>
                </Container>
              </>
            ) : null}
          </ModalBox>
        ) : (
          <ModalBox
            modal={open ? 'openModal modal' : 'modal'}
            style={{ display: open ? 'block' : 'none' }}
          >
            {open ? (
              <>
                <button
                  className="close"
                  onClick={(e) => {
                    console.info('close');
                    e.stopPropagation();
                    Common.modalActive = false;
                  }}
                >
                  {' '}
                  &times;{' '}
                </button>
                <Container>
                  <Header>답안지 입력</Header>
                  <Main>
                    <TotalCount>
                      <Label type="header">1. 총 문제수를 입력해주세요.</Label>
                      <Content type="header">
                        <Input
                          ml={15}
                          mr={15}
                          bd={true}
                          width={120}
                          placeholder="ex) 10"
                          onChange={(e) =>
                            MyClass.onChangeHandler(e, 'make_question')
                          }
                          onFocus={(e) => (e.target.placeholder = '')}
                          onBlur={(e) => (e.target.placeholder = 'ex) 10')}
                        />
                        <span>문제</span>
                      </Content>
                    </TotalCount>

                    <Answer>
                      <Label>2. 문제에 대한 답을 입력해주세요.</Label>
                      <Content count={MyClass.totalQuestion}>
                        {MyClass.questionAry &&
                          MyClass.questionAry.map((item, idx) => {
                            return (
                              // <SubMain>

                              <Section type="main">
                                <Number
                                  type="header"
                                  // active={
                                  //   (MyClass.questionAry.length + 1) % 2 === 1
                                  //     ? MyClass.questionAry.length >= idx + 2
                                  //     : MyClass.questionAry.length === idx + 1
                                  // }
                                >
                                  <div>{item.number}</div>
                                </Number>

                                <Choice
                                  type="main"
                                  // active={
                                  //   (MyClass.questionAry.length + 1) % 2 === 1
                                  //     ? MyClass.questionAry.length >= idx + 2
                                  //     : MyClass.questionAry.length === idx + 1
                                  // }
                                >
                                  {' '}
                                  <div>객관식</div>
                                  <MultipleToggleButton
                                    number={idx}
                                    state="type"
                                  />
                                </Choice>

                                <Choice
                                  type="main"
                                  // active={
                                  //   (MyClass.questionAry.length + 1) % 2 === 1
                                  //     ? MyClass.questionAry.length >= idx + 2
                                  //     : MyClass.questionAry.length === idx + 1
                                  // }
                                >
                                  <div>자동채점</div>
                                  <MultipleToggleButton
                                    number={idx}
                                    state="auto"
                                  />
                                </Choice>

                                {(idx + 1) % 2 === 1 ? (
                                  <AnswerInput
                                    type="headerBold"
                                    //   active={
                                    //     (MyClass.questionAry.length + 1) % 2 === 1
                                    //       ? MyClass.questionAry.length >= idx + 2
                                    //       : MyClass.questionAry.length === idx + 1
                                    //   }
                                  >
                                    <Input
                                      bd={false}
                                      width={120}
                                      height={20}
                                      placeholder="답"
                                      onChange={(e) =>
                                        MyClass.onChangeHandler(
                                          e,
                                          'make_question_answer',
                                          idx
                                        )
                                      }
                                      onFocus={(e) =>
                                        (e.target.placeholder = '')
                                      }
                                      onBlur={(e) =>
                                        (e.target.placeholder = '답')
                                      }
                                    />
                                  </AnswerInput>
                                ) : (
                                  <AnswerInput
                                    type="main"
                                    //   active={
                                    //     (MyClass.questionAry.length + 1) % 2 === 1
                                    //       ? MyClass.questionAry.length >= idx + 2
                                    //       : MyClass.questionAry.length === idx + 1
                                    //   }
                                  >
                                    <Input
                                      width={120}
                                      height={20}
                                      placeholder="답"
                                      onChange={(e) =>
                                        MyClass.onChangeHandler(
                                          e,
                                          'make_question_answer',
                                          idx
                                        )
                                      }
                                      onFocus={(e) =>
                                        (e.target.placeholder = '')
                                      }
                                      onBlur={(e) =>
                                        (e.target.placeholder = '답')
                                      }
                                    />
                                  </AnswerInput>
                                )}
                              </Section>
                              // </SubMain>
                            );
                          })}
                      </Content>
                    </Answer>
                  </Main>
                </Container>
              </>
            ) : null}
          </ModalBox>
        )}
      </>
    );
  }
}

export default AnswerWriting;

const ModalBox = styled.div`
  // display: none;
  //   position: fixed;
  //top: 40%;
  //right: 14%;
  // bottom: 0;
  // left: 0;
  z-index: 101;
  background-color: white;
  //   height: 635px;
  //   height: 800px;
  padding-bottom: 30px;
  box-sizing: border-box;
  width: 80%;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 40%);
  border-radius: 10px;
  //   max-height: 75vh;
  //   top: 0;
  overflow-y: scroll !important;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  > button {
    outline: none;
    cursor: pointer;
    border: 0;
    font-size: 21px;
    font-weight: 700;
    //margin-left: 10px;
    margin: 10px 10px 0 0;
    float: right;
    color: #000000;
    border-radius: 50%;
    background-color: #f1f1f1;
  }
  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 95%;
    // position: fixed;
    // z-index: 101;
    // height: 150px;
    // width: 90%;

    > button {
      // font-size: 14px;
      margin: 5px 5px 0 0;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
  }
  @media (min-width: 992px) and (max-width: 1299.98px) {
  }
  @media (min-width: 1300px) {
  }
`;

const Container = styled.div`
  max-width: 900px;
  width: 90%;
  //   height: 90%;
  //   height: 500px;
  min-height: 400px;

  margin: 0 auto;
  border-radius: 0.3rem;
  //background-color: blanchedalmond;
  //border: 1px solid blue;
  @media (min-width: 0px) and (max-width: 767.98px) {
    max-width: 100%;
    width: 90%;
    height: 40%;
  }
`;

const Header = styled.div`
  position: relative;
  padding: 16px;
  //padding-top: 0;
  //background-color: #f1f1f1;
  font-weight: 700;
  // margin-bottom: 30px;
  text-align: center;
  border-bottom: 2px solid #333;
  font-size: 30px;
  @media (min-width: 0px) and (max-width: 767.98px) {
    position: relative;
    padding: 8px;
    font-weight: 700;
    font-size: 22px;
    margin-top: 30px;
  }
`;
const Main = styled.div`
  background-color: white;
  font-color: white;

  display: flex;

  flex-direction: column;

  justify-content: center;

  height: 80%;
  width: 100%;
  margin-top: 10px;

  @media (min-width: 0px) and (max-width: 767.98px) {
    height: 100%;
    font-size: 16px;
    font-weight: 600;
  }
`;
const TotalCount = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;
const Label = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: ${(props) => (props.type === 'header' ? '0' : '10')}px;

  @media (min-width: 0px) and (max-width: 767.98px) {
    font-size: 13px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 15px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: 17px;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border: ${(props) =>
    props.type === 'header'
      ? 'none'
      : props.count && props.count != 0
      ? '2px solid #000'
      : 'none'};
  > span {
    font-size: 16px;
    font-weight: 500;
  }
  @media (min-width: 0px) and (max-width: 767.98px) {
    > span {
      font-size: 12px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    > span {
      font-size: 14px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    > span {
      font-size: 15px;
    }
  }
`;

const Answer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  border: ${(props) => (props.bd ? '1px solid #c7c7c7' : 'none')};
  // padding-bottom: 18px;
  outline: none;
  font-size: 15px;
  //   width: 100%;
  width: 100px;
  box-sizing: border-box;
  display: ${(props) => (props.domainType === 1 ? 'none' : 'block')};
  padding: 0 10px;

  ::placeholder {
    font-size: 12px;
    text-align: left;
  }
  :focus {
  }
  @media (min-width: 0px) and (max-width: 767.98px) {
    font-size: 12px;
    height: ${(props) => (props.height ? props.height : '24')}px;
    width: ${(props) => (props.width ? props.width - 30 : '100')}px;
    padding: 0 8px;
    margin-left: ${(props) => (props.ml ? props.ml : '0')}px;
    margin-right: ${(props) => (props.mr ? props.mr : '0')}px;
    ::placeholder {
      font-size: 10px;
      text-align: left;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: ${(props) => (props.width ? props.width - 15 : '100')}px;
    height: ${(props) => (props.height ? props.height : '26')}px;
    margin-left: ${(props) => (props.ml ? props.ml : '0')}px;
    margin-right: ${(props) => (props.mr ? props.mr : '0')}px;
  }
  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: ${(props) => (props.width ? props.width - 15 : '100')}px;
    height: ${(props) => (props.height ? props.height : '28')}px;
    margin-left: ${(props) => (props.ml ? props.ml : '0')}px;
    margin-right: ${(props) => (props.mr ? props.mr : '0')}px;
  }
  @media (min-width: 1300px) {
    width: ${(props) => (props.width ? props.width : '100')}px;
    height: ${(props) => (props.height ? props.height : '30')}px;
    margin-left: ${(props) => (props.ml ? props.ml : '0')}px;
    margin-right: ${(props) => (props.mr ? props.mr : '0')}px;
  }
`;

const Section = styled.div`
  display: flex;
  width: ${(props) => (props.type === 'header' ? '100%' : '50%')};
  align-items: center;
  //   border: 2px solid black;

  box-sizing: border-box;

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 100%;
  }
`;
const Number = styled.div`
  padding: 3px 5px;
  height: 25px;
  //   width: ${(props) => (props.type === 'header' ? '60%' : '55%')};
  width: 10%;
  display: flex;
  justify-content: flex-start;
  //   border: 2px solid green;
  border-right: ${(props) =>
    props.type === 'header' ? '1px solid #000' : 'none'};
  border-bottom: ${(props) => (props.active ? 'none' : '1px solid #707070')};
  font-size: 14px;

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 10%;
    font-size: 10px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 6%;
    font-size: 12px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 6%;
    font-size: 13px;
  }
`;
const Choice = styled.div`
  padding: 3px 5px;
  //   width: ${(props) => (props.type === 'header' ? '20%' : '18%')};
  width: 30%;
  height: 25px;
  display: flex;
  font-size: 14px;
  border-right: 1px solid #000;
  border-bottom: ${(props) => (props.active ? 'none' : '1px solid #707070')};
  justify-content: space-between;
  > div:nth-of-type(1) {
    min-width: 45px;
  }
  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 15%;
    font-size: 10px;
    flex-direction: column;
    min-width: 50px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    // width: 2%;
    font-size: 12px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: 13px;
  }
`;
const AnswerInput = styled.div`
  padding: 3px 5px;
  //   width: ${(props) => (props.type === 'header' ? '20%' : '19%')};
  width: 38%;
  border-right: ${(props) =>
    props.type === 'header'
      ? '1px solid #000'
      : props.type === 'headerBold'
      ? '2px solid #000'
      : 'none'};
  border-bottom: ${(props) => (props.active ? 'none' : '1px solid #707070')};
  box-sizing: border-box;
  height: 32px;
  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 50%;
    border-right: none;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 38%;
    border-right: none;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 35%;
  }
`;
