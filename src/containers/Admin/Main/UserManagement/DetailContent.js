import React, { Component } from 'react';

import styled, { keyframes } from 'styled-components';
import { inject, observer } from 'mobx-react';

import { toJS } from 'mobx';
import { ROOT_URL } from '../../../../axios/index';

@inject('Common', 'AdminUser', 'Auth')
@observer
class DetailContent extends Component {
  componentDidMount = () => {
    const { AdminUser } = this.props;
    console.info(toJS(AdminUser.userDetailList));

    // window.URL.revokeObjectURL(url);
    // reader.readAsBinaryString(blob);
    // reader.readAsArrayBuffer(blob);
    // console.info(reader);

    // let file = new File([blob], '증명서');
    // console.info(file);
  };
  componentWillUnmount = () => {
    const { AdminUser } = this.props;
    AdminUser.state = 0;
  };
  render() {
    const { AdminUser, Common, Auth } = this.props;

    return (
      <Container>
        <Header>유저 정보</Header>
        <Main>
          <Section>
            <Label>
              <div>아이디</div>
            </Label>
            <Content>
              <div>{AdminUser.userDetailList.id}</div>
            </Content>
          </Section>
          <Section>
            <Label>
              <div>이름</div>
            </Label>
            <Content>
              <div>{AdminUser.userDetailList.name}</div>
            </Content>
          </Section>
          <Section>
            <Label>
              <div>이메일</div>
            </Label>
            <Content>
              <div>{AdminUser.userDetailList.email}</div>
            </Content>
          </Section>

          {AdminUser.filterIdx !== 3 && (
            <Section>
              <Label>
                <div>분류</div>
              </Label>
              <Content>
                <div>{AdminUser.userDetailList.grade.strType}</div>
              </Content>
            </Section>
          )}

          {AdminUser.filterIdx === 1 && (
            <Section>
              <Label>
                <div>학교</div>
              </Label>
              <Content>
                <div>{AdminUser.userDetailList.school}</div>
              </Content>
            </Section>
          )}

          {AdminUser.filterIdx === 1 && (
            <Section>
              <Label>
                <div>학과</div>
              </Label>
              <Content>
                <div>{AdminUser.userDetailList.major}</div>
              </Content>
            </Section>
          )}

          {AdminUser.filterIdx === 2 && (
            <Section>
              <Label>
                <div>학년</div>
              </Label>
              <Content>
                <div>
                  {AdminUser.userDetailList.school === 'UNDER_MIDDLE'
                    ? '유아/초등학생'
                    : AdminUser.userDetailList.school === 'M1'
                    ? '중1'
                    : AdminUser.userDetailList.school === 'M2'
                    ? '중2'
                    : AdminUser.userDetailList.school === 'M3'
                    ? '중3'
                    : AdminUser.userDetailList.school === 'H1'
                    ? '고1'
                    : AdminUser.userDetailList.school === 'H2'
                    ? '고2'
                    : AdminUser.userDetailList.school === 'H3'
                    ? '고3'
                    : AdminUser.userDetailList.school === 'OVER_HIGH'
                    ? '성인'
                    : AdminUser.userDetailList.school === 'EXAM_M'
                    ? '중학교 검정고시 준비'
                    : AdminUser.userDetailList.school === 'EXAM_H'
                    ? '고등학교 검정고시 준비'
                    : ''}
                </div>
              </Content>
            </Section>
          )}

          {/* <Section>
            <Label>
              <div>증명서</div>
            </Label>
            <Content>
              <div
                onClick={() => {
                  let blob = new Blob([AdminUser.userDetailList.authFile], {
                    type: 'application/octet-stream',
                  });
                  console.info(blob);
                  let file = new File([blob], '증명서');
                  console.info(file);
                  const url = window.URL.createObjectURL(file);
                  const a = document.createElement('a');
                  a.href = `${url}`;
                  a.download = `${url}`;
                  a.click();
                  a.remove();
                }}
              >
                증명서
              </div>
            </Content>
          </Section> */}

          {/* <Section>
            <Label>
              <div>전화번호</div>
            </Label>
            <Content>
              <div>sdfsd</div>
            </Content>
          </Section> */}
          <Section>
            <Label>
              <div>출생년도</div>
            </Label>
            <Content>
              <div>{AdminUser.userDetailList.birth}년도</div>
            </Content>
          </Section>
          <Section>
            <Label>
              <div>성별</div>
            </Label>
            <Content>
              <div>
                {AdminUser.userDetailList.sex === 'MALE' ? '남성' : '여성'}
              </div>
            </Content>
          </Section>

          {AdminUser.filterIdx !== 3 && (
            <Section>
              <Label>
                <div>시급</div>
              </Label>
              <Content>
                <div>{AdminUser.userDetailList.cost}</div>
              </Content>
            </Section>
          )}

          {AdminUser.filterIdx !== 3 && (
            <Section>
              <Label>
                <div>지역</div>
              </Label>
              <Content type="region">
                {AdminUser.userDetailList.regionL &&
                  AdminUser.userDetailList.regionL.map((item, idx) => {
                    return (
                      <div>
                        <div>{item}</div>
                        {/* <img src={deleteImg} /> */}
                      </div>
                    );
                  })}
              </Content>
            </Section>
          )}

          {AdminUser.filterIdx !== 3 && (
            <Section>
              <Label>
                <div>과목</div>
              </Label>
              <Content type="subject">
                {AdminUser.userDetailList.subjectL &&
                  AdminUser.userDetailList.subjectL.map((item, idx) => {
                    return (
                      <div>
                        <div>{item}</div>
                        {/* <img src={deleteImg} /> */}
                      </div>
                    );
                  })}
              </Content>
            </Section>
          )}

          {AdminUser.filterIdx !== 3 && (
            <Section>
              <Label>
                <div>소개</div>
              </Label>
              <Content>
                <div>{AdminUser.userDetailList.detail}</div>
              </Content>
            </Section>
          )}
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
  // min-height: 50px;
`;
const Label = styled.div`
  flex-grow: 2;

  width: 20%;

  // min-height: 50px;
  display: flex;
  align-items: center;
  padding-left: 5px;
  box-sizing: border-box;
  > div {
    font-size: 16px;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    min-width: 58px;
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
      font-size: 15px;
    }
  }
`;
const Content = styled.div`
  flex-grow: 6;
  width: 80%;
  flex-wrap: wrap;
  border-left: 1px solid #000;
  word-break: break-all;
  min-height: 50px;
  display: flex;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;

  > div {
    display: inline-flex;
    align-items: center;
    background-color: ${(props) =>
      props.type === 'region'
        ? '#a596c4'
        : props.type === 'subject'
        ? '#7eb1a8'
        : '#fff'};
    border-radius: 30px;
    padding: 3px 10px;
    box-sizing: border-box;
    margin-right: 10px;
    margin-bottom: 10px;
    // cursor: pointer;
    font-size: 15px;
    > div {
      font-size: 12px;
      margin-right: 10px;
    }
    > img {
      width: 12px;
      height: 12px;
    }
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    > div {
      font-size: 11px;
      > div {
        font-size: 10px;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    > div {
      font-size: 13px;
      > div {
        font-size: 11px;
      }
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    > div {
      font-size: 14px;
      > div {
        font-size: 11px;
      }
    }
  }
`;
