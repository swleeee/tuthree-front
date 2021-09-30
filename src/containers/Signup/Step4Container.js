import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer, Provider } from 'mobx-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as Connection,
} from 'react-router-dom';
import ProgressContainer from './ProgressContainer';

import homeImg from '../../static/images/Signup/home.png';
import loginImg from '../../static/images/Signup/login.png';
import authStore from '../../stores/Account/Auth';

// @inject('authStore')
@observer
class Step4Container extends Component {
  componentWillUnmount = () => {
    authStore.step = 1;
  };
  render() {
    return (
      <Provider Auth={authStore}>
        <Container>
          <ProgressContainer step="4" />

          <Card>
            <div>
              <span>회원가입</span>이 <span>완료</span>되었습니다!
            </div>
            {/* <img src={teacherImg} /> */}
            <Content>
              <div>Tuthree를 이용해 주셔서 감사드립니다.</div>

              <div>
                {' '}
                회원님은 Tuthree의 모든 기능을 사용하실 수 있습니다. 회원접속 후
                이용 가능합니다.
              </div>
            </Content>
            <ButtonBox>
              <Link to="/" mmb={10}>
                <Button
                  backgroundColor="#ffffff"
                  color="rgb(235, 114,82)"
                  border="rgb(235, 114,82)"
                >
                  <img src={homeImg} />
                  <div>홈으로 가기</div>
                </Button>
              </Link>

              <Link to="/login">
                <Button backgroundColor="rgb(235, 114,82)" color="#ffffff">
                  <img src={loginImg} />
                  <div>로그인하기</div>
                </Button>
              </Link>
            </ButtonBox>
          </Card>
        </Container>
      </Provider>
    );
  }
}

export default Step4Container;

const Container = styled.div`
  width: 100%;
  height: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 110px 0;
`;

const Name = styled.div`
  font-size: 40px;
  color: #eb7252;
  font-family: RobotoBlack;
  font-weight: bold;
  margin: 110px 0;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.16);
  width: 800px;
  height: 400px;
  padding-top: 25px;
  padding-bottom: 10px;
  box-sizing: border-box;
  margin: 110px 0;

  p {
    line-height: 12px;
  }
  img {
    width: 32px;
    height: 32px;
  }
  > div:nth-of-type(1) {
    font-size: 36px;
    font-weight: bold;
    padding-bottom: 15px;
    box-sizing: border-box;
    border-bottom: 1px solid #707070;
    width: 80%;
    text-align: center;
    span {
      color: rgb(235, 114, 82);
    }
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 90%;
    height: 300px;
    > div:nth-of-type(1) {
      font-size: 20px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 600px;
    height: 300px;
    > div:nth-of-type(1) {
      font-size: 28px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 700px;
    > div:nth-of-type(1) {
      font-size: 32px;
    }
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media (min-width: 0px) and (max-width: 767.98px) {
    flex-wrap: wrap;
  }
`;

const Button = styled.button`
  cursor: pointer;
  width: 200px;
  height: 50px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#ffffff'};
  border: ${(props) => (props.border ? `1px solid ${props.border}` : 'none')};
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  > div {
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => (props.color ? props.color : '#000000')};
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 170px;
    height: 50px;
    > img {
      width: 20px;
      height: 20px;
    }
    > div {
      font-size: 14px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 200px;
    height: 60px;
    > img {
      width: 24px;
      height: 24px;
    }
    > div {
      font-size: 17px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    > img {
      width: 28px;
      height: 28px;
    }
    > div {
      font-size: 20px;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    font-size: 18px;
    color: #666666;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 80%;
    > div {
      font-size: 12px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    > div {
      font-size: 14px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    > div {
      font-size: 16px;
    }
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
  margin-bottom: 30px;
  @media (min-width: 0px) and (max-width: 767.98px) {
    margin-bottom: ${(props) => (props.mmb ? props.mmb : 0)}px;
  }
`;
