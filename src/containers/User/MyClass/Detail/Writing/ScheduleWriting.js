import React from 'react';
import styled, { keyframes } from 'styled-components';
import { inject, observer } from 'mobx-react';
import SelectComponent from '../../../../../components/Select';
// import { DatePicker } from '@y0c/react-datepicker';
import DatePicker, { registerLocale } from 'react-datepicker';
import addImg from '../../../../../static/images/Common/add.png';
import deleteImg from '../../../../../static/images/Common/delete.png';

import TimePicker from '../../../../../components/TimePicker';

import TextAreaContainer from '../../../../../components/TextareaContainer';
import ScheduleContainer from './Schedule';
import ClassReportContainer from './ClassReport';

import calendarImg from '../../../../../static/images/Common/calendar.png';
import { getYear } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import format from 'date-fns/format';

import moment from 'moment';
import ko from 'date-fns/locale/ko';
registerLocale('ko', ko);
const _ = require('lodash');

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

const schedules = [
  {
    date: '2021-10-20T22:05',
    desc: '기출문제 1p ~ 21p 풀기',
    completed: false,
  },
  {
    date: '2021-10-20T22:05',
    desc: '기출문제 1p ~ 21p 풀기',
    completed: false,
  },
  {
    date: '2021-10-20T22:05',
    desc: '기출문제 1p ~ 21p 풀기',
    completed: false,
  },
  {
    date: '2021-10-20T22:05',
    desc: '기출문제 1p ~ 21p 풀기',
    completed: false,
  },
  {
    date: '2021-10-20T22:05',
    desc: '기출문제 1p ~ 21p 풀기',
    completed: false,
  },
  {
    date: '2021-10-20T22:05',
    desc: '기출문제 1p ~ 21p 풀기',
    completed: false,
  },

  {
    date: '2021-10-25T22:05',
    desc: '기출문제 1p ~ 21p 풀기',
    completed: false,
  },
  {
    date: '2021-10-25T22:05',
    desc: '기출문제 1p ~ 21p 풀기',
    completed: false,
  },
  {
    date: '2021-10-25T22:05',
    desc: '기출문제 1p ~ 21p 풀기',
    completed: false,
  },
  {
    date: '2021-10-25T22:05',
    desc: '기출문제 1p ~ 21p 풀기',
    completed: false,
  },
  {
    date: '2021-10-25T22:05',
    desc: '기출문제 1p ~ 21p 풀기ㅇㄴsdfsdfdsfdsfsdfsdfsdffdsfdsfdfsddffds풀기ㅇㄴsdfsdfdsfdsfsdfsdfsdffdsfdsfdfsddffds풀기ㅇㄴsdfsdfdsfdsfsdfsdfsdffdsfdsfdfsddffds풀기ㅇㄴsdfsdfdsfdsfsdfsdfsdffdsfdsfdfsddffds풀기ㅇㄴsdfsdfdsfdsfsdfsdfsdffdsfdsfdfsddffds라ㅣdsfsdfsdfsdfsdfdsfsdfsdfdsffsdfsdfdsfsdfㅓㄴsdfdsfsdsffsdfdsfㅇ리ㅏ넝러ㅏ이나린어ㅏㅣㅇㄴ라',
    completed: false,
  },
  {
    date: '2021-10-25T22:05',
    desc: '기출문제 1p ~ 21p 풀기',
    completed: false,
  },
];

@inject('Common', 'MyClass')
@observer
class ScheduleWriting extends React.Component {
  componentDidMount = () => {
    const { MyClass } = this.props;
    if (MyClass.selectedDate) {
      MyClass.getDetailSchedule();
      MyClass.getDetailReport();
    }
    console.info('ccccccccccccc');
  };
  onChange = (date) => {
    const { MyClass } = this.props;
    // Day.js object
    console.info(MyClass.selectedDate);
    // console.log(date);
    console.info(date);
    // console.info(moment(date).valueOf());
    // console.info(moment.utc(moment(date).format()));
    // console.info(new moment(;))
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;

    // let temp = new Date().to
    // console.info(date.format());
    // console.info(`${year}-${month}-${day}`);
    // date = date.dateFormat('yyyy-MM-dd');
    // MyClass.selectedDate = date;
    // MyClass.selectedDate = moment.utc(moment(date).format());
    MyClass.selectedDate = `${year}-${month}-${day}`;
    MyClass.selectedDateMoment = date;
    console.info(MyClass.selectedDateMoment);
    MyClass.getDetailSchedule();
    MyClass.getDetailReport();

    // if (MyClass.reportDetailAry) {
    //   console.info('aa');
    // } else {
    //   console.info('bb');
    // }

    // to normal Date object
    // console.log(date.toDate());
  };

  render() {
    const years = _.range(1900, getYear(new Date()) + 1, 1);
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header, children, width, Common, MyClass } =
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
                  <Header>
                    <TabBox>
                      <div>
                        <DateContainer
                          selected={MyClass.selectedDateMoment}
                          // onChange={(value) =>
                          //   this.onChange(
                          //     format(value, 'yyyy-MM-dd', {
                          //       awareOfUnicodeTokens: true,
                          //     })
                          //   )
                          // }
                          onChange={(date) => this.onChange(date)}
                          locale="ko"
                          dateFormat="yyyy-MM-dd"
                        />
                      </div>
                      <div>
                        <Item
                          onClick={() => (MyClass.writingTabState = 1)}
                          active={MyClass.writingTabState === 1}
                        >
                          <div>일정</div>
                        </Item>

                        <Item
                          onClick={() => (MyClass.writingTabState = 2)}
                          active={MyClass.writingTabState === 2}
                        >
                          <div>수업보고서</div>
                        </Item>
                      </div>
                    </TabBox>
                  </Header>
                  <Main>
                    {MyClass.writingTabState === 1 && (
                      <ScheduleContainer date={MyClass.selectedDate} />
                    )}
                    {MyClass.writingTabState === 2 && (
                      <ClassReportContainer date={MyClass.selectedDate} />
                    )}

                    {/* <div>
                      <DateContainer
                        selected={MyClass.selectedDateMoment}
                        // onChange={(value) =>
                        //   this.onChange(
                        //     format(value, 'yyyy-MM-dd', {
                        //       awareOfUnicodeTokens: true,
                        //     })
                        //   )
                        // }
                        onChange={(date) => this.onChange(date)}
                        locale="ko"
                        dateFormat="yyyy-MM-dd"
                      />
                    </div> */}
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
                  <Header>
                    <TabBox>
                      <div>
                        <DateContainer
                          selected={MyClass.selectedDateMoment}
                          // onChange={(value) =>
                          //   this.onChange(
                          //     format(value, 'yyyy-MM-dd', {
                          //       awareOfUnicodeTokens: true,
                          //     })
                          //   )
                          // }
                          onChange={(date) => this.onChange(date)}
                          locale="ko"
                          dateFormat="yyyy-MM-dd"
                        />
                      </div>
                      <div>
                        <Item
                          onClick={() => (MyClass.writingTabState = 1)}
                          active={MyClass.writingTabState === 1}
                        >
                          <div>일정</div>
                        </Item>

                        <Item
                          onClick={() => (MyClass.writingTabState = 2)}
                          active={MyClass.writingTabState === 2}
                        >
                          <div>수업보고서</div>
                        </Item>
                      </div>
                    </TabBox>
                  </Header>
                  <Main>
                    {MyClass.writingTabState === 1 && <ScheduleContainer />}
                    {MyClass.writingTabState === 2 && <ClassReportContainer />}

                    {/* <div>
                      <DateContainer
                        selected={MyClass.selectedDateMoment}
                        // onChange={(value) =>
                        //   this.onChange(
                        //     format(value, 'yyyy-MM-dd', {
                        //       awareOfUnicodeTokens: true,
                        //     })
                        //   )
                        // }
                        onChange={(date) => this.onChange(date)}
                        locale="ko"
                        dateFormat="yyyy-MM-dd"
                      />
                    </div> */}
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

export default ScheduleWriting;

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

const Label = styled.div`
  width: 20%;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 18%;
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
  @media (min-width: 0px) and (max-width: 767.98px) {
    > span {
      margin: 0 12px 0 0;
      font-size: 12px;
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
    width: 50%;
    height: 30px;
    border-radius: 3px;
    background-color: rgba(235, 114, 82, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
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

const Input = styled.input`
  border: none;
  //   border: 1px solid #c7c7c7;
  // padding-bottom: 18px;
  outline: none;
  font-size: 15px;
  width: 100%;
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
    // width: ${(props) => (props.domainType === 2 ? '85px' : '200px')};
    height: 22px;
    font-size: 12px;
    // margin-bottom: 10px;
    padding: 0 8px;
    ::placeholder {
      font-size: 10px;
      text-align: left;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    // width: ${(props) => (props.domainType === 2 ? '150px' : '250px')};
    height: 25px;
    margin-left: ${(props) => (props.ml === 2 ? '10px' : '0px')};
  }
  @media (min-width: 992px) and (max-width: 1299.98px) {
    // width: ${(props) => (props.domainType === 2 ? '160px' : '300px')};
    height: 25px;
    margin-left: ${(props) => (props.ml === 2 ? '15px' : '0px')};
  }
  @media (min-width: 1300px) {
    // width: ${(props) => (props.domainType === 2 ? '160px' : '440px')};
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

const DateContainer = styled(DatePicker)`
  margin-top: 10px;
  border: 1px solid #333;
  border-radius: 3px;
  width: 100%;
  padding: 5px 0;
  box-sizing: border-box;
  font-size: 24px;
  font-weight: bold;
  //   display: flex;
  text-align: center;
  //   border: none;
  position: relative;
  cursor: pointer;

  @media (min-width: 0px) and (max-width: 767.98px) {
    text-align: right;
    padding-right: 5px;
    font-size: 12px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 18px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: 21px;
  }
`;

const TabBox = styled.div`
  .react-datepicker__input-container::after {
    // content: 'url: ${calendarImg}';

    content: url(${calendarImg});
    display: inline-block;
    position: absolute;
    width: 24px;
    height: 24px;
    top: 28%;
    // transform: translateY(-50%);
    left: 10px;
    font-size: 1rem;
    color: #333;
    transform: scale(0.8);
  }

  width: 100%;
  // border: 2px solid blue;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  //   padding: 30px 15px;
  box-sizing: border-box;
  //   border-top: 1px solid #888;

  > div:nth-of-type(1) {
    width: 40%;
  }

  > div:nth-of-type(2) {
    // width: 100%;
    display: flex;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    flex-direction: row;

    border-top: none;
    flex-wrap: wrap;
    .react-datepicker__input-container::after {
      left: 3px;
      transform: scale(0.5);
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .react-datepicker__input-container::after {
      transform: scale(0.6);
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    > div:nth-of-type(1) {
      //   width: 35%;
    }
    .react-datepicker__input-container::after {
      transform: scale(0.7);
    }
  }
`;

const Item = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  //   width: 50%;
  width: 140px;
  height: 50px;
  border: ${(props) => (props.active ? 'none' : '1px solid #707070')};
  display: flex;
  justify-content: center;
  align-items: center;
  // border-collapse: collapse;
  margin-top: -1px;
  background-color: ${(props) =>
    props.active ? 'rgba(235,114,82,1)' : '#fff'};
  > div {
    color: ${(props) => (props.active ? '#fff' : '#000')};
    font-size: 20px;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 70px;
    height: 28px;
    margin-right: -1px;
    > div {
      font-size: 11px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 100px;
    height: 32px;
    > div {
      font-size: 14px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 120px;
    height: 36px;
    > div {
      font-size: 15px;
    }
  }
`;

const SearchBox = styled.div`
  width: 50%;
  height: 40px;
  border: 2px solid #707070;
  border-radius: 21px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 10px;
  box-sizing: border-box;
  margin-top: 20px;

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

const ScheduleArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;
const ScheduleItem = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #707070;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 8px 5px;
  box-sizing: border-box;
  width: 100%;
  > div {
    font-size: 15px;
    font-weight: 500;
    width: 90%;
  }

  > img {
    width: 18px;
    height: 18px;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    > div {
      font-size: 11px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    > div {
      font-size: 13px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    > div {
      font-size: 14px;
    }
  }
`;

const ScheduleName = styled.div`
  display: flex;
`;
