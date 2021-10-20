import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { inject, observer } from 'mobx-react';
import addImg from '../../../../../static/images/Common/add.png';
import deleteImg from '../../../../../static/images/Common/delete.png';

@inject('Common', 'MyClass')
@observer
class Schedule extends Component {
  render() {
    const { MyClass } = this.props;
    return (
      <Container>
        <SearchBox>
          <Input
            placeholder="일정을 입력하세요."
            onChange={(e) => MyClass.onChangeHandler(e, 'schedule')}
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = '일정을 입력하세요.')}
          />
          <Search
            //   onClick={() => {
            //     console.info('dsfdsf');
            //     AdminCommunity.communityErrorMessage = '';
            //     if (AdminCommunity.communitySearchValue === '') {
            //       AdminCommunity.communitySearchFinalValue = '';
            //       AdminCommunity.getCommunityList(1);
            //     } else {
            //       AdminCommunity.searchCommunity(1);
            //     }
            //   }}
            onClick={() => {
              MyClass.setSchedule();
            }}
          >
            <img src={addImg} />
          </Search>
        </SearchBox>
        <ScheduleArea>
          {MyClass.scheduleDetailAry &&
            MyClass.scheduleDetailAry.map((item, idx) => {
              return (
                <ScheduleItem>
                  <ScheduleName>
                    <div>{item.schedule}</div>
                  </ScheduleName>
                  <img src={deleteImg} />
                </ScheduleItem>
              );
            })}
        </ScheduleArea>
      </Container>
    );
  }
}

Schedule.propTypes = {};

export default Schedule;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SearchBox = styled.div`
  width: 50%;
  height: 40px;
  border: 2px solid #707070;
  border-radius: 21px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 10px;
  box-sizing: border-box;
  margin-top: 20px;

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 90%;
    height: 30px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 60%;
    height: 35px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 55%;
  }
`;

const Search = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  //   border: 2px solid blue;
  //   background-color: #eb7252;
  //   border-radius: 0 21px 21px 0;
  box-sizing: border-box;
  > img {
    width: 24px;
    height: 24px;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 30px;
    > img {
      width: 16px;
      height: 16px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    > img {
      width: 20px;
      height: 20px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
  }
`;

const ScheduleArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;
const ScheduleItem = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #707070;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 8px 5px;
  box-sizing: border-box;
  width: 100%;
  > div {
    font-size: 15px;
    font-weight: 500;
    width: 90%;
  }

  > img {
    width: 18px;
    height: 18px;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    > div {
      font-size: 11px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    > div {
      font-size: 13px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    > div {
      font-size: 14px;
    }
  }
`;

const ScheduleName = styled.div`
  display: flex;
`;

const Input = styled.input`
  border: none;
  //   border: 1px solid #c7c7c7;
  // padding-bottom: 18px;
  outline: none;
  font-size: 15px;
  width: 100%;
  box-sizing: border-box;
  display: ${(props) => (props.domainType === 1 ? 'none' : 'block')};
  padding: 0 10px;

  ::placeholder {
    font-size: 12px;
    text-align: left;
  }
  :focus {
  }
  @media (min-width: 0px) and (max-width: 767.98px) {
    // width: ${(props) => (props.domainType === 2 ? '85px' : '200px')};
    height: 22px;
    font-size: 12px;
    // margin-bottom: 10px;
    padding: 0 8px;
    ::placeholder {
      font-size: 10px;
      text-align: left;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    // width: ${(props) => (props.domainType === 2 ? '150px' : '250px')};
    height: 25px;
    margin-left: ${(props) => (props.ml === 2 ? '10px' : '0px')};
  }
  @media (min-width: 992px) and (max-width: 1299.98px) {
    // width: ${(props) => (props.domainType === 2 ? '160px' : '300px')};
    height: 25px;
    margin-left: ${(props) => (props.ml === 2 ? '15px' : '0px')};
  }
  @media (min-width: 1300px) {
    // width: ${(props) => (props.domainType === 2 ? '160px' : '440px')};
    height: 30px;
    margin-left: ${(props) => (props.ml === 2 ? '15px' : '0px')};
  }
`;
