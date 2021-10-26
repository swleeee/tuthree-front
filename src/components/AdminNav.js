import React, { Component } from 'react';
import styled from 'styled-components';

import { Link as Connection } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('AdminAuth')
@observer
class AdminNav extends Component {
  render() {
    const { AdminAuth } = this.props;
    return (
      <NavBox>
        <div>TuThree Admin</div>
        <Menu>
          <Link to="/admin/main" menu={true}>
            사용자 관리
          </Link>
          <Link to="/admin/community" menu={true}>
            게시판 관리
          </Link>
          <Link to="/admin/chatting" menu={true}>
            문의 채팅
          </Link>
        </Menu>
        <Link onClick={() => AdminAuth.adminLogout()}>
          <Button>로그아웃</Button>
        </Link>
      </NavBox>
    );
  }
}

export default AdminNav;

const Menu = styled.div`
  display: flex;
  // justify-content: space-around;
  // border: 3px solid blue;
  width: 70%;

  // padding: 10px;
`;

const NavBox = styled.div`
  padding: 0 30px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 50px;
  // border: 2px solid blue;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div:nth-of-type(1) {
    width: 200px;
    // border: 2px solid green;
    text-align: center;
    color: #fff;
  }
`;

const Link = styled(Connection)`
  text-decoration: none;
  color: black;
  font-family: RobotoBlack;

  box-sizing: border-box;
  display: block;
  text-align: center;
  color: #fff;
  // width: ${(props) => (props.menu ? '70%' : '1%')};
  margin: ${(props) => (props.menu ? '0 30px' : '0 0')};

  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 14px;
    > span {
      font-size: 22px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: 16px;
    > span {
      font-size: 26px;
    }
  }
`;

const Button = styled.button`
  cursor: pointer;
  width: 80px;
  height: 30px;
  border: none;
  background-color: rgb(235, 114, 82);
  font-size: 15px;
  color: #fff;
  border-radius: 3px;
  font-weight: bold;

  @media (min-width: 0px) and (max-width: 767.98px) {
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 80px;
    height: 30px;
    font-size: 14px;
  }
`;
