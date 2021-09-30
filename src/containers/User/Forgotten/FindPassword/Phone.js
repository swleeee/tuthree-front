import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import Auth from '../../../../stores/Account/Auth';

@inject('Auth')
@observer
class Phone extends Component {
  render() {
    return (
      <Container>
        <ItemBox>
          <Input
            placeholder="아이디를 입력하세요."
            // onChange={this.onIdHandler}
            width={445}
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = '아이디를 입력하세요.')}
          />
        </ItemBox>
        <ItemBox>
          <Input
            placeholder="-없이 입력하세요."
            // onChange={this.onIdHandler}
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = '-없이 입력하세요.')}
          />
          <OverlapBtn>인증번호 요청</OverlapBtn>
        </ItemBox>
        <ItemBox>
          <Input
            placeholder="인증번호를 입력하세요."
            // onChange={this.onIdHandler}
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = '인증번호를 입력하세요.')}
          />
          <OverlapBtn>확인</OverlapBtn>
        </ItemBox>
        <Button
          onClick={() => {
            Auth.passwordStep = 2;
          }}
        >
          <div>비밀번호 찾기</div>
        </Button>
      </Container>
    );
  }
}

export default Phone;

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //   margin-bottom: 300px;
  //   border: 3px solid red;
  border-left: 1px solid #aaaaaa;
`;
const WrapperBox = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
  }
`;
const ItemBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  margin-bottom: 20px;
  justify-content: center;
  > div:nth-of-type(1) {
    width: 250px;
    font-size: 20px;
    font-weight: bold;
  }
`;

const OverlapBtn = styled.button`
  background-color: rgba(235, 114, 82, 0.7);
  border-radius: 5px;
  border: none;
  width: 130px;
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
  cursor: pointer;
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
  padding-left: 10px;
  :focus {
  }

  @media (min-width: 1300px) {
    width: ${(props) => (props.width ? props.width : '300')}px;
    height: 60px;
  }
`;

const Button = styled.div`
  margin-top: 30px;
  width: 445px;
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
