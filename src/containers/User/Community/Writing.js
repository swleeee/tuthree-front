import React, { Component } from 'react';
import styled from 'styled-components';
import SelectComponent from '../../../components/Select';
import { inject, observer } from 'mobx-react';
import AdminCommunity from '../../../stores/Admin/Community';
import Community from '../../../stores/Community/Community';
import Common from '../../../stores/Common/Common';
import TextAreaContainer from '../../../components/TextareaContainer';
import FileUpload from '../../../components/FileUpload';
import { toJS } from 'mobx';
import Auth from '../../../stores/Account/Auth';

@inject('AdminCommunity', 'Common', 'Community', 'Auth')
@observer
class Writing extends Component {
  componentDidMount = () => {
    console.info('didmount');
    console.info(Common);
    console.info(Auth);
    console.info(Auth.token);
    console.info(Common.width);
    console.info(Auth.loggedUserId);
    console.info(Auth.loggedUserType);
    if (Community.communityWritingState === 1) {
      console.info(toJS(Community.communityDetailList));
      console.info(toJS(Community.communityDetailFileAry));
      Community.communityTitle = Community.communityDetailList.title;
      Community.communityContent = Community.communityDetailList.content;

      for (let i = 0; i < Community.communityDetailFileAry.length; i++) {
        // formData.append(`file`, this.communityFileAry[i]);
        let blob = new Blob([Community.communityDetailFileAry[i].file], {
          type: 'application/octet-stream',
        });
        console.info(blob);

        let file = new File([blob], Community.communityDetailFileAry[i].name);
        console.info(file);
        // Community.communityFileAry = Community.communityDetailFileAry;
        Community.communityFileAry.push(file);
      }

      // let blob = new Blob([Community.communityDetailFileAry[0].file], {
      //   type: 'application/octet-stream',
      // });
      // console.info(blob);

      // let file = new File([blob], Community.communityDetailFileAry[0].name);
      // console.info(file);
      // // Community.communityFileAry = Community.communityDetailFileAry;
      // Community.communityFileAry.push(file);

      this.setState({ g: 3 });
    }
  };

  componentWillUnmount = () => {
    Community.communityDetailList = [];
    Community.communityWritingState = 0;
    Community.communityState = 1;
    Community.communityTitle = '';
    Community.communityContent = '';
    Community.communityFileAry = [];
  };

  render() {
    console.info('render');
    return (
      <Container>
        <Item>
          <Section>
            <Name>
              <div>제목</div>
            </Name>
            <Content>
              <Input
                placeholder="제목을 입력하세요."
                onChange={(e) =>
                  Community.onInputHandler(e.target, 'community')
                }
                onFocus={(e) => (e.target.placeholder = '')}
                onBlur={(e) => (e.target.placeholder = '제목을 입력하세요')}
                value={Community.communityTitle}
              />
            </Content>
          </Section>
          <Section>
            <Name>
              <div>내용</div>
            </Name>
            <Content>
              <TextArea
                value={Community.communityContent}
                type="communityContent"
                placeholder="입력하세요"
              />
            </Content>
          </Section>

          <Section mb={true}>
            <Name>
              <div>파일 첨부</div>
            </Name>
            <Content>
              <FileUpload
                file={true}
                fileAry={Community.communityFileAry}
                type="community"
                state="multi"
              />
            </Content>
          </Section>
          <ButtonBox>
            <Button
              color="#000"
              bcolor="#fff"
              border="1px solid #000"
              onClick={() => {
                Community.communityState = 1;
                Community.communityWritingState = 0;
              }}
            >
              <div>취소</div>
            </Button>

            <Button
              color="#fff"
              bcolor="rgb(235, 114, 82)"
              onClick={() => {
                console.info('click');
                if (Community.communityWritingState === 0) {
                  console.info(Auth.token);
                  Community.setCommunity();
                } else {
                  Community.putCommunity(Community.communityDetailList.id);
                }
              }}
            >
              {Community.communityWritingState === 0 ? (
                <div>등록</div>
              ) : (
                <div>수정</div>
              )}
            </Button>
          </ButtonBox>
        </Item>
      </Container>
    );
  }
}

export default Writing;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  margin-top: 100px;
`;

const Item = styled.div`
  width: 80%;
  height: 100%;
  //   border: 2px solid black;
  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 100%;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 100%;
  }
`;

const Section = styled.div`
  display: flex;
  // height:
  border: 1px solid #707070;
  border-bottom: ${(props) => (props.mb ? '1px solid #707070' : 'none')};
  box-sizing: border-box;

  width: 100%;
`;
const Name = styled.div`
  background-color: #cccccc;
  width: 150px;
  border-right: 1px solid #707070;
  box-sizing: border-box;
  flex-grow: 1;
  display: felx;
  justify-content: center;
  align-items: center;

  > div {
    font-size: 24px;
  }
  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 15%;
    > div {
      font-size: 17px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    > div {
      font-size: 20px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    > div {
      font-size: 22px;
    }
  }
`;

const Content = styled.div`
  flex-grow: 8;
  padding: 5px 20px;
  box-sizing: border-box;
  min-height: 100px;
  display: flex;
  align-items: center;
  width: 100%;
`;

const TextArea = styled(TextAreaContainer)`
  //   width: 100%;
  //   border: 3px solid red;
  //   height: 300px;
`;

const ButtonBox = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  cursor: pointer;
  width: 200px;
  height: 60px;
  color: ${(props) => (props.color ? props.color : '')};
  background-color: ${(props) => (props.bcolor ? props.bcolor : '')};
  border: ${(props) => (props.border ? props.border : 'none')};
  margin: 0 50px;
  margin-bottom: 200px;
  border-radius: 3px;
  > div {
    font-size: 20px;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 160px;
    height: 48px;
    margin: 0 30px;
    > div {
      font-size: 16px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 180px;
    height: 52px;
    > div {
      font-size: 18px;
    }
  }
`;

const Input = styled.input`
  border: none;
  // border: 1px solid #c7c7c7;
  // padding-bottom: 18px;
  outline: none;
  font-size: 15px;
  // width: 100%;
  box-sizing: border-box;
  // display: ${(props) => (props.domainType === 1 ? 'none' : 'block')};
  // padding-left: 10px;
  :focus {
  }
  @media (min-width: 0px) and (max-width: 767.98px) {
    height: 40px;
    font-size: 12px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    height: 60px;
  }
  @media (min-width: 992px) and (max-width: 1299.98px) {
    height: 60px;
  }
  @media (min-width: 1300px) {
    width: 100%;
    height: 60px;
  }
`;
