import React, { Component } from 'react';

import styled, { keyframes } from 'styled-components';
import { inject, observer } from 'mobx-react';

import { toJS } from 'mobx';

@inject('Common', 'AdminUser', 'Auth')
@observer
class DetailContent extends Component {
  componentDidMount = () => {
    const { AdminUser } = this.props;
    console.info(toJS(AdminUser.userDetailList));
  };
  render() {
    const { AdminUser, Common } = this.props;

    return (
      <Container>
        <Header>유저 정보</Header>
        <Main>
          <Section>
            <Label>
              <div>아이디</div>
            </Label>
            <Content>
              <div>sdfsd</div>
            </Content>
          </Section>
          <Section>
            <Label>
              <div>이름</div>
            </Label>
            <Content>
              <div>sdfsd</div>
            </Content>
          </Section>
          <Section>
            <Label>
              <div>이메일</div>
            </Label>
            <Content>
              <div>sdfsd</div>
            </Content>
          </Section>
          <Section>
            <Label>
              <div>분류</div>
            </Label>
            <Content>
              <div>sdfsd</div>
            </Content>
          </Section>

          <Section>
            <Label>
              <div>학교</div>
            </Label>
            <Content>
              <div>sdfsd</div>
            </Content>
          </Section>

          <Section>
            <Label>
              <div>증명서</div>
            </Label>
            <Content>
              <div>sdfsd</div>
            </Content>
          </Section>

          <Section>
            <Label>
              <div>전화번호</div>
            </Label>
            <Content>
              <div>sdfsd</div>
            </Content>
          </Section>
          <Section>
            <Label>
              <div>출생년도</div>
            </Label>
            <Content>
              <div>sdfsd</div>
            </Content>
          </Section>
          <Section>
            <Label>
              <div>성별</div>
            </Label>
            <Content>
              <div>sdfsd</div>
            </Content>
          </Section>
        </Main>
      </Container>
    );
  }
}
export default DetailContent;

const ModalBox = styled.div`
  z-index: 101;
  background-color: white;

  padding-bottom: 30px;
  box-sizing: border-box;
  width: 80%;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 40%);
  border-radius: 10px;
  overflow-y: scroll !important;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 95%;
    // position: fixed;
    // z-index: 101;
    // height: 150px;
    // width: 90%;

    > button {
      // font-size: 14px;
      margin: 5px 5px 0 0;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
  }
  @media (min-width: 992px) and (max-width: 1299.98px) {
  }
  @media (min-width: 1300px) {
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //   justify-content: center;
  width: 100%;
  > button {
    align-self: flex-end;
    outline: none;
    cursor: pointer;
    border: 0;
    font-size: 21px;
    font-weight: 700;
    //margin-left: 10px;
    margin: 5px 5px 5px 0;
    float: right;
    color: #000000;
    border-radius: 50%;
    background-color: #f1f1f1;
  }
`;

const Header = styled.div`
  position: relative;
  padding: 16px;
  //padding-top: 0;
  //background-color: #f1f1f1;
  font-weight: 700;
  // margin-bottom: 30px;
  text-align: center;
  border-bottom: 2px solid #333;
  font-size: 30px;
  width: 90%;
  @media (min-width: 0px) and (max-width: 767.98px) {
    position: relative;
    padding: 8px;
    font-weight: 700;
    font-size: 22px;
    margin-top: 30px;
  }
`;
const Main = styled.div`
  background-color: white;
  font-color: white;

  display: flex;

  flex-direction: column;

  justify-content: center;
  align-items: center;
  height: 80%;
  width: 80%;
  margin-top: 10px;
  border: 2px solid #000;

  @media (min-width: 0px) and (max-width: 767.98px) {
    height: 100%;
    font-size: 16px;
    font-weight: 600;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid #aaa;
  height: 50px;
`;
const Label = styled.div`
  flex-grow: 2;

  width: 20%;
  border-right: 1px solid #000;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 5px;
  box-sizing: border-box;
`;
const Content = styled.div`
  flex-grow: 6;
  width: 80%;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 5px;
  box-sizing: border-box;
`;
