import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import ToggleButton from '../../../../components/ToggleButton';
import SelectComponent from '../../../../components/Select';
import deleteImg from '../../../../static/images/Signup/delete.png';
import LocationList from '../../../../sigungu.json';
import SubjectList from '../../../../subject.json';
import TextAreaContainer from '../../../../components/TextareaContainer';

const mobileCustomStyles = {
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: '#000',
      fontSize: 13,
    };
  },
  dropdownIndicator: () => ({
    backgroundColor: '#fff',
    color: '#000',
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#000000' : '#555555',
    backgroundColor: '#fff',
    borderRadius: 0,
    padding: 13,
    fontSize: 13,
  }),
  control: () => ({
    fontSize: 13,
    lineHeight: 1.2,
    border: '1px solid #c7c7c7',
    display: 'flex',
    height: '100%',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

const customStyles = {
  dropdownIndicator: () => ({
    backgroundColor: '#fff',
    color: '#000',
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#000000' : '#555555',
    backgroundColor: '#fff',
    borderRadius: 0,
    padding: 14,
    fontSize: 14,
    cursor: 'pointer',
  }),
  control: () => ({
    fontSize: 14,
    lineHeight: 1.2,
    border: '1px solid #c7c7c7',
    display: 'flex',
    height: '100%',
    cursor: 'pointer',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

@inject('MyPage', 'Common', 'Auth')
@observer
class TuteeContent extends Component {
  componentDidMount = async () => {
    const { MyPage, Auth, Common } = this.props;
    await MyPage.getTuteeInfo();
    MyPage.registrationState =
      MyPage.tutoringInfoAry.registration === 'OPEN' ? true : false;
    Auth.selectedLocation = MyPage.tutoringInfoAry.region;
    Auth.selectedSubject = MyPage.tutoringInfoAry.subject;
    // // MyPage.cost = MyPage.tutoringInfoAry.registration
    // console.info(MyPage.tutoringInfoAry.cost.split(' ')[1]);
    MyPage.cost = MyPage.tutoringInfoAry.cost.split(' ')[1];
    MyPage.costState = MyPage.tutoringInfoAry.cost.split(' ')[0];
    // MyPage.schoolState = MyPage.tutoringInfoAry.status;
    // MyPage.grade =
    //   MyPage.tutoringInfoAry.school === 'UNDER_MIDDLE'
    //     ? '유아/초등학생'
    //     : MyPage.tutoringInfoAry.school === 'M1'
    //     ? '중1'
    //     : MyPage.tutoringInfoAry.school === 'M2'
    //     ? '중2'
    //     : MyPage.tutoringInfoAry.school === 'M3'
    //     ? '중3'
    //     : MyPage.tutoringInfoAry.school === 'H1'
    //     ? '고1'
    //     : MyPage.tutoringInfoAry.school === 'H2'
    //     ? '고2'
    //     : MyPage.tutoringInfoAry.school === 'H3'
    //     ? '고3'
    //     : MyPage.tutoringInfoAry.school === 'OVER_HIGH'
    //     ? '성인'
    //     : MyPage.tutoringInfoAry.school === 'EXAM_M'
    //     ? '중학교 검정고시 준비'
    //     : MyPage.tutoringInfoAry.school === 'EXAM_H'
    //     ? '고등학교 검정고시 준비'
    //     : '';
    MyPage.grade = MyPage.tutoringInfoAry.school;
    // MyPage.major = MyPage.tutoringInfoAry.major;
    MyPage.detailContent = MyPage.tutoringInfoAry.detail;
  };

  render() {
    const { MyPage, Auth, Common } = this.props;
    return (
      <Container>
        <Header>
          <div>과외정보 조회/수정</div>
        </Header>
        <Main>
          <Item>
            <Label>모집 상태</Label>
            <ContentBox>
              <ToggleButton type="registration" />
            </ContentBox>
          </Item>

          <Item>
            <Label>지역</Label>
            <ContentBox>
              <WrapperBox>
                <Select
                  width={140}
                  styles={
                    Common.width > 767.98 ? customStyles : mobileCustomStyles
                  }
                  value={{
                    name: Auth.selectedUpperLocation
                      ? Auth.selectedUpperLocation
                      : '시/도',
                    gugun: Auth.selectedUpperLocation,
                  }}
                  onChange={(e) => Auth.handleChange(e, 'upperLocation')}
                  getOptionLabel={(option) => option.name}
                  options={LocationList}
                  //  isSearchable={false}
                  placeholder="시/도"
                  // ml="15"
                  domainType={Auth.domainType}
                />

                <Select
                  width={140}
                  id="lowerLocation"
                  styles={
                    Common.width > 767.98 ? customStyles : mobileCustomStyles
                  }
                  value={{
                    name: Auth.selectedLowerLocation
                      ? Auth.selectedLowerLocation
                      : '시/군/구',
                    gugun: Auth.selectedLowerLocation,
                  }}
                  temp={Auth.selectedLowerLocation}
                  onChange={(e) => Auth.handleChange(e, 'lowerLocation')}
                  getOptionLabel={(option) => option.name}
                  // options={locationAry[Auth.locationIndex].value}
                  options={Auth.lowerLocationAry}
                  isSearchable={false}
                  placeholder={Auth.selectedLowerLocation}
                  // placeholder={`ㅣㅣ`}
                  // onFocus={() => (this.placeholder = '')}
                  ml={Common.width > 767.98 && '15'}
                  domainType={Auth.domainType}
                />
              </WrapperBox>
              <SelectArea type="region">
                {Auth.selectedLocation.map((item, idx) => {
                  return (
                    <div
                      onClick={() => {
                        console.info('sdf');
                        Auth.selectedLocation.splice(idx, 1);
                      }}
                    >
                      <div>{item}</div>
                      <img src={deleteImg} />
                    </div>
                  );
                })}
              </SelectArea>
            </ContentBox>
          </Item>

          <Item>
            <Label>과목</Label>
            <ContentBox>
              <WrapperBox>
                <Select
                  width={140}
                  styles={
                    Common.width > 767.98 ? customStyles : mobileCustomStyles
                  }
                  value={{
                    label: Auth.selectedUpperSubject
                      ? Auth.selectedUpperSubject
                      : '상위 과목',
                    value: Auth.selectedUpperSubject,
                  }}
                  onChange={(e) => Auth.handleChange(e, 'upperSubject')}
                  getOptionLabel={(option) => option.label}
                  options={SubjectList}
                  //  isSearchable={false}
                  placeholder="시/도"
                  // ml="15"
                  domainType={Auth.domainType}
                />

                <Select
                  width={140}
                  id="lowerLocation"
                  styles={
                    Common.width > 767.98 ? customStyles : mobileCustomStyles
                  }
                  value={{
                    label: Auth.selectedLowerSubject
                      ? Auth.selectedLowerSubject
                      : '하위 과목',
                    value: Auth.selectedLowerSubject,
                  }}
                  onChange={(e) => Auth.handleChange(e, 'lowerSubject')}
                  getOptionLabel={(option) => option.label}
                  // options={locationAry[Auth.locationIndex].value}
                  options={Auth.lowerSubjectAry}
                  isSearchable={false}
                  placeholder={Auth.selectedLowerSubject}
                  // placeholder={`ㅣㅣ`}
                  // onFocus={() => (this.placeholder = '')}
                  ml={Common.width > 767.98 && '15'}
                  domainType={Auth.domainType}
                />
              </WrapperBox>
              <SelectArea type="subject">
                {Auth.selectedSubject.map((item, idx) => {
                  return (
                    <div
                      onClick={() => {
                        Auth.selectedSubject.splice(idx, 1);
                      }}
                    >
                      <div>{item}</div>
                      <img src={deleteImg} />
                    </div>
                  );
                })}
              </SelectArea>
            </ContentBox>
          </Item>

          <Item>
            <Label>학년</Label>
            <ContentBox>
              <Select
                //  id={this.props.id}
                //  className={this.props.className}
                width={140}
                styles={customStyles}
                //  value={value}
                value={{
                  label:
                    MyPage.grade === 'UNDER_MIDDLE'
                      ? '유아/초등학생'
                      : MyPage.grade === 'M1'
                      ? '중1'
                      : MyPage.grade === 'M2'
                      ? '중2'
                      : MyPage.grade === 'M3'
                      ? '중3'
                      : MyPage.grade === 'H1'
                      ? '고1'
                      : MyPage.grade === 'H2'
                      ? '고2'
                      : MyPage.grade === 'H3'
                      ? '고3'
                      : MyPage.grade === 'OVER_HIGH'
                      ? '성인'
                      : MyPage.grade === 'EXAM_M'
                      ? '중학교 검정고시 준비'
                      : MyPage.grade === 'EXAM_H'
                      ? '고등학교 검정고시 준비'
                      : '',
                  value: MyPage.grade && MyPage.grade,
                }}
                onChange={(e) => MyPage.onChangeHandler(e, 'grade')}
                getOptionLabel={(option) => option.label}
                options={Auth.gradeAry}
                //  isSearchable={false}
                placeholder="선택하세요."
                domainType={Auth.domainType}
              />
            </ContentBox>
          </Item>

          <Item>
            <Label>급여</Label>
            <ContentBox>
              <WrapperBox>
                <Select
                  width={140}
                  value={{
                    label: MyPage.costState ? MyPage.costState : '',
                    value: MyPage.costState && MyPage.costState,
                  }}
                  styles={
                    Common.width > 767.98 ? customStyles : mobileCustomStyles
                  }
                  onChange={(e) => MyPage.onChangeHandler(e, 'cost_state')}
                  getOptionLabel={(option) => option.label}
                  options={Auth.budgetTypeAry}
                  placeholder="선택하세요."
                  mr="25"
                  domainType={Auth.domainType}
                />
                <div>
                  <Input
                    //  width="80"
                    value={MyPage.cost}
                    domainType={2}
                    // placeholder="급여(ex: 350000, 650000)"
                    onChange={(e) => MyPage.onChangeHandler(e.target, 'cost')}
                    // onFocus={(e) => (e.target.placeholder = '')}
                    // onBlur={(e) =>
                    //   (e.target.placeholder = '급여(ex: 350000, 650000)')
                    // }
                  />
                  <span>원</span>
                </div>
              </WrapperBox>
            </ContentBox>
          </Item>

          <Item>
            <Label>소개</Label>
            <ContentBox>
              <TextArea
                type="tutor_info"
                placeholder=""
                value={MyPage.detailContent}
              />
            </ContentBox>
          </Item>
        </Main>
        <ButtonBox>
          <Button onClick={() => MyPage.putTuteeInfo()}>
            <div>수정</div>
          </Button>
        </ButtonBox>
      </Container>
    );
  }
}

export default TuteeContent;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #888;
  height: 100%;
  @media (min-width: 0px) and (max-width: 767.98px) {
    border-top: none;
  }
`;
const Header = styled.div`
  padding: 20px 40px;
  box-sizing: border-box;
  border-left: 1px solid #888;
  //   border-right: 1px solid #888;
  border-bottom: 2px solid #333;
  > div {
    font-size: 32px;
    font-weight: bold;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    padding: 12px 24px;
    > div {
      font-size: 24px;
    }
    border-left: none;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    padding: 16px 32px;
    > div {
      font-size: 24px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    padding: 18px 36px;
    > div {
      font-size: 28px;
    }
  }
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #888;
  margin-top: -1px;
`;
const Label = styled.div`
  padding: 20px 40px;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: bold;
  border-right: 1px solid #888;
  width: 20%;
  background-color: rgba(235, 114, 82, 0.3);
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 0px) and (max-width: 767.98px) {
    font-size: 14px;
    padding: 3px 6px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 16px;
    padding: 6px 12px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 25%;
    font-size: 18px;
    padding: 12px 24px;
  }
`;
const ContentBox = styled.div`
  display: flex;
  font-size: 16px;
  padding: 15px 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  // align-items: center;
  width: 100%;

  @media (min-width: 0px) and (max-width: 767.98px) {
    font-size: 11px;
    padding: 10px 8px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 13px;
    padding: 6px 15px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: 15px;
    padding: 12px 22px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  cursor: pointer;
  margin-top: 60px;
  background-color: rgb(235, 114, 82);
  border: none;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  > div {
    font-size: 16px;
    color: #fff;
    font-weight: bold;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 80px;
    height: 28px;
    > div {
      font-size: 12px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 100px;
    height: 32px;
    > div {
      font-size: 14px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    > div {
      font-size: 15px;
    }
  }
`;

const Select = styled(SelectComponent)`
  width: ${(props) => (props.width ? props.width : '170')}px;
  height: 40px;
  margin-left: ${(props) => (props.ml ? props.ml : '0')}px;
  margin-right: ${(props) => (props.mr ? props.mr : '0')}px;
  display: ${(props) => (props.domainType === 1 ? 'block' : 'none')};

  @media (min-width: 0px) and (max-width: 767.98px) {
    // width: 100%;
    height: 30px;
    margin-left: 0px;
    margin-bottom: 10px;

    .css-ougqiq-DropdownIndicator {
      height: 30px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    height: 34px;
    .css-ougqiq-DropdownIndicator {
      height: 34px;
    }
  }
  @media (min-width: 992px) and (max-width: 1299.98px) {
    height: 36px;
    .css-ougqiq-DropdownIndicator {
      height: 36px;
    }
  }
`;

const WrapperBox = styled.div`
  display: flex;
  // align-items: center;
  span {
    margin-left: 10px;
    align-self: center;
  }
  > div {
    display: flex;
    align-items: center;
  }
  @media (min-width: 0px) and (max-width: 767.98px) {
    flex-direction: column;
  }
`;

const SelectArea = styled.div`
  width: 100%;
  // height: 80px;
  // border: 1px solid #c7c7c7;
  padding: 5px 8px;
  box-sizing: border-box;
  margin-top: 10px;
  > div {
    display: inline-flex;
    align-items: center;
    background-color: ${(props) =>
      props.type === 'region' ? '#a596c4' : '#7eb1a8'};
    border-radius: 30px;
    padding: 3px 10px;
    box-sizing: border-box;
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    > div {
      font-size: 12px;
      margin-right: 10px;
    }
    > img {
      width: 12px;
      height: 12px;
    }
  }
`;

const Input = styled.input`
  border: none;
  border: 1px solid #c7c7c7;
  // padding-bottom: 18px;
  outline: none;
  font-size: 15px;
  width: 100%;
  box-sizing: border-box;
  display: ${(props) => (props.domainType === 1 ? 'none' : 'block')};
  padding-left: 10px;
  :focus {
  }
  @media (min-width: 0px) and (max-width: 767.98px) {
    width: ${(props) => (props.domainType === 2 ? '160px' : '200px')};
    height: 30px;
    font-size: 12px;
    margin-bottom: 10px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: ${(props) => (props.domainType === 2 ? '220px' : '250px')};
    height: 34px;
    margin-left: ${(props) => (props.ml === 2 ? '10px' : '0px')};
  }
  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: ${(props) => (props.domainType === 2 ? '220px' : '300px')};
    height: 36px;
    margin-left: ${(props) => (props.ml === 2 ? '15px' : '0px')};
  }
  @media (min-width: 1300px) {
    width: ${(props) => (props.domainType === 2 ? '220px' : '440px')};
    height: 40px;
    margin-left: ${(props) => (props.ml === 2 ? '15px' : '0px')};
  }
`;

const TextArea = styled(TextAreaContainer)`
  width: 100%;
  border: 3px solid red;
  height: 300px;
`;
