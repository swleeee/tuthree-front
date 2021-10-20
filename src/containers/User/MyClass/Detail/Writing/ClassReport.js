import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { inject, observer } from 'mobx-react';
import TextareaContainer from '../../../../../components/TextareaContainer';
import TimePicker from '../../../../../components/TimePicker';
import { toJS } from 'mobx';

@inject('Common', 'MyClass')
@observer
class ClassReport extends Component {
  render() {
    const { Common, MyClass } = this.props;
    return (
      <Container>
        <Line>
          <Label>강의회차</Label>
          <Content width="80%">
            <Input
              ml={15}
              mr={15}
              bd={true}
              width="120px"
              placeholder="ex) 1"
              onChange={(e) => MyClass.onChangeHandler(e, 'set_report')}
              onFocus={(e) => (e.target.placeholder = '')}
              onBlur={(e) => (e.target.placeholder = 'ex) 1')}
            />{' '}
            <span>회차</span>
          </Content>
        </Line>

        <Line>
          <Label>수업시간</Label>
          <Content>
            <TimeLabel type="start">시작시간</TimeLabel>
            <TimePickerContainer type="start" state="report" /> <span> ~ </span>
            <TimePickerContainer type="end" state="report" />
            <TimeLabel type="end">종료시간</TimeLabel>
          </Content>
        </Line>
        <Line>
          <Label>진행사항</Label>
          <Content width="80%">
            <TextArea
              mih={150}
              bd={true}
              type="classReport"
              //   value={Chatting.detailContent}
              placeholder="오늘은 (...) 부분에 대해서 진행하였습니다."
            />
          </Content>
        </Line>
        <ButtonBox>
          <Button
            color="#fff"
            bcolor="rgb(235, 114, 82)"
            onClick={() => MyClass.setReport()}
          >
            <div>저장</div>
          </Button>
        </ButtonBox>
      </Container>
    );
  }
}

export default ClassReport;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Line = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;
const Label = styled.div`
  width: 20%;
  font-size: 18px;

  @media (min-width: 0px) and (max-width: 767.98px) {
    font-size: 13px;
    min-width: 70px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 15%;
    font-size: 16px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 15%;
    font-size: 17px;
  }
`;
const Content = styled.div`
  position: relative;
  width: ${(props) => (props.width ? props.width : '')};
  display: flex;
  align-items: center;
  > span {
    font-size: 14px;
    margin-left: 5px;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    > span {
      font-size: 11px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    > span {
      font-size: 12px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    > span {
      font-size: 13px;
    }
  }
`;

const TextArea = styled(TextareaContainer)`
  width: 100%;
  border: 3px solid red;
  height: 300px;
`;

const Input = styled.input`
  //   border: none;
  border: 1px solid #c7c7c7;
  // padding-bottom: 18px;
  outline: none;
  font-size: 15px;
  width: ${(props) => (props.width ? props.width : '100%')};
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
    height: 32px;
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
    height: 35px;
    margin-left: ${(props) => (props.ml === 2 ? '10px' : '0px')};
  }
  @media (min-width: 992px) and (max-width: 1299.98px) {
    // width: ${(props) => (props.domainType === 2 ? '160px' : '300px')};
    height: 38px;
    margin-left: ${(props) => (props.ml === 2 ? '15px' : '0px')};
  }
  @media (min-width: 1300px) {
    // width: ${(props) => (props.domainType === 2 ? '160px' : '440px')};
    height: 40px;
    margin-left: ${(props) => (props.ml === 2 ? '15px' : '0px')};
  }
`;

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

const TimePickerContainer = styled(TimePicker)`
  overflow: hidden;
`;

const ButtonBox = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  //   width: 180px;
  height: 50px;
  color: ${(props) => (props.color ? props.color : '')};
  background-color: ${(props) => (props.bcolor ? props.bcolor : '')};
  border: ${(props) => (props.border ? props.border : 'none')};
  margin: 0 50px;
  //   margin-bottom: 200px;
  border-radius: 3px;
  cursor: pointer;
  width: 70%;
  > div {
    font-size: 18px;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    min-width: 120px;
    height: 32px;
    margin: 0 30px;
    > div {
      font-size: 14px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    // width: 180px;
    height: 36px;
    > div {
      font-size: 16px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    // width: 180px;
    height: 40px;
    > div {
      font-size: 17px;
    }
  }
`;
