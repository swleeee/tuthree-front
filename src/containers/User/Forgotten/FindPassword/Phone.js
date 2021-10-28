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
            onChange={(e) => Auth.handleChange(e.target, 'findPwdTelId')}
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = '아이디를 입력하세요.')}
          />
          {/* <OverlapBtn>인증번호 요청</OverlapBtn> */}
        </ItemBox>

        <ItemBox>
          <Input
            placeholder="전화번호 -없이 입력하세요."
            onChange={(e) => Auth.handleChange(e.target, 'findPwdTel')}
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) =>
              (e.target.placeholder = '전화번호 -없이 입력하세요.')
            }
          />
          {/* <OverlapBtn>인증번호 요청</OverlapBtn> */}
        </ItemBox>
        <ItemBox>
          <Input
            placeholder="이름을 입력하세요."
            onChange={(e) => Auth.handleChange(e.target, 'findPwdTelName')}
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = '이름을 입력하세요.')}
          />
          {/* <OverlapBtn>확인</OverlapBtn> */}
        </ItemBox>
        <Button
          onClick={() => {
            // Auth.passwordStep = 2;
            Auth.findPwd();
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
  width: 80%;
  height: 60px;
  :focus {
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
  }

  @media (min-width: 1300px) {
  }
`;

const Button = styled.div`
  // width: 300px;
  width: 80%;
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

  @media (min-width: 0px) and (max-width: 767.98px) {
    // width: 180px;
    width: 80%;
    height: 40px;
    > div {
      font-size: 16px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    // width: 250px;
    height: 50px;
    > div {
      font-size: 18px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    // width: 280px;
    height: 50px;
    > div {
      font-size: 19px;
    }
  }
`;
