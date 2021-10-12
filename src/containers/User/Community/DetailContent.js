import React, { Component } from 'react';
import styled from 'styled-components';
import SelectComponent from '../../../components/Select';
import { inject, observer } from 'mobx-react';
import Community from '../../../stores/Community/Community';
import Common from '../../../stores/Common/Common';
import TextAreaContainer from '../../../components/TextareaContainer';
import viewImg from '../../../static/images/Common/visibility.png';
import { ROOT_URL } from '../../../axios/index';
import fileImg from '../../../static/images/Common/files.png';
import Auth from '../../../stores/Account/Auth';
import { toJS } from 'mobx';

@inject('Community', 'Common', 'Auth')
@observer
class DetailContent extends Component {
  componentWillUnmount = () => {
    console.info('dsfsdfd');

    if (Community.communityWritingState !== 1) {
      Community.communityDetailList = [];
      Community.state = 1;
      Community.communityState = 1;
    }
  };
  render() {
    return (
      <Container>
        <Item>
          <Section by={true}>
            <SubSection width={30}>
              <Content width={30}>
                작성자{' '}
                {Community.communityDetailList &&
                  Community.communityDetailList.userId}
              </Content>
            </SubSection>

            <SubSection width={100} bl={true}>
              <Content title={true}>
                {Community.communityDetailList &&
                  Community.communityDetailList.title}
              </Content>
            </SubSection>

            <SubSection width={40} bl={true}>
              <Content width={40} right={true}>
                {Community.communityDetailList &&
                  Community.communityDetailList.writeAt}
              </Content>
            </SubSection>

            <SubSection width={10} bl={true}>
              <Content width={10} right={true}>
                <img src={viewImg} />
                {Community.communityDetailList &&
                  Community.communityDetailList.view}
              </Content>
            </SubSection>
          </Section>
          <Section by={true}>
            <Content height={50} file={true}>
              {Community.communityDetailFileAry &&
                Community.communityDetailFileAry.map((item, idx) => {
                  return (
                    <FileContent>
                      <img src={fileImg} />
                      <a href={`${ROOT_URL}/community/download/${item.id}`}>
                        {item.name}
                      </a>
                    </FileContent>
                  );
                })}
            </Content>
          </Section>

          {/* <Section by={true}>
            <Content height={50}>
              {Community.communityDetailFileAry &&
                Community.communityDetailFileAry.map((item, idx) => {
                  return (
                    <>
                      <div
                        id="myImg"
                        onClick={async () => {
                          //   Community.downloadFile(item.id, item.name);
                          console.info(item.file);

                          let blob = new Blob([item.file], {
                            type: 'application/octet-stream',
                          });
                          console.info(blob);
                          const url = window.URL.createObjectURL(blob);
                          // const a = document.createElement('a');
                          // a.href = `${url}`;
                          // a.download = `${url}`;
                          // a.click();
                          // a.remove();
                          // window.URL.revokeObjectURL(url);
                          // reader.readAsBinaryString(blob);
                          // reader.readAsArrayBuffer(blob);
                          // console.info(reader);
                          let file = new File([blob], item.name);
                          console.info(file);
                          // fetch(
                          //   `http://221.141.233.185:8088/community/download/${item.id}`
                          // )
                          //   .then((res) => res.blob()) // Gets the response and returns it as a blob
                          //   .then((blob) => {
                          //     // Here's where you get access to the blob
                          //     // And you can use it for whatever you want
                          //     // Like calling ref().put(blob)

                          //     // Here, I use it to make an image appear on the page
                          //     let objectURL = URL.createObjectURL(blob);
                          //     let file = new File([blob], item.name);
                          //     console.info(objectURL);
                          //     console.info(file);
                          //     let myImage = new Image();
                          //     const a = document.createElement('a');
                          //     a.href = `${objectURL}`;
                          //     a.download = `${objectURL}`;
                          //     a.click();
                          //     a.remove();
                          //     window.URL.revokeObjectURL(objectURL);
                          //   });
                        }}
                      >
                        {item.name}
                      </div>
                      <div>{item.file}</div>
                    </>
                  );
                })}
            </Content>
          </Section> */}

          <Section mb={true}>
            <Content height={500}>
              {Community.communityDetailList &&
                Community.communityDetailList.content}
            </Content>
          </Section>
        </Item>
        <ButtonBox>
          {Auth.loggedUserId === Community.communityDetailList.userId && (
            <>
              <Button
                color="#fff"
                bcolor="blue"
                onClick={async () => {
                  Community.communityState = 2;
                  Community.communityWritingState = 1;
                  // await Community.pushToCommunityDetail(
                  //   Community.communityDetailList,
                  //   0,
                  //   'modify'
                  // );
                }}
              >
                <div>수정</div>
              </Button>
              <Button
                color="#fff"
                bcolor="red"
                onClick={async () => {
                  // console.info(toJS(Community.communityDetailList));
                  await Community.delCommunity(
                    Community.communityDetailList.id
                  );
                }}
              >
                <div>삭제</div>
              </Button>
            </>
          )}

          <Button
            color="#fff"
            bcolor="rgb(235, 114, 82)"
            onClick={() => (Community.communityState = 1)}
          >
            <div>목록</div>
          </Button>
        </ButtonBox>
      </Container>
    );
  }
}

export default DetailContent;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  margin-top: 100px;
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;

const Section = styled.div`
  display: flex;

  //   border: 1px solid #707070;
  //   border-bottom: ${(props) => (props.mb ? '1px solid #707070' : 'none')};
  border-top: ${(props) => (props.by ? '1px solid #707070' : 'none')};
  border-bottom: ${(props) => (props.by ? '1px solid #707070' : 'none')};
  box-sizing: border-box;

  width: 100%;
  justify-content: space-between;
`;

const SubSection = styled.div`
  width: ${(props) => (props.width ? props.width : '100')}%;
  //   border: 2px solid black;
  display: flex;
  //   border-left: ${(props) => (props.bl ? '1px solid #707070' : '')};
`;

const Content = styled.div`
  flex-grow: 8;
  padding: 5px 20px;
  box-sizing: border-box;
  min-height: ${(props) => (props.height ? props.height : '70')}px;
  display: flex;
  align-items: center;
  width: ${(props) => (props.width ? props.width : '100')}%;
  font-size: ${(props) => (props.title ? '30' : '15')}px;
  justify-content: ${(props) => (props.right ? 'flex-end' : '')};
  > img {
    margin-right: 5px;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    padding: 2px 6px;
    flex-grow: 3;
    font-size: ${(props) => (props.title ? '16' : '12')}px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    padding: 4px 12px;
    flex-grow: 6;
    font-size: ${(props) => (props.title ? '25' : '14')}px;
  }
`;
const ButtonBox = styled.div`
  margin-top: 20px;
  align-self: flex-end;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  color: ${(props) => (props.color ? props.color : '')};
  background-color: ${(props) => (props.bcolor ? props.bcolor : '')};
  border: ${(props) => (props.border ? props.border : 'none')};
  margin: 0 10px;
  margin-bottom: 200px;
  border-radius: 3px;
  cursor: pointer;
  > div {
    font-size: 18px;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 60px;
    height: 28px;
    > div {
      font-size: 14px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 80px;
    height: 32px;
    > div {
      font-size: 16px;
    }
  }
`;

const FileContent = styled.div`
  display: flex;
  margin-right: 10px;
  > img {
    width: 24px;
  }
  > a {
    text-decoration: none;
    color: black;
  }
`;
