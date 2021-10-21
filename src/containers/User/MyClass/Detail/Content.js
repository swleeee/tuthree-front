import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import Calendar from './Calendar';
import QAContainer from './QA';

@inject('MyClass', 'Auth', 'Common')
@observer
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { today: new Date() };
  }

  componentDidMount = () => {
    const { MyClass, Common } = this.props;
    console.info('un0');
    Common.modalActive = false;
  };
  componentWillUnmount = () => {
    const { MyClass } = this.props;
    // MyClass.state = 1;
    console.info('un1');
  };
  render() {
    const { MyClass, Auth } = this.props;
    return (
      <Container>
        <NavBox>
          <NavItem>
            <Nav
              active={MyClass.detailState === 1 ? true : false}
              onClick={() => MyClass.onClickNavHandler('calendar')}
            >
              <div>캘린더</div>
            </Nav>
            <Nav
              active={MyClass.detailState === 2 ? true : false}
              onClick={() => MyClass.onClickNavHandler('qa')}
            >
              <div>문제지/답안지</div>
            </Nav>
          </NavItem>
          <UserInfo>
            {Auth.loggedUserType === 'teacher' ? (
              <div>{`[ ${MyClass.studentName} 학생 ]`}</div>
            ) : (
              <div>{`[ ${MyClass.teacherName} 선생님 ]`}</div>
            )}
          </UserInfo>
        </NavBox>

        {MyClass.detailState && MyClass.detailState === 1 && (
          <Calendar today={this.state.today} history={this.props.history} />
        )}
        {MyClass.detailState && MyClass.detailState === 2 && <QAContainer />}
      </Container>
    );
  }
}

export default Content;

const Container = styled.div`
  // height: 100%;
  display: flex;
  flex-direction: column;
  margin: 100px 0;
  width: 100%;
  // border: 2px solid red;
`;

const NavBox = styled.div`
  width: 100%;
  display: flex;

  // border: 2px solid black;
  padding-bottom: 10px;
  margin-bottom: 40px;
  border-bottom: 2px solid #aaaaaa;
  margin: 50px 0;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 0px) and (max-width: 767.98px) {
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    // padding-bottom: 5px;
    margin-bottom: 30px;
  }
`;
const Nav = styled.div`
  cursor: pointer;
  width: 150px;
  height: 100%;
  border: ${(props) =>
    props.active ? '1px solid transparent' : '1px solid black'};
  // border-radius: 3px;
  background-color: ${(props) =>
    props.active ? 'rgb(235, 114, 82)' : '#ffffff'};

  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    color: ${(props) => (props.active ? '#ffffff' : '#000000')};
    font-weight: bold;
    font-size: 16px;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 85px;
    > div {
      font-size: 12px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 100px;
    > div {
      font-size: 14px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 120px;
    > div {
      font-size: 15px;
    }
  }
`;

const NavItem = styled.div`
  display: flex;
  height: 50px;

  @media (min-width: 0px) and (max-width: 767.98px) {
    height: 30px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    height: 35px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    height: 40px;
  }
`;
const UserInfo = styled.div`
  > div {
    font-size: 20px;
    font-weight: bold;
  }
`;
