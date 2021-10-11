import React, { Component } from 'react';
import { inject, observer, Provider } from 'mobx-react';
import styled from 'styled-components';

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
    content: 'sdfsdfdsfdsfsdf',
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
                  <ChatListItem>
                    <ImgBox width={55} height={55} mr={10}>
                      <div>
                        <div>IMG</div>
                      </div>
                    </ImgBox>
                    <ChatItem>
                      <ChatLabel>
                        <ChatName>{item.name}</ChatName>
                        <ChatWriteDt>{item.writeDt}</ChatWriteDt>
                      </ChatLabel>
                      <ChatContent>{item.content}</ChatContent>
                    </ChatItem>
                  </ChatListItem>
                );
              })}
          </ChatMain>
          <ChatWritingBox>
            <input />
            <Button>
              <div> 전송</div>
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
  box-sizing: border- box;
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
  box-sizing: border- box;
  border-bottom: 2px solid #707070;
  display: flex;
  align-items: center;
`;
const ImgBox = styled.div`
  display: flex;
  justify-content: center;
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
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChatHeader = styled.div``;
const ChatMain = styled.div``;
const ChatListItem = styled.div`
  padding: 10px 12px;
  box-sizing: border- box;
  border-bottom: 2px solid #707070;
  display: flex;
  align-items: center;
  width: 100%;
`;
const ChatItem = styled.div``;
const ChatLabel = styled.div``;
const ChatName = styled.div``;
const ChatWriteDt = styled.div``;
const ChatContent = styled.div``;

const ChatWritingBox = styled.div``;
const Button = styled.button``;
