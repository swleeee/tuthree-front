import React from 'react';
import styled, { keyframes } from 'styled-components';
import { inject, observer } from 'mobx-react';
import SelectComponent from '../../../components/Select';
import SubjectList from '../../../subject.json';
import deleteImg from '../../../static/images/Signup/delete.png';
import TimePicker from '../../../components/TimePicker';
import addImg from '../../../static/images/Common/add.png';
import TextAreaContainer from '../../../components/TextareaContainer';

const mobileCustomStyles = {
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: '#000',
      fontSize: 12,
      //   fontWeight: 'normal',
    };
  },
  dropdownIndicator: () => ({
    backgroundColor: '#fff',
    color: '#000',
    width: 16,
    height: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#000000' : '#999999',
    backgroundColor: '#fff',
    borderRadius: 0,
    padding: 12,
    fontSize: 12,
  }),
  control: () => ({
    fontSize: 12,
    lineHeight: 1.2,
    border: '1px solid #c7c7c7',
    display: 'flex',
    height: '100%',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;

    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

const customStyles = {
  dropdownIndicator: () => ({
    backgroundColor: '#fff',
    color: '#000',
    width: 30,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#000000' : '#999999',
    backgroundColor: '#fff',
    borderRadius: 0,
    padding: 14,
    fontSize: 14,
    cursor: 'pointer',
  }),
  control: () => ({
    fontSize: 14,
    lineHeight: 1.2,
    border: '1px solid #c7c7c7',
    display: 'flex',
    height: '100%',
    cursor: 'pointer',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

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
    const { open, close, header, children, width, Common, Chatting } =
      this.props;
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
                      <Button bg="#888" color="#fff">
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
                      <Button bg="#888" color="#fff">
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
const Weekend = styled.div``;
const Time = styled.div`
  position: relative;
  //   > div {
  //     position: absolute;
  //     font-size: 10px;
  //     // left: 15px;
  //     right: 15px;
  //     top: -15px;
  //   }
`;
const TimeLabel = styled.div`
  position: absolute;
  font-size: 10px;
  left: ${(props) => (props.type === 'start' ? '15px' : 'inherit')};
  right: ${(props) => (props.type === 'end' ? '15px' : 'inherit')};
  top: -15px;
  color: blue;
  @media (min-width: 0px) and (max-width: 767.98px) {
    left: ${(props) => (props.type === 'start' ? '5px' : 'inherit')};
    right: ${(props) => (props.type === 'end' ? '5px' : 'inherit')};
  }
}
`;

const Button = styled.button`
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
const SelectedArea = styled.div`
  width: 600px;
  //   height: 60px;
  height: auto;
  //   border: 1px solid #c7c7c7;
  padding: 5px 8px;
  box-sizing: border-box;

  > div {
    display: inline-flex;
    align-items: center;
    background-color: #aaaaaa;
    border-radius: 30px;
    padding: 3px 10px;
    box-sizing: border-box;
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    > div {
      font-size: 12px;
      margin-right: 10px;
    }
    > img {
      width: 12px;
      height: 12px;
    }
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 90%;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 500px;
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

const Select = styled(SelectComponent)`
  width: ${(props) => (props.width ? props.width : '170')}px;
  height: 30px;
  margin-left: ${(props) => (props.ml ? props.ml : '0')}px;
  margin-right: ${(props) => (props.mr ? props.mr : '0')}px;
  display: ${(props) => (props.domainType === 1 ? 'block' : 'none')};

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: ${(props) => (props.width ? props.width : '170')}px;
    height: 30px;
    margin-left: 0px;
    margin-bottom: 10px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
  }
`;

const TimePickerContainer = styled(TimePicker)`
  overflow: hidden;
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  > img {
    width: 24px;
    height: 24px;
  }
`;

const Input = styled.input`
  border: none;
  border: 1px solid #c7c7c7;
  // padding-bottom: 18px;
  outline: none;
  font-size: 15px;
  width: 100%;
  box-sizing: border-box;
  display: ${(props) => (props.domainType === 1 ? 'none' : 'block')};
  padding: 0 10px;
  text-align: right;
  ::placeholder {
    font-size: 12px;
    text-align: left;
  }
  :focus {
  }
  @media (min-width: 0px) and (max-width: 767.98px) {
    width: ${(props) => (props.domainType === 2 ? '85px' : '200px')};
    height: 30px;
    font-size: 12px;
    margin-bottom: 10px;
    padding: 0 5px;
    ::placeholder {
      font-size: 10px;
      text-align: left;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: ${(props) => (props.domainType === 2 ? '150px' : '250px')};
    height: 30px;
    margin-left: ${(props) => (props.ml === 2 ? '10px' : '0px')};
  }
  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: ${(props) => (props.domainType === 2 ? '160px' : '300px')};
    height: 30px;
    margin-left: ${(props) => (props.ml === 2 ? '15px' : '0px')};
  }
  @media (min-width: 1300px) {
    width: ${(props) => (props.domainType === 2 ? '160px' : '440px')};
    height: 30px;
    margin-left: ${(props) => (props.ml === 2 ? '15px' : '0px')};
  }
`;

const TextArea = styled(TextAreaContainer)`
  width: 100%;
  border: 3px solid red;
  height: 300px;
`;

const Description = styled.div`
  width: 100%;
  display: flex;
  > div {
    font-size: 12px;
    color: blue;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    > div {
      font-size: 10px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    > div {
      font-size: 11px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
  }
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
