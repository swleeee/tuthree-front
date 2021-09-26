import React, { Component } from 'react';
import styled from 'styled-components';
import InnerContainer from './InnerContainer';
import OuterContainer from './OuterContainer';

class Nav extends Component {
  render() {
    return (
      <OuterContainer>
        <InnerContainer>
          <Temp>sdfsdfsdfsdfdf sdfsdfsdfsdfdfds fsd sdf sfd sdf S</Temp>
        </InnerContainer>
      </OuterContainer>
    );
  }
}

export default Nav;

// const Container = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: center;
//   align-items: center;
//   border: 3px solid green;
//   flex-direction: column;
// `;

const Item = styled.nav`
  width: 1200px;
  height: 100px;
  border: 3px solid red;
`;

const Temp = styled.div`
  border: 3px solid black;
  width: 100%;
`;

const NavBox = styled.div`
  //   position: fixed;
  z-index: 100;
  //   height: 60px;
  width: 100%;

  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  display: inline-flex;
  justify-content: center;
`;
