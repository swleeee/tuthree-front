import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { Link as Connection } from 'react-router-dom';

import userImg from '../../../static/images/Admin/Login/admin-user.png';
import passwordImg from '../../../static/images/Admin/Login/admin-password.png';

import AdminAuth from '../../../stores/Admin/Auth';

@inject('AdminAuth')
@observer
class ContentContainer extends Component {
  render() {
    return (
      <Container>
        <Item>
          <Header>
            <div>TuThree Admin Login</div>
          </Header>
          <InputBox>
            <InputItem mb={true}>
              <div>
                <img src={userImg} />
              </div>

              <Input
                placeholder="아이디"
                onChange={(e) => AdminAuth.onUserHandler(e, 'id')}
                onFocus={(e) => (e.target.placeholder = '')}
                onBlur={(e) => (e.target.placeholder = '아이디')}
              />
            </InputItem>
            <InputItem>
              <div>
                <img src={passwordImg} />
              </div>
              <Input
                placeholder="비밀번호"
                onFocus={(e) => (e.target.placeholder = '')}
                onBlur={(e) => (e.target.placeholder = '비밀번호')}
                type="password"
                onChange={(e) => AdminAuth.onUserHandler(e, 'password')}
              />
            </InputItem>
          </InputBox>
          <Link to="/admin/main">
            <Button>로그인</Button>
          </Link>
        </Item>
      </Container>
    );
  }
}

export default ContentContainer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Item = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 85%;
    height: 300px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 600px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 700px;
  }
  @media (min-width: 1300px) {
  }
`;
const Header = styled.div`
  width: 100%;
  height: 100px;
  background-color: rgb(87, 58, 51);
  border-radius: 5px 5px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  > div {
    font-size: 28px;
    color: #ffffff;
    font-weight: bold;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    height: 60px;
    margin-bottom: 30px;
    > div {
      font-size: 20px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    > div {
      font-size: 24px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    > div {
      font-size: 26px;
    }
  }
  @media (min-width: 1300px) {
  }
`;
const InputBox = styled.div`
  // border: 2px solid black;
  width: 75%;
  height: 150px;
  @media (min-width: 0px) and (max-width: 767.98px) {
    height: 100px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
  }
`;
const InputItem = styled.div`
  display: flex;
  margin-bottom: ${(props) => (props.mb ? '20' : '0')}px;
  border: 1px solid #707070;
  width: 100%;

  > div:nth-of-type(1) {
    box-sizing: border-box;
    flex-grow: 1;
    height: 60px;
    background-color: rgb(235, 114, 82);
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
      width: 32px;
      height: 32px;
    }
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    > div:nth-of-type(1) {
      height: 40px;
      > img {
        width: 24px;
        height: 24px;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    > div:nth-of-type(1) {
      > img {
        width: 28px;
        height: 28px;
      }
    }
  }
`;
const Input = styled.input`
  border: none;
  // border-bottom: 1px solid #000000;
  // padding-bottom: 18px;
  outline: none;
  font-size: 15px;
  // width: 95%;
  flex-grow: 10;
  padding: 0 10px;
  box-sizing: border-box;

  @media (min-width: 0px) and (max-width: 767.98px) {
    font-size: 12px;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 13px;
  }
  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: 14px;
  }
  @media (min-width: 1300px) {
  }
`;

const Button = styled.button`
  width: 75%;
  height: 60px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  background-color: rgb(235, 114, 82);
  margin-top: 60px;
  // > div {
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  // }

  @media (min-width: 0px) and (max-width: 767.98px) {
    font-size: 16px;
    height: 40px;
    margin-top: 40px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 18px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
  }
  @media (min-width: 1300px) {
  }
`;

const Link = styled(Connection)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-family: RobotoBlack;
  font-weight: bold;

  box-sizing: border-box;
  display: block;
  text-align: center;
  width: 75%;
`;
