import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as Connection,
} from 'react-router-dom';

@inject('Auth')
@observer
class Completion extends Component {
  componentWillUnmount = () => {
    const { Auth } = this.props;
    Auth.findEmailMsg = '';
    Auth.findEmail = '';
    Auth.findEmailName = '';
  };
  render() {
    const { Auth } = this.props;
    return (
      <>
        <Container>
          <Card>
            <div>
              <span>아이디</span>찾기가 <span>완료</span>되었습니다!
            </div>
            {/* <img src={teacherImg} /> */}
            <Content>
              <div>
                <span>{Auth.findEmailMsg}</span>
              </div>
            </Content>
            <ButtonBox>
              <Link to="/login" style={{ marginBottom: '30px' }}>
                <Button
                  backgroundColor="#ffffff"
                  color="rgb(235, 114,82)"
                  border="rgb(235, 114,82)"
                >
                  <div>로그인</div>
                </Button>
              </Link>

              <Button
                backgroundColor="rgb(235, 114,82)"
                color="#ffffff"
                onClick={() => {
                  Auth.idStep = 1;
                  Auth.forgottenType = 2;
                  Auth.passwordStep = 1;
                }}
              >
                <div>비밀번호 찾기</div>
              </Button>
            </ButtonBox>
          </Card>
        </Container>
      </>
    );
  }
}

export default Completion;

const Container = styled.div`
  width: 100%;
  //   height: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  //   margin: 110px 0;
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
  margin-top: 30px;
  margin-bottom: 110px;

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
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Button = styled.button`
  cursor: pointer;
  width: 250px;
  height: 70px;
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
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    font-size: 18px;
    color: #666666;
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
`;
