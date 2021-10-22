import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';

@inject('MyPage', 'Auth', 'MyClass')
@observer
class MultipleToggleButton extends React.Component {
  changeHandler = () => {
    const { Auth, MyPage, MyClass, number, state } = this.props;
    console.info('dd');
    switch (state) {
      case 'type':
        console.info('type');
        console.info(toJS(MyClass.questionAry[number][`${state}`]));
        if (MyClass.questionAry[number][`${state}`] === 'num') {
          MyClass.questionAry[number][`${state}`] = 'str';
        } else {
          MyClass.questionAry[number][`${state}`] = 'num';
        }

        console.info(toJS(MyClass.questionAry[number][`${state}`]));
        break;
      case 'auto':
        console.info('auto');
        console.info(toJS(MyClass.questionAry[number][`${state}`]));
        MyClass.questionAry[number][`${state}`] =
          !MyClass.questionAry[number][`${state}`];
        console.info(toJS(MyClass.questionAry[number][`${state}`]));
        break;
      default:
        break;
    }
  };

  render() {
    const { Auth, MyPage, MyClass, number, state } = this.props;
    // console.info(state);
    // console.info(toJS(MyClass.questionAry));
    console.info(toJS(MyClass.questionAry[number][`${state}`]));
    return (
      <>
        {state === 'type' ? (
          <CheckBoxWrapper active={MyClass.questionAry[number].type === 'num'}>
            <CheckBox
              active={MyClass.questionAry[number].type === 'num'}
              readOnly
            />
            <CheckBoxLabel
              active={MyClass.questionAry[number].type === 'num'}
              onClick={() => {
                this.changeHandler();
              }}
            >
              <div />
            </CheckBoxLabel>
          </CheckBoxWrapper>
        ) : (
          <CheckBoxWrapper active={MyClass.questionAry[number].auto}>
            <CheckBox active={MyClass.questionAry[number].auto} readOnly />
            <CheckBoxLabel
              active={MyClass.questionAry[number].auto}
              onClick={() => {
                this.changeHandler();
              }}
            >
              <div />
            </CheckBoxLabel>
          </CheckBoxWrapper>
        )}
      </>
    );
  }
}
export default MultipleToggleButton;

const CheckBoxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 18px;
  border-radius: 15px;
  //   background: #bebebe;
  background-color: ${(props) =>
    props.active ? 'rgba(235, 114, 82, 0.7)' : '#bebebe'};
  cursor: pointer;
  > div {
    content: '';
    display: block;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    margin: 3px;
    margin-left: ${(props) => (props.active ? '18' : '3')}px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 24px;
    height: 12px;
    > div {
      width: 7px;
      height: 7px;
      margin: 2px;
      margin-left: ${(props) => (props.active ? '14' : '3')}px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 28px;
    height: 16px;
    > div {
      width: 10px;
      height: 10px;
      margin: 3px;
      margin-left: ${(props) => (props.active ? '16' : '3')}px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 30px;
    height: 16px;
    > div {
      width: 10px;
      height: 10px;
      margin: 3px;
      margin-left: ${(props) => (props.active ? '17' : '3')}px;
    }
  }
`;
const CheckBox = styled.input`
  outline: none;
  border: none;
  width: 100%;
  width: 32px;
  height: 18px;
  // display: none;
  overflow: hidden;
  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 24px;
    height: 12px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 28px;
    height: 20px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 30px;
    height: 16px;
  }
`;
