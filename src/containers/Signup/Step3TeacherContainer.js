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
import SelectComponent from '../../components/Select';
import FileUploadContainer from '../../components/FileUpload';
import TextAreaContainer from '../../components/TextareaContainer';

import makeAnimated from 'react-select/animated';

import Auth from '../../stores/Account/Auth';
const animatedComponents = makeAnimated();

const stateSchoolAry = [
  {
    label: '재학상태',
    value: '재학상태',
  },
  {
    label: '졸업상태',
    value: '졸업상태',
  },
  {
    label: '휴학상태',
    value: '휴학상태',
  },
];

const budgetAry = [
  {
    label: '10만원',
    value: 100000,
  },
  {
    label: '20만원',
    value: 200000,
  },
  {
    label: '30만원',
    value: 300000,
  },
  {
    label: '40만원',
    value: 400000,
  },
  {
    label: '50만원',
    value: 500000,
  },
  {
    label: '60만원',
    value: 600000,
  },
  {
    label: '70만원',
    value: 700000,
  },
  {
    label: '80만원',
    value: 800000,
  },
  {
    label: '90만원',
    value: 900000,
  },
  {
    label: '100만원 이상',
    value: 1000000,
  },
];
const emailAry = [
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
  }),
  control: () => ({
    fontSize: 16,
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

@inject('Auth')
@observer
class Step3TeacherContainer extends Component {
  state = {
    locationIndex: 0,
    lowerLocationAry: [],
    // fileArray: [],
    // fileName: '',
    // file: '',
    // checkFileUpload: false,
  };
  componentDidMount = () => {
    // for (let i = 2021; i > 1900; i--) {
    //   birthAry.push({ label: i, value: i });
    // }
    // console.log(birthAry);
  };

  handleChange = (e, type) => {
    console.info(e);
    switch (type) {
      case 'upperLocation':
        console.info('upperLocation');
        Auth.locationIndex = e.id;
        Auth.setUpperLocation(e);
        Auth.lowerLocationAry = [];
        console.info(Auth.locationIndex);
        // console.info(emailAry[Auth.locationIndex].value);
        // Auth.temp = '선택';
        // this.setState({
        //   lowerLocationAry: this.state.lowerLocationAry.push(e.value),
        // });
        // Auth.lowerLocationAry.push(e)
        // console.info(e.value);
        e.value.map((item, idx) => {
          console.info(item);
          Auth.lowerLocationAry.push(item);
        });
        // for(let i=0; i<e.value.length < i++){
        //     Auth.lowerLocationAry.pu
        // }
        console.info(toJS(Auth.lowerLocationAry));

        // let lowerN = document.getElementById('lowerLocation');
        // lowerN.append('');
        // lowerN.innerHTML = '';
        //   .getElementsByClassName('css-319lph-ValueContainer');
        //   .getElementsByClassName('css-14e12xx-placeholder');
        // console.info(lowerN);
        // console.info(lowerN.placeholder);
        // console.info(lowerN.value);

        // lowerN.value = 'sdf';
        // console.info(lowerN[0].outerText);
        // console.info(lowerN[0]);
        // console.info(lowerN.value);
        // lowerN.value
        // console.info(lowerN[0].getOptionLabel);
        // console.info(lowerN.target);

        // lowerN = 'sdf';
        break;
      case 'lowerLocation':
        console.info('lowerLocation');
        console.info(e);
        // Auth.setLowerLocation(e);
        console.info(e.label);
        // e.label = '선택';
        Auth.temp = e.label;
        console.info(Auth.temp);
        break;
      default:
        break;
    }
  };

  inputHandler = (e, type) => {
    console.log(e.value);
    // console.log(type);
    switch (type) {
      case 'id':
        console.log('id');
        break;
      case 'password':
        console.log('password');
        break;
      case 'passwordConfirm':
        console.log('passwordConfirm');
        break;
      case 'name':
        console.log('name');
        break;
      case 'email':
        console.log('email');
        break;
      case 'phone':
        console.log('phone');
        break;
      case 'certification':
        console.log('certification');
        break;
      case 'gender':
        console.log('gender');
        break;
      case 'birth':
        console.log('birth');
        break;
      default:
        console.log('default');
    }
  };
  changeHandler = (e) => {
    console.info(e.target);
  };
  render() {
    console.log(emailAry[1]);
    console.info('======================================');
    // console.info(emailAry[Auth.locationIndex].value[0].label);
    console.info(Auth.selectedLowerLocation);
    return (
      <Container>
        <Name>과외선생님 회원가입</Name>
        <ProgressContainer step="3" />
        <MainBox>
          <ItemBox>
            <div>지역</div>

            <Select
              //  id={this.props.id}
              //  className={this.props.className}
              styles={customStyles}
              //  value={value}
              onChange={(e) => this.handleChange(e, 'upperLocation')}
              getOptionLabel={(option) => option.label}
              options={emailAry}
              //  isSearchable={false}
              placeholder="시/도"
              // ml="15"
              domainType={Auth.domainType}
            />

            {/* <select name="language" onChange={(e) => this.changeHandler(e)}>
                {emailAry.map((item, idx) => {
                  return (
                    <>
                      <option value={item.label}>{item.label}</option>
                    </>
                  );
                })}
              </select>

              <select name="language">
                {emailAry.map((item, idx) => {
                  return (
                    <>
                      <option value={item.value}>{item.label}</option>
                    </>
                  );
                })}
              </select> */}

            <Select
              width={330}
              isDisabled
              isMulti={true}
              defaultValue={Auth.selectedLowerLocation}
              id="lowerLocation"
              //  className={this.props.className}
              styles={customStyles}
              // value=""
              // value="1"
              // value={(option) => {
              //   console.info(option);
              // }}
              temp={Auth.selectedLowerLocation}
              onChange={(e) => this.handleChange(e, 'lowerLocation')}
              getOptionLabel={(option) => option.label}
              //options={emailAry[Auth.locationIndex].value}
              options={Auth.lowerLocationAry}
              //  isSearchable={false}
              placeholder={Auth.selectedLowerLocation}
              // placeholder={`ㅣㅣ`}
              // onFocus={() => (this.placeholder = '')}
              ml="15"
              domainType={Auth.domainType}
            />
          </ItemBox>
          <ItemBox>
            <div>과목</div>

            <Select
              //  id={this.props.id}
              //  className={this.props.className}
              styles={customStyles}
              //  value={value}
              onChange={(e) => this.handleChange(e, 'upperLocation')}
              getOptionLabel={(option) => option.label}
              options={emailAry}
              //  isSearchable={false}
              placeholder="시/도"
              // ml="15"
              domainType={Auth.domainType}
            />

            <Select
              width={330}
              isDisabled
              isMulti={true}
              defaultValue={Auth.selectedLowerLocation}
              id="lowerLocation"
              //  className={this.props.className}
              styles={customStyles}
              // value=""
              // value="1"
              // value={(option) => {
              //   console.info(option);
              // }}
              temp={Auth.selectedLowerLocation}
              onChange={(e) => this.handleChange(e, 'lowerLocation')}
              getOptionLabel={(option) => option.label}
              //options={emailAry[Auth.locationIndex].value}
              options={Auth.lowerLocationAry}
              //  isSearchable={false}
              placeholder={Auth.selectedLowerLocation}
              // placeholder={`ㅣㅣ`}
              // onFocus={() => (this.placeholder = '')}
              ml="15"
              domainType={Auth.domainType}
            />
          </ItemBox>
          <ItemBox>
            <div>학교</div>
            <WrapperBox>
              <Input
                placeholder="학교"
                // onChange={this.onIdHandler}
                onFocus={(e) => (e.target.placeholder = '')}
                onBlur={(e) => (e.target.placeholder = '학교')}
              />
              <Select
                //  id={this.props.id}
                //  className={this.props.className}
                styles={customStyles}
                //  value={value}
                onChange={(e) => this.handleChange(e, 'email')}
                getOptionLabel={(option) => option.label}
                options={stateSchoolAry}
                //  isSearchable={false}
                placeholder="선택하세요."
                ml="15"
                domainType={Auth.domainType}
              />
              {/* <OverlapBtn>중복확인</OverlapBtn> */}
            </WrapperBox>
          </ItemBox>
          <ItemBox>
            <div>학과</div>
            <Input
              placeholder="학과"
              // onChange={this.onIdHandler}
              onFocus={(e) => (e.target.placeholder = '')}
              onBlur={(e) => (e.target.placeholder = '학과')}
            />
          </ItemBox>
          <ItemBox>
            <div>재학증명서</div>
            <FileUpload file={true} />
          </ItemBox>
          <ItemBox>
            <div>급여</div>
            <Select
              //  id={this.props.id}
              //  className={this.props.className}
              styles={customStyles}
              //  value={value}
              onChange={(e) => this.handleChange(e, 'email')}
              getOptionLabel={(option) => option.label}
              options={budgetAry}
              //  isSearchable={false}
              placeholder="선택하세요."
              // ml="15"
              domainType={Auth.domainType}
            />
          </ItemBox>
          <ItemBox height="100%">
            <div>소개</div>
            <TextArea />
          </ItemBox>
        </MainBox>
        <NextBtn
          onClick={() => {
            Auth.step = 4;
            Auth.userType = 1;
          }}
        >
          <div>회원가입</div>
        </NextBtn>
      </Container>
    );
  }
}

export default Step3TeacherContainer;

const Container = styled.div`
  width: 100%;
  // height: 1200px;
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
const PasswordBox = styled.div``;
const PasswordConfirmBox = styled.div``;
const NameBox = styled.div``;
const EmailBox = styled.div``;
const PhoneBox = styled.div``;
const CertificationBox = styled.div``;
const GenderBox = styled.div``;
const BirthBox = styled.div``;

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

  //   @media (min-width: 0px) and (max-width: 767.98px) {
  //     width: 100%;
  //     margin-top: 0px !important;
  //     margin-bottom: 8px !important;
  //   }
  //   @media (min-width: 768px) and (max-width: 991.98px) {
  //     width: 100%;
  //   }
  //   @media (min-width: 992px) and (max-width: 1299.98px) {
  //     width: 100%;
  //   }
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
`;

const FileUpload = styled(FileUploadContainer)`
  width: 100%;
`;

const TextArea = styled(TextAreaContainer)`
  width: 100%;
  border: 3px solid red;
  height: 300px;
`;
