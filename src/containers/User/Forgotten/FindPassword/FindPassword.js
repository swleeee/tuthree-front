import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer, Provider } from 'mobx-react';
import Auth from '../../../../stores/Account/Auth';
import EmailContainer from './Email';
import PhoneContainer from './Phone';
import PhoneContainer2 from './Phone2';

import emailImg from '../../../../static/images/Forgotten/email.png';
import phoneImg from '../../../../static/images/Forgotten/smartphone.png';

@inject('Auth')
@observer
class FindId extends Component {
  onClickTabHandler = (type) => {
    console.info(type);
    switch (type) {
      case 'email':
        Auth.certificationType = 1;
        Auth.passwordStep = 1;
        break;
      case 'phone':
        Auth.certificationType = 2;
        Auth.passwordStep = 1;
        break;
      default:
        break;
    }
    // this.setState({ g: 3 });

    console.info(Auth.certificationType);
  };

  render() {
    return (
      <>
        <MainBox>
          <TabBox>
            <Tab
              active={Auth.certificationType === 1 ? true : false}
              onClick={() => this.onClickTabHandler('email')}
            >
              <Item active={Auth.certificationType === 1 ? true : false}>
                <img src={emailImg} />
                <div>이메일 인증</div>
              </Item>
            </Tab>
            <Tab
              active={Auth.certificationType === 2 ? true : false}
              onClick={() => this.onClickTabHandler('phone')}
            >
              <Item active={Auth.certificationType === 2 ? true : false}>
                <img src={phoneImg} />
                <div>휴대전화 인증</div>
              </Item>
            </Tab>
          </TabBox>

          {Auth.certificationType === 1 && Auth.passwordStep === 1 && (
            <EmailContainer />
          )}
          {Auth.certificationType === 2 && Auth.passwordStep === 1 && (
            <PhoneContainer />
          )}

          {Auth.certificationType === 1 && Auth.passwordStep === 2 && (
            <PhoneContainer2 />
          )}
          {Auth.certificationType === 2 && Auth.passwordStep === 2 && (
            <PhoneContainer2 />
          )}

          {/* <MainContent>ㅇㄴㄹㄴㅇ</MainContent> */}
        </MainBox>
      </>
    );
  }
}

export default FindId;

const MainBox = styled.div`
  display: flex;
  width: 100%;
  height: 800px;

  @media (min-width: 0px) and (max-width: 767.98px) {
    flex-direction: column;
  }
`;
const MainContent = styled.div`
  width: 100%;
  height: 500px;
  border: 2px solid green;
`;
const TabBox = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.6);
  margin-right: 50px;
  justify-content: space-around;
  align-itmes: center;
  padding: 17px 25px;
  box-sizing: border-box;

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 100%;
    flex-direction: row;
    height: 160px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 200px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 250px;
  }
`;
const Tab = styled.div`
  width: 250px;
  height: 150px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.active ? 'rgb(235, 114, 82)' : '#ffffff'};
  border: ${(props) =>
    props.active ? '1px solid transparent' : '1px solid black'};
  border-radius: 5px;
  box-shadow: ${(props) =>
    props.active ? '0 4px 20px 1px rgba(0, 0, 0, 0.3)' : ''};

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 45%;
    height: 120px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 150px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 200px;
  }
`;

const Item = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;

  > img {
    width: 48px;
    height: 48px;
  }
  > div {
    font-size: 18px;
    font-weight: bold;
    color: ${(props) => (props.active ? '#ffffff' : '#000000')};
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    > img {
      width: 32px;
      height: 32px;
    }
    > div {
      font-size: 14px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    > img {
      width: 40px;
      height: 40px;
    }
    > div {
      font-size: 16px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    > img {
      width: 44px;
      height: 44px;
    }

    > div {
      font-size: 17px;
    }
  }
`;
