import React, { Component } from 'react';
import styled from 'styled-components';
import InnerContainer from './InnerContainer';
import OuterContainer from './OuterContainer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as Connection,
} from 'react-router-dom';

import personImg from '../static/images/person.png';

class Nav extends Component {
  render() {
    return (
      <OuterContainer>
        <InnerContainer>
          <Item>
            <Logo>
              <span>Tuthree</span>
            </Logo>
            <Menu>
              <Link to="/notice">공지사항</Link>
              <Link to="/tutor">과외찾기</Link>
              <Link to="/tutee">학생찾기</Link>
              <Link to="/community">커뮤니티</Link>
              <Link to="/myclass">내강의실</Link>
              <Img src={personImg} alt="마이페이지" />
              {/* <img src={personImg} alt="마이페이지" /> */}
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
  width: 100%;
  font-weight: bold;
  //   border: 3px solid red;
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
  //   border: 3px solid orange;
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
  //   border: 3px solid green;
  width: 70%;
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
`;
