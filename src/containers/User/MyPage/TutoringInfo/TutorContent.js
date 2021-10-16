import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import ToggleButton from '../../../../components/ToggleButton';

@inject('MyPage')
@observer
class TutorContent extends Component {
  render() {
    const { MyPage } = this.props;
    return (
      <Container>
        <Header>
          <div>과외정보 조회/수정</div>
        </Header>
        <Main>
          <Item>
            <Label>모집 상태</Label>
            <ContentBox>
              <ToggleButton />
            </ContentBox>
          </Item>

          <Item>
            <Label>지역</Label>
            <ContentBox>홍길동</ContentBox>
          </Item>

          <Item>
            <Label>과외 가능 과목</Label>
            <ContentBox>sdfdsfksdflsdkfsd</ContentBox>
          </Item>

          <Item>
            <Label>학교</Label>
            <ContentBox>sdfsdlfjsdjkfsdf</ContentBox>
          </Item>

          <Item>
            <Label>학과</Label>
            <ContentBox>남자</ContentBox>
          </Item>

          <Item>
            <Label>급여</Label>
            <ContentBox>1997</ContentBox>
          </Item>

          <Item>
            <Label>소개</Label>
            <ContentBox>ㄴㅇㄹㄴㅇㄹㅇㄹ</ContentBox>
          </Item>
        </Main>
        <ButtonBox>
          <Button>
            <div>수정</div>
          </Button>
        </ButtonBox>
      </Container>
    );
  }
}

export default TutorContent;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #888;
  height: 100%;
  @media (min-width: 0px) and (max-width: 767.98px) {
    border-top: none;
  }
`;
const Header = styled.div`
  padding: 20px 40px;
  box-sizing: border-box;
  border-left: 1px solid #888;
  //   border-right: 1px solid #888;
  border-bottom: 2px solid #333;
  > div {
    font-size: 32px;
    font-weight: bold;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    padding: 12px 24px;
    > div {
      font-size: 24px;
    }
    border-left: none;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    padding: 16px 32px;
    > div {
      font-size: 24px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    padding: 18px 36px;
    > div {
      font-size: 28px;
    }
  }
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #888;
  margin-top: -1px;
`;
const Label = styled.div`
  padding: 20px 40px;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: bold;
  border-right: 1px solid #888;
  width: 20%;
  background-color: rgba(235, 114, 82, 0.3);
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 0px) and (max-width: 767.98px) {
    font-size: 14px;
    padding: 3px 6px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 16px;
    padding: 6px 12px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 25%;
    font-size: 18px;
    padding: 12px 24px;
  }
`;
const ContentBox = styled.div`
  font-size: 16px;
  padding: 15px 25px;
  box-sizing: border-box;
  // display: flex;
  // align-items: center;

  @media (min-width: 0px) and (max-width: 767.98px) {
    font-size: 11px;
    padding: 10px 8px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 13px;
    padding: 6px 15px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: 15px;
    padding: 12px 22px;
  }
`;
const ImgBox = styled.div`
  width: 180px;
  height: 180px;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  > img {
    width: 80%;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 100px;
    height: 100px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 140px;
    height: 140px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 160px;
    height: 160px;
  }
`;

const Description = styled.div`
  font-size: 14px;
  color: #eb7252;
  text-decoration: underline;
  text-align: center;
  > input {
    display: none;
  }
  > div {
    cursor: pointer;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
  }
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  margin-top: 60px;
  background-color: rgb(235, 114, 82);
  border: none;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  > div {
    font-size: 16px;
    color: #fff;
    font-weight: bold;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 80px;
    height: 28px;
    > div {
      font-size: 12px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 100px;
    height: 32px;
    > div {
      font-size: 14px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    > div {
      font-size: 15px;
    }
  }
`;
