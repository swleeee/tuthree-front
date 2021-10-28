import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import Auth from '../../../../stores/Account/Auth';

@inject('Auth')
@observer
class Email extends Component {
  onChangeHandler = (e) => {
    console.info(e.target.value);
  };
  render() {
    return (
      <Container>
        <Input
          mb={10}
          placeholder="이메일을 입력해주세요."
          onChange={(e) => Auth.handleChange(e.target, 'findIdEmail')}
          onFocus={(e) => (e.target.placeholder = '')}
          onBlur={(e) => (e.target.placeholder = '이메일을 입력해주세요.')}
        />

        <Input
          mb={50}
          placeholder="이름을 입력해주세요."
          onChange={(e) => Auth.handleChange(e.target, 'findIdEmailName')}
          onFocus={(e) => (e.target.placeholder = '')}
          onBlur={(e) => (e.target.placeholder = '이름을 입력해주세요.')}
        />

        <Button
          onClick={() => {
            console.info('click');
            Auth.findId();
            // Auth.idStep = 2;
          }}
        >
          <div>아이디 찾기</div>
        </Button>
      </Container>
    );
  }
}

export default Email;

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #aaaaaa;
`;

const Input = styled.input`
  margin-bottom: ${(props) => (props.mb ? props.mb : '0')}px;
  border: none;
  border: 1px solid #c7c7c7;
  // padding-bottom: 18px;
  outline: none;
  font-size: 15px;
  // width: 80%;
  box-sizing: border-box;
  display: ${(props) => (props.domainType === 1 ? 'none' : 'block')};
  padding-left: 10px;
  width: 300px;
  height: 60px;
  :focus {
  }

  @media (min-width: 1300px) {
    width: 80%;
    height: 60px;
  }
`;

const Button = styled.div`
  width: 300px;
  height: 60px;
  border-radius: 3px;
  background-color: rgba(235, 114, 82, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  > div {
    font-size: 20px;
    font-weight: bold;
  }
`;
