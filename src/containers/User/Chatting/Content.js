import React, { Component } from 'react';
import { inject, observer, Provider } from 'mobx-react';
import styled from 'styled-components';
import Textarea from '../../../components/TextareaContainer';

const userList = [
  {
    id: 1,
    name: 'user1',
    content: 'sdfsdfdsfdsfsdf',
    writeDt: '2021-09-29',
  },

  {
    id: 1,
    name: 'user1',
    content: 'sd',
    writeDt: '2021-09-29',
  },

  {
    id: 1,
    name: 'user1',
    content: 'sdfsdfdsfdsfsdf',
    writeDt: '2021-09-29',
  },

  {
    id: 4,
    name: 'user1',
    content: 'sdfsdfdsfdsfsdf',
    writeDt: '2021-09-29',
  },

  {
    id: 4,
    name: 'user1',
    content: 'sdfsdfdsfdsfsdf',
    writeDt: '2021-09-29',
  },
  {
    id: 4,
    name: 'user1',
    content: 'sdfsdfdsfdsfsdf',
    writeDt: '2021-09-29',
  },
  {
    id: 4,
    name: 'user1',
    content: 'sdfsdfdsfdsfsdf',
    writeDt: '2021-09-29',
  },
  {
    id: 4,
    name: 'user1',
    content: 'sdfsdfdsfdsfsdf',
    writeDt: '2021-09-29',
  },
  {
    id: 4,
    name: 'user1',
    content: 'sdfsdfdsfdsfsdf',
    writeDt: '2021-09-29',
  },
  {
    id: 4,
    name: 'user1',
    content: 'sdfsdfdsfdsfsdf',
    writeDt: '2021-09-29',
  },
  {
    id: 4,
    name: 'user1',
    content: 'sdfsdfdsfdsfsdf',
    writeDt: '2021-09-29',
  },
  {
    id: 4,
    name: 'user1',
    content: 'sdfsdfdsfdsfsdf',
    writeDt: '2021-09-29',
  },
  {
    id: 4,
    name: 'user1',
    content: 'sdfsdfdsfdsfsdf',
    writeDt: '2021-09-29',
  },
  {
    id: 4,
    name: 'user1',
    content: 'sdfsdfdsfdsfsdf',
    writeDt: '2021-09-29',
  },
];

const chatList = [
  {
    id: 4,
    name: 'user1',
    content: 'sdddddddddddddddddddddddddddddddddddddddddd',
    writeDt: '2021-09-29',
    type: 'me',
  },
  {
    id: 4,
    name: 'user1',
    content: 'sdfsdfdsfdsfsdf',
    writeDt: '2021-09-29',
    type: 'you',
  },
  {
    id: 4,
    name: 'user1',
    content: 'sdfsdfdsfdsfsdf',
    writeDt: '2021-09-29',
    type: 'me',
  },
  {
    id: 4,
    name: 'user1',
    content: 'sdfsdfdsfdsfsdf',
    writeDt: '2021-09-29',
    type: 'you',
  },
  {
    id: 4,
    name: 'user1',
    content:
      'sdfsdfdsfdsfsdsdfsdfdsfdsfsdfdsssssssssssssssssssssssssssdfsdfdsfdsfsdfdsssssssssssssssssssssssssssdfsdfdsfdsfsdfdsssssssssssssssssssssssssssdfsdfdsfdsfsdfdsssssssssssssssssssssssssssdfsdfdsfdsfsdfdsssssssssssssssssssssssssssdfsdfdsfdsfsdfdsssssssssssssssssssssssssssdfsdfdsfdsfsdfdsssssssssssssssssssssssssssdfsdfdsfdsfsdfdsssssssssssssssssssssssssssdfsdfdsfdsfsdfdsssssssssssssssssssssssssssdfsdfdsfdsfsdfdsssssssssssssssssssssssssssdfsdfdsfdsfsdfdssssssssssssssssssssssssssf',
    writeDt: '2021-09-29',
    type: 'you',
  },
  {
    id: 4,
    name: 'user1',
    content: 'sdfsdfdsfdsfsdf',
    writeDt: '2021-09-29',
    type: 'me',
  },
  {
    id: 4,
    name: 'user1',
    content:
      'ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
    writeDt: '2021-09-29',
    type: 'me',
  },
  {
    id: 4,
    name: 'user1',
    content: 'sdfsdfdsfdsfsdf',
    writeDt: '2021-09-29',
    type: 'me',
  },
  {
    id: 4,
    name: 'user1',
    content: 'sdfsdfdsfdsfsdf',
    writeDt: '2021-09-29',
    type: 'me',
  },
  {
    id: 4,
    name: 'user1',
    content: 'sdfsdfdsfdsfsdf',
    writeDt: '2021-09-29',
    type: 'you',
  },
];

class Content extends Component {
  render() {
    return (
      <Container>
        <ChatList>
          <Label>
            <div>Chatting</div>
          </Label>
          <UserList>
            {userList &&
              userList.map((item, idx) => {
                return (
                  <UserListItem>
                    <ImgBox width={55} height={55} mr={10}>
                      <div>
                        <div>IMG</div>
                      </div>
                    </ImgBox>
                    <UserItem>
                      <UserLabel>
                        <UserName>{item.name}</UserName>
                        <UserWriteDt>{item.writeDt}</UserWriteDt>
                      </UserLabel>
                      <UserContent>{item.content}</UserContent>
                    </UserItem>
                  </UserListItem>
                );
              })}
          </UserList>
        </ChatList>
        <ChatContainer>
          <ChatHeader>홍길동</ChatHeader>
          <ChatMain>
            {chatList &&
              chatList.map((item, idx) => {
                return (
                  <ChatListItem type={item.type === 'me'}>
                    <ImgBox
                      width={55}
                      height={55}
                      mr={10}
                      type={item.type === 'me'}
                    >
                      <div>
                        <div>IMG</div>
                      </div>
                    </ImgBox>
                    <ChatItem type={item.type === 'me'}>
                      <ChatLabel type={item.type === 'me'}>
                        <ChatName type={item.type === 'me'}>
                          {item.name}
                        </ChatName>
                        <ChatContent type={item.type === 'me'}>
                          <div></div>
                          {item.content}
                        </ChatContent>
                      </ChatLabel>
                      <ChatWriteDt>{item.writeDt}</ChatWriteDt>
                    </ChatItem>
                  </ChatListItem>
                );
              })}
          </ChatMain>
          <ChatWritingBox>
            <Textarea mxh={40} mih={40} />
            <Button>
              <div>전송</div>
            </Button>
          </ChatWritingBox>
        </ChatContainer>
      </Container>
    );
  }
}

export default Content;

const Container = styled.div`
  margin: 100px 0;
  width: 100%;
  height: 800px;
  border: 2px solid #000;
  border-radius: 5px;
  display: flex;
  // overflow: auto;
`;
const ChatList = styled.div`
  // border: 2px solid red;
  border-right: 1px solid #000;
  width: 25%;
`;

const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    font-size: 22px;
    font-weight: bold;
  }
  padding: 10px 12px;
  box-sizing: border-box;
  border-bottom: 2px solid #707070;
`;
const UserList = styled.div`
  // height: auto;
  overflow: auto;
  height: 93%;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const UserListItem = styled.div`
  padding: 10px 12px;
  box-sizing: border-box;
  border-bottom: 2px solid #707070;
  display: flex;
  align-items: center;
`;
const ImgBox = styled.div`
  display: ${(props) => (props.type ? 'none' : 'flex')};
  justify-content: center;
  align-self: flex-start;
  margin-bottom: ${(props) => (props.mb ? props.mb : '0')}px;
  margin-right: ${(props) => (props.mr ? props.mr : '0')}px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${(props) => (props.width ? props.width : '0')}px;
    height: ${(props) => (props.height ? props.height : '0')}px;

    background-color: #ccc;
    border: 1px solid #707070;
    > div {
      font-size: 20px;
      font-weight: bold;
    }
  }
`;
const UserItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const UserLabel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const UserName = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
const UserWriteDt = styled.div`
  font-size: 13px;
  color: #999999;
`;
const UserContent = styled.div`
  font-size: 14px;
  // width:50%;
  // word-break: break-all;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const ChatHeader = styled.div``;
const ChatMain = styled.div`
  border-bottom: 1px solid #000;
  overflow: auto;
  height: 88%;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const ChatListItem = styled.div`
  padding: 10px 12px;
  box-sizing: border-box;
  // border-bottom: 2px solid #707070;
  display: flex;
  align-items: center;
  // width: ${(props) => (props.type ? '97%' : '50%')};
  justify-content: ${(props) => (props.type ? 'flex-end' : 'flex-start')};
  word-break: break-all;
  margin: 15px 0;
`;
const ChatItem = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.type ? 'row-reverse' : '')};
`;
const ChatLabel = styled.div`
  margin-right: ${(props) => (props.type ? '0' : '15px')};
  margin-left: ${(props) => (props.type ? '15px' : '0')};
  width: 70%;
`;
const ChatName = styled.div`
  font-size: 18px;
  font-weight: 500;
  display: ${(props) => (props.type ? 'none' : '')};
  text-align: ${(props) => (props.type ? 'right' : 'left')};
`;
const ChatWriteDt = styled.div`
  align-self: flex-end;
  font-size: 13px;
  color: #999999;
  min-width: 70px;
`;
const ChatContent = styled.div`
  font-size: 14px;
  // width: 50%;
  flex-direction: ${(props) => (props.type ? 'row-reverse' : '')};
  background-color: #ccc;
  border-radius: 3px;
  padding: 5px 8px;
  position: relative;
  > div:nth-of-type(1) {
    width: 15px;
    height: 12px;
    position: absolute;
    // border: 2px solid red;
    background-color: #ccc;
    left: ${(props) => (props.type ? '' : '-8px')};
    right: ${(props) => (props.type ? '-8px' : '')};
    border-radius: ${(props) => (props.type ? '0 0 100% 0' : '0 0 0 100%')};
    // clip: rect(0, 8px, 4px, 9px);
  }
`;

const ChatWritingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 4px 10px;
  box-sizing: border-box;
`;
const Button = styled.button`
  background-color: rgba(235, 114, 82, 0.7);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  width: 70px;
  height: 40px;
`;

const Input = styled.input`
  border: 1px solid #707070;
  width: 80%;
  height: 40px;
  outline: none;
  padding: 5px 8px;
  box-sizing: border-box;
`;
