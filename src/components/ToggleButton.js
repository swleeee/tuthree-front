import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

@inject('MyPage', 'Auth')
@observer
class ToggleButton extends React.Component {
  changeHandler = () => {
    const { Auth } = this.props;
    Auth.registrationState = !Auth.registrationState;
  };

  render() {
    const { Auth } = this.props;
    return (
      <CheckBoxWrapper active={Auth.registrationState}>
        <CheckBox active={Auth.registrationState} />
        <CheckBoxLabel
          active={Auth.registrationState}
          onClick={() => {
            this.changeHandler();
          }}
        >
          <div />
        </CheckBoxLabel>
      </CheckBoxWrapper>
    );
  }
}
export default ToggleButton;

const CheckBoxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  //   background: #bebebe;
  background-color: ${(props) =>
    props.active ? 'rgba(235, 114, 82, 0.7)' : '#bebebe'};
  cursor: pointer;
  > div {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    margin-left: ${(props) => (props.active ? '21' : '3')}px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 34px;
    height: 18px;
    > div {
      width: 12px;
      height: 12px;
      margin: 3px;
      margin-left: ${(props) => (props.active ? '18' : '3')}px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 36px;
    height: 20px;
    > div {
      width: 14px;
      height: 14px;
      margin: 3px;
      margin-left: ${(props) => (props.active ? '18' : '3')}px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 40px;
    height: 24px;
    > div {
      width: 16px;
      height: 16px;
      margin: 3px;
      margin-left: ${(props) => (props.active ? '20' : '3')}px;
    }
  }
`;
const CheckBox = styled.input`
  border: none;
  width: 100%;
  height: 26px;
  @media (min-width: 0px) and (max-width: 767.98px) {
    height: 18px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    height: 20px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    height: 24px;
  }
`;
