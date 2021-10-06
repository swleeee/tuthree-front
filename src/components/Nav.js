import React, { Component } from 'react';
import styled from 'styled-components';
import InnerContainer from './InnerContainer';
import OuterContainer from './OuterContainer';
import { inject, observer } from 'mobx-react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as Connection,
} from 'react-router-dom';

import personImg from '../static/images/person.png';
import Community from '../stores/Community/Community';

@inject('Community')
@observer
class Nav extends Component {
  render() {
    return (
      <OuterContainer>
        <InnerContainer>
          <Item>
            <Logo>
              <Link to="/" style={{ width: '30%' }}>
                <span>TuThree</span>
              </Link>
            </Logo>
            <Menu>
              <Link
                to="/notice"
                onClick={() => {
                  Community.type = 1;
                  Community.state = 1;
                }}
              >
                공지사항
              </Link>
              <Link to="/tutor">과외찾기</Link>
              <Link to="/tutee">학생찾기</Link>
              <Link
                to="/community"
                onClick={() => {
                  Community.communityState = 1;
                }}
              >
                커뮤니티
              </Link>
              <Link to="/myclass" style={{ marginRight: '0px' }}>
                내강의실
              </Link>

              {/* <img src={personImg} alt="마이페이지" /> */}
            </Menu>
            <Menu
              style={{ width: '20%', justifyContent: 'right', float: 'right' }}
            >
              <Link to="/login" style={{ width: '20%', marginLeft: '0px' }}>
                <Img src={personImg} alt="마이페이지" />
              </Link>
            </Menu>
          </Item>
        </InnerContainer>
      </OuterContainer>
    );
  }
}

export default Nav;

const Link = styled(Connection)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-family: RobotoBlack;
  //   margin-right: 72px;
  // width: 100%;
  font-weight: bold;
  // border: 3px solid red;
  width: 100%;
  box-sizing: border-box;
  display: block;
  // padding: 4px 8px;
  // margin: 0 auto;
  text-align: center;
  > span {
    font-family: GongGothicBold;
    font-size: 30px;
    font-weight: bold;
    // color: #eb7252;
    color: #000000;
  }

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

// const Container = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: center;
//   align-items: center;
//   border: 3px solid green;
//   flex-direction: column;
// `;

const Item = styled.nav`
  //   border: 3px solid black;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  // border: 3px solid orange;
  width: 30%;

  > span {
    font-family: GongGothicBold;
    font-size: 30px;
    font-weight: bold;
    // color: #eb7252;
    color: #000000;
  }
`;
const Menu = styled.div`
  display: flex;
  // justify-content: space-around;
  // border: 3px solid blue;
  width: 70%;

  // padding: 10px;
`;

const Img = styled.img`
  width: 28px;
  height: 28px;
  // margin: 0 100px;
  float: right;
  // border: 3px solid green;
`;
