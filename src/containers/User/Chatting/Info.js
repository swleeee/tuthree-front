import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import SelectComponent from '../../../components/Select';
import TimePicker from '../../../components/TimePicker';
import TextAreaContainer from '../../../components/TextareaContainer';

@inject('Common', 'Chatting')
@observer
class Info extends React.Component {
  //   componentDidMount = () => {
  //     document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  //     console.info(document.getElementsByTagName('body'));
  //   };
  //   componentWillUnmount = () => {
  //     document.getElementsByTagName('body')[0].style.overflow = 'auto';
  //   };
  render() {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, Common, Chatting } = this.props;
    return (
      <>
        {Common.width > 767.87 ? (
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
                  <Header>과외 등록하기</Header>
                  <Main>
                    <WhenBox>
                      <Label>요일/시간</Label>
                      <Content>
                        {Chatting.selectedWeekTime &&
                          Chatting.selectedWeekTime.map((item, idx) => {
                            return (
                              <MultipleBox type="region">
                                <div>{item}</div>
                              </MultipleBox>
                            );
                          })}
                      </Content>
                    </WhenBox>

                    <BudgetBox>
                      <Label>급여</Label>
                      <Content>{Chatting.cost}</Content>
                    </BudgetBox>
                    <SubjectBox>
                      <Label>과목</Label>
                      <Content>
                        {Chatting.selectedSubject &&
                          Chatting.selectedSubject.map((item, idx) => {
                            return (
                              <MultipleBox type="subject">
                                <div>{item}</div>
                              </MultipleBox>
                            );
                          })}
                      </Content>
                    </SubjectBox>

                    <DetailBox>
                      <Label>세부사항</Label>
                      <Content content={true}>{Chatting.detailContent}</Content>
                    </DetailBox>
                    <ButtonBox>
                      <Button
                        bg="#888"
                        color="#fff"
                        onClick={() => {
                          Common.modalActive = false;
                          // Common.modalState = 1;
                        }}
                      >
                        <div>취소하기</div>
                      </Button>

                      <Button
                        onClick={() => {
                          Chatting.matchTutoring();
                        }}
                      >
                        <div>수락하기</div>
                      </Button>
                    </ButtonBox>
                  </Main>
                  {/* <Footer>
         <div
           className="close"
           onClick={(e) => {
             console.info('close');
             e.stopPropagation();
             Common.modalActive = false;
             // this.props.close();
           }}
         >
           <span>닫기</span>
         </div>
       </Footer> */}
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
                  <Header>과외 등록하기</Header>
                  <Main>
                    <WhenBox>
                      <Label>요일/시간</Label>
                      <Content>
                        {Chatting.selectedWeekTime &&
                          Chatting.selectedWeekTime.map((item, idx) => {
                            return (
                              <MultipleBox type="region">
                                <div>{item}</div>
                              </MultipleBox>
                            );
                          })}
                      </Content>
                    </WhenBox>

                    <BudgetBox>
                      <Label>급여</Label>
                      <Content>{Chatting.cost}</Content>
                    </BudgetBox>
                    <SubjectBox>
                      <Label>과목</Label>
                      <Content>
                        {Chatting.selectedSubject &&
                          Chatting.selectedSubject.map((item, idx) => {
                            return (
                              <MultipleBox type="subject">
                                <div>{item}</div>
                              </MultipleBox>
                            );
                          })}
                      </Content>
                    </SubjectBox>

                    <DetailBox>
                      <Label>세부사항</Label>
                      <Content content={true}>{Chatting.detailContent}</Content>
                    </DetailBox>
                    <ButtonBox>
                      <Button
                        bg="#888"
                        color="#fff"
                        onClick={() => {
                          Common.modalActive = false;
                          // Common.modalState = 1;
                        }}
                      >
                        <div>취소하기</div>
                      </Button>

                      <Button>
                        <div>수락하기</div>
                      </Button>
                    </ButtonBox>
                  </Main>
                  {/* <Footer>
         <div
           className="close"
           onClick={(e) => {
             console.info('close');
             e.stopPropagation();
             Common.modalActive = false;
             // this.props.close();
           }}
         >
           <span>닫기</span>
         </div>
       </Footer> */}
                </Container>
              </>
            ) : null}
          </ModalBox>
        )}
      </>
    );
  }
}

export default Info;

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

    // > button {
    //   font-size: 14px;
    //   margin: 10px 10px 0 0;
    // }
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
  height: 90%;
  margin: 0 auto;
  border-radius: 0.3rem;
  //background-color: blanchedalmond;
  //border: 1px solid blue;
  @media (min-width: 0px) and (max-width: 767.98px) {
    max-width: 100%;
    width: 85%;
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
  }
`;
const Main = styled.div`
  background-color: white;
  font-color: white;
  text-align: center;
  display: flex;

  flex-direction: column;
  //   border: 2px solid red;

  justify-content: center;
  align-items: center;
  height: 80%;
  width: 100%;
  //   font-size: 20px;
  //   font-weight: 600;
  @media (min-width: 0px) and (max-width: 767.98px) {
    height: 100%;
    font-size: 16px;
    font-weight: 600;
  }
`;
const Footer = styled.div`
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  > div {
    border-radius: 4px;
    background-color: rgba(235, 114, 82, 0.7);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
  @media (min-width: 0px) and (max-width: 767.98px) {
    height: 22px;
    // margin-top: 20px;
    > div {
      height: 22px;
      font-size: 14px;
    }
  }
`;

const WhenBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  //   border: 2px solid blue;
  margin: 20px 0 5px 0;
  width: 100%;
  @media (min-width: 0px) and (max-width: 767.98px) {
    flex-direction: column;
  }
`;
const Label = styled.div`
  width: 20%;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 100%;
    font-size: 14px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 16px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: 17px;
  }
`;
const Content = styled.div`
  width: ${(props) => (props.content ? '100' : '80')}%;
  align-self: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  //   border: 2px solid green;
  border: 1px solid #ccc;
  padding: 10px 12px;
  box-sizing: border-box;
  font-size: 14px;
  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 100%;
    flex-wrap: wrap;
    padding: 5px 8px;
    font-size: 12px;
    > span {
      margin: 0 12px 0 0;
      font-size: 12px;
    }
  }
`;

const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: none;
  background-color: #fff;
  > div {
    width: 30%;
    height: 40px;
    border-radius: 3px;
    background-color: ${(props) =>
      props.bg ? props.bg : 'rgba(235, 114, 82, 0.7)'};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => (props.color ? props.color : '#000')};
  }
  @media (min-width: 0px) and (max-width: 767.98px) {
    > div {
      width: 80px;
      height: 30px;
      font-size: 12px;
    }
  }
`;

const BudgetBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //   border: 2px solid blue;
  width: 100%;
  margin: 20px 0;
  @media (min-width: 0px) and (max-width: 767.98px) {
    flex-direction: column;
  }
`;
const SubjectBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  //   border: 2px solid blue;
  width: 100%;
  margin: 20px 0;
  @media (min-width: 0px) and (max-width: 767.98px) {
    flex-direction: column;
  }
`;
const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  //   justify-content: space-around;
  align-items: self-start;
  //   border: 2px solid blue;
  margin: 20px 0;
  width: 100%;
`;

const ButtonBox = styled.div`
  display: flex;
  width: 100%;
`;

const MultipleBox = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: ${(props) =>
    props.type === 'region' ? '#a596c4' : '#7eb1a8'};
  border-radius: 30px;
  padding: 3px 10px;
  box-sizing: border-box;
  margin-right: 5px;
  margin-bottom: 5px;

  > div {
    font-size: 12px;
    margin-right: 5px;
    color: #000;
  }
`;
