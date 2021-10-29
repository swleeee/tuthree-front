import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';

@inject('MyPage', 'Common', 'Auth')
@observer
class Content extends Component {
  componentDidMount = () => {
    const { MyPage, Auth, Common } = this.props;
    MyPage.getEnrollmentList();
  };
  inputHandler = (e, type) => {
    console.info(e.value);
  };
  render() {
    const { MyPage, Auth, Common } = this.props;
    return (
      <Container>
        <Header>
          <div>부모 등록 관리</div>
        </Header>
        <Main>
          {MyPage.enrollmentList &&
            MyPage.enrollmentList.map((item, idx) => {
              return item.status ? (
                <Card>
                  <Name>
                    <span>{`${item.parentName}`} </span>
                  </Name>
                </Card>
              ) : (
                <Card>
                  <Name>
                    <span>{item.parentName} </span>
                    님의 부모 등록 요청이 들어왔습니다.
                  </Name>

                  <ButtonBox>
                    <Button
                      onClick={() =>
                        MyPage.acceptEnrollment(item.parentName, item.parentId)
                      }
                    >
                      <div>수락</div>
                    </Button>
                  </ButtonBox>
                </Card>
              );
            })}

          {/* <Card>
            <Name>
              <span>
                {MyPage.enrollmentList && MyPage.enrollmentList.parentId}{' '}
              </span>
              님의 부모 등록 요청이 들어왔습니다.
            </Name>
            <ButtonBox>
              <Button onClick={() => MyPage.acceptEnrollment()}>
                <div>수락</div>
              </Button>
            </ButtonBox>
          </Card> */}

          {/* <Item>
            <Label>기존 비밀번호</Label>
            <ContentBox>
              <Input
                placeholder="기존 비밀번호를 입력하세요."
                onChange={(e) => this.inputHandler(e.target, 'origin')}
                onFocus={(e) => (e.target.placeholder = '')}
                onBlur={(e) =>
                  (e.target.placeholder = '기존 비밀번호를 입력하세요.')
                }
              />
            </ContentBox>
          </Item>

          <Item>
            <Label>새 비밀번호</Label>
            <ContentBox>
              <Input
                placeholder="새 비밀번호를 입력하세요."
                onChange={(e) => this.inputHandler(e.target, 'new')}
                onFocus={(e) => (e.target.placeholder = '')}
                onBlur={(e) =>
                  (e.target.placeholder = '새 비밀번호를 입력하세요.')
                }
              />
            </ContentBox>
          </Item>

          <Item>
            <Label>새 비밀번호 확인</Label>
            <ContentBox>
              <Input
                placeholder="새 비밀번호를 한 번 더 입력하세요."
                onChange={(e) => this.inputHandler(e.target, 'new2')}
                onFocus={(e) => (e.target.placeholder = '')}
                onBlur={(e) =>
                  (e.target.placeholder = '새 비밀번호를 한 번 더 입력하세요.')
                }
              />
            </ContentBox>
          </Item> */}
        </Main>
        {/* <ButtonBox>
          <Button>
            <div>변경</div>
          </Button>
        </ButtonBox> */}
      </Container>
    );
  }
}

export default Content;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #888;
  height: 100%;
  min-height: 1000px;
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
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  cursor: pointer;
  margin-top: 20px;
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

const Card = styled.div`
  // border: 1px solid #000;
  border-radius: 5px;
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.5);
  padding: 5px;
  box-sizing: border-box;
  width: 300px;

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 80%;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 250px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 280px;
  }
`;
const Name = styled.div`
  text-align: center;
  font-size: 18px;

  > span {
    font-size: 22px;
    font-weight: bold;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    font-size: 13px;
    > span {
      font-size: 17px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 16px;
    > span {
      font-size: 20px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: 17px;
    > span {
      font-size: 21px;
    }
  }
`;
