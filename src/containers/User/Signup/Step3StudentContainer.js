import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer, Provider } from 'mobx-react';
import { toJS } from 'mobx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as Connection,
} from 'react-router-dom';
import ProgressContainer from './ProgressContainer';
import SelectComponent from '../../../components/Select';
import FileUploadContainer from '../../../components/FileUpload';
import TextAreaContainer from '../../../components/TextareaContainer';

import Auth from '../../../stores/Account/Auth';
import Common from '../../../stores/Common/Common';

import deleteImg from '../../../static/images/Signup/delete.png';

const locationAry = [
  {
    id: 0,
    label: '경기도',
    value: [
      {
        label: '안양시',
        value: 1,
      },
      {
        label: '수원시',
        value: 2,
      },
      {
        label: '의왕시',
        value: 3,
      },
    ],
  },
  {
    id: 1,
    label: '강원도',
    value: [
      {
        label: '강릉시',
        value: 1,
      },
      {
        label: '원주시',
        value: 2,
      },
      {
        label: '속초시',
        value: 3,
      },
    ],
  },
  {
    id: 2,
    label: '서울특별시',
    value: [
      {
        label: '강남구',
        value: 1,
      },
      {
        label: '노원구',
        value: 2,
      },
      {
        label: '도봉구',
        value: 3,
      },
      {
        label: '송파구',
        value: 4,
      },
    ],
  },
];

const subjectAry = [
  {
    id: 0,
    label: '국어',
    value: [
      {
        label: '중등 국어',
        value: 1,
      },
      {
        label: '고등 국어(문법)',
        value: 2,
      },
      {
        label: '고등 국어(문학)',
        value: 3,
      },
    ],
  },
  {
    id: 1,
    label: '사회',
    value: [
      {
        label: '한국지리',
        value: 1,
      },
      {
        label: '윤리와 사상',
        value: 2,
      },
      {
        label: '한국사',
        value: 3,
      },
    ],
  },
  {
    id: 2,
    label: '과학',
    value: [
      {
        label: '생명과학',
        value: 1,
      },
      {
        label: '화학',
        value: 2,
      },
      {
        label: '물리',
        value: 3,
      },
      {
        label: '지구과학',
        value: 4,
      },
    ],
  },
];

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
    width: 50,
    height: 50,
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
    padding: 16,
    fontSize: 16,
    cursor: 'pointer',
  }),
  control: () => ({
    fontSize: 16,
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

@inject('Auth')
@observer
class Step3StudentContainer extends Component {
  // selectHandler = (e, type) => {
  //   console.log(e.value);
  //   // console.log(type);
  //   switch (type) {
  //     case 'grade':
  //       console.log('school');
  //       Auth.school = e.value;
  //       break;
  //     case 'bud':
  //       console.log('major');
  //       Auth.major = e.value;
  //       break;

  //     default:
  //       console.log('default');
  //   }
  // };

  render() {
    return (
      <Container>
        <Name>회원가입</Name>
        <ProgressContainer step="3" />
        <MainBox>
          <ItemBox>
            <div>지역</div>

            <Select
              styles={customStyles}
              styles={Common.width > 767.98 ? customStyles : mobileCustomStyles}
              value={{
                label: Auth.selectedUpperLocation
                  ? Auth.selectedUpperLocation
                  : '시/도',
                value: Auth.selectedUpperLocation,
              }}
              onChange={(e) => Auth.handleChange(e, 'upperLocation')}
              getOptionLabel={(option) => option.label}
              options={locationAry}
              //  isSearchable={false}
              placeholder="시/도"
              // ml="15"
              domainType={Auth.domainType}
            />

            <Select
              width={330}
              id="lowerLocation"
              styles={Common.width > 767.98 ? customStyles : mobileCustomStyles}
              value={{
                label: Auth.selectedLowerLocation
                  ? Auth.selectedLowerLocation
                  : '시/군/구',
                value: Auth.selectedLowerLocation,
              }}
              temp={Auth.selectedLowerLocation}
              onChange={(e) => Auth.handleChange(e, 'lowerLocation')}
              getOptionLabel={(option) => option.label}
              // options={locationAry[Auth.locationIndex].value}
              options={Auth.lowerLocationAry}
              isSearchable={false}
              placeholder={Auth.selectedLowerLocation}
              // placeholder={`ㅣㅣ`}
              // onFocus={() => (this.placeholder = '')}
              ml={Common.width > 767.98 && '15'}
              domainType={Auth.domainType}
            />
          </ItemBox>
          <ItemBox width="100%" height="100%">
            <div />
            <SelectArea>
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
          </ItemBox>

          <ItemBox>
            <div>과목</div>
            <Select
              styles={Common.width > 767.98 ? customStyles : mobileCustomStyles}
              value={{
                label: Auth.selectedUpperSubject
                  ? Auth.selectedUpperSubject
                  : '상위 과목',
                value: Auth.selectedUpperSubject,
              }}
              onChange={(e) => Auth.handleChange(e, 'upperSubject')}
              getOptionLabel={(option) => option.label}
              options={subjectAry}
              //  isSearchable={false}
              placeholder="시/도"
              // ml="15"
              domainType={Auth.domainType}
            />

            <Select
              width={330}
              id="lowerLocation"
              styles={Common.width > 767.98 ? customStyles : mobileCustomStyles}
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
          </ItemBox>
          <ItemBox width="100%" height="100%">
            <div />
            <SelectArea>
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
          </ItemBox>

          <ItemBox>
            <div>학년</div>

            <Select
              //  id={this.props.id}
              //  className={this.props.className}
              width={225}
              styles={customStyles}
              //  value={value}
              onChange={(e) => Auth.handleChange(e, 'grade')}
              getOptionLabel={(option) => option.label}
              options={Auth.gradeAry}
              //  isSearchable={false}
              placeholder="선택하세요."
              domainType={Auth.domainType}
            />
            {/* <OverlapBtn>중복확인</OverlapBtn> */}
          </ItemBox>

          <ItemBox>
            <div>급여</div>
            <Select
              //  id={this.props.id}
              //  className={this.props.className}
              styles={customStyles}
              //  value={value}
              onChange={(e) => Auth.handleChange(e, 'budget')}
              getOptionLabel={(option) => option.label}
              options={Auth.budgetAry}
              //  isSearchable={false}
              placeholder="선택하세요."
              // ml="15"
              domainType={Auth.domainType}
            />
          </ItemBox>
          <ItemBox height="100%">
            <div>요구사항</div>
            <TextArea
              type="studentSignup"
              placeholder="예) 수/금 16시, 주말 시간 가능(협의 가능)
                            시급 2만원 가능
                            개념 위주 말고 모의고사 위주로 했으면 좋겠습니다."
            />
          </ItemBox>
        </MainBox>
        <NextBtn
          onClick={async () => {
            await Auth.checkTuteeData('step1');
            if (Auth.signupAuthTwo) {
              await Auth.tuteeSignup();
              if (Auth.signupComplete) {
                Auth.step = 4;
                Auth.userType = 1;

                window.scrollTo(0, 0);
              } else {
                alert('회원가입에 실패하셨습니다.');
                window.location.href = '/';
              }
            }
          }}
        >
          <div>회원가입</div>
        </NextBtn>
      </Container>
    );
  }
}

export default Step3StudentContainer;

const Container = styled.div`
  width: 100%;
  //height: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 300px;
`;

const Name = styled.div`
  font-size: 40px;
  color: #eb7252;
  font-family: RobotoBlack;
  font-weight: bold;
  margin: 110px 0;

  @media (min-width: 0px) and (max-width: 767.98px) {
    font-size: 24px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 30px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: 36px;
  }
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0;
  width: 80%;
  // border: 3px solid green;
  justify-content: center;
  padding: 10px 30px;
  box-sizing: border-box;

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 100%;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 90%;
  }
`;
const WrapperBox = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
  }
`;
const ItemBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${(props) => (props.height ? props.height : '60px')};
  margin-bottom: 20px;
  // justify-content: space-around;
  > div:nth-of-type(1) {
    width: 250px;
    font-size: 20px;
    font-weight: bold;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    > div:nth-of-type(1) {
      width: 100px;
      font-size: 14px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    > div:nth-of-type(1) {
      width: 180px;
      font-size: 16px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    > div:nth-of-type(1) {
      width: 200px;
      font-size: 18px;
    }
  }
`;

const OverlapBtn = styled.button`
  background-color: rgba(235, 114, 82, 0.7);
  border-radius: 8px;
  border: none;
  width: 145px;
  height: 60px;
  font-size: 20px;
  font-weight: bold;
  margin-left: 15px;
  cursor: pointer;
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
    width: ${(props) => (props.domainType === 2 ? '145px' : '200px')};
    height: 40px;
    margin-left: ${(props) => (props.domainType === 2 ? '5px' : '0px')};
    font-size: 12px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: ${(props) => (props.domainType === 2 ? '145px' : '250px')};
    height: 60px;
    margin-left: ${(props) => (props.domainType === 2 ? '10px' : '0px')};
  }
  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: ${(props) => (props.domainType === 2 ? '145px' : '300px')};
    height: 60px;
    margin-left: ${(props) => (props.domainType === 2 ? '15px' : '0px')};
  }
  @media (min-width: 1300px) {
    width: ${(props) => (props.domainType === 2 ? '145px' : '440px')};
    height: 60px;
    margin-left: ${(props) => (props.domainType === 2 ? '15px' : '0px')};
  }
`;

const Select = styled(SelectComponent)`
  width: ${(props) => (props.width ? props.width : '170')}px;
  height: 60px;
  margin-left: ${(props) => (props.ml ? props.ml : '0')}px;
  display: ${(props) => (props.domainType === 1 ? 'block' : 'none')};

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 220px;
    height: 50px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
  }
`;

const Radiobox = styled.div`
  display: flex;
  width: 80px;
  // border: 2px solid black;
  cursor: pointer;
  > div:nth-of-type(1) {
    width: 20px;
    height: 20px;
    border: 1px solid black;
    border-radius: 50%;
    position: relative;
    > div {
      width: 12px;
      height: 12px;
      background-color: black;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: ${(props) => (props.type ? 'block' : 'none')};
    }
  }
  > span {
    font-size: 16px;
    margin-left: 10px;
  }
`;

const NextBtn = styled.div`
  width: 200px;
  height: 60px;
  border-radius: 30px;
  background-color: rgba(235, 114, 82, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  > div {
    font-size: 20px;
    font-weight: bold;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 140px;
    height: 50px;
    > div {
      font-size: 14px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 160px;
    height: 50px;
    > div {
      font-size: 16px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 180px;
    height: 50px;
    > div {
      font-size: 18px;
    }
  }
`;

const FileUpload = styled(FileUploadContainer)`
  width: 100%;
`;

const TextArea = styled(TextAreaContainer)`
  width: 100%;
  border: 3px solid red;
  height: 300px;
`;

const SelectArea = styled.div`
  width: 600px;
  // height: 80px;
  // border: 1px solid #c7c7c7;
  padding: 5px 8px;
  box-sizing: border-box;

  > div {
    display: inline-flex;
    align-items: center;
    background-color: #aaaaaa;
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
