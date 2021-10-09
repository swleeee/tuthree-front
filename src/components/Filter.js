import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import Common from '../stores/Common/Common';
import Tutor from '../stores/Matching/Tutor';
import SelectComponent from '../components/Select';
import deleteImg from '../static/images/Signup/delete.png';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import LocationList from '../sigungu.json';
import SubjectList from '../subject.json';

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

const tabletCustomStyles = {
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
    width: 45,
    height: 45,
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
    padding: 15,
    fontSize: 15,
  }),
  control: () => ({
    fontSize: 15,
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
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: '#000',
      fontSize: Common.width > 1299.98 ? 16 : 15,
    };
  },
  dropdownIndicator: () => ({
    backgroundColor: '#fff',
    color: '#000',
    width: Common.width > 1299.98 ? 50 : 45,
    height: Common.width > 1299.98 ? 50 : 45,
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
    padding: Common.width > 1299.98 ? 16 : 15,
    fontSize: Common.width > 1299.98 ? 16 : 15,
    cursor: 'pointer',
  }),
  control: () => ({
    fontSize: Common.width > 1299.98 ? 16 : 15,
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

@inject('Common', 'Tutor')
@observer
class Filter extends Component {
  valuetext = (value) => {
    return `${value}만원`;
  };

  handleChange = (event, newValue) => {
    console.info(newValue);
    Tutor.budgetValue = newValue;
  };

  render() {
    console.info('ren');
    return (
      <Container>
        <ItemBox>
          <Label>지역</Label>
          <Content>
            <SelectBox>
              <Select
                styles={
                  Common.width > 767.98 ? customStyles : mobileCustomStyles
                }
                value={{
                  name: Tutor.selectedUpperLocation
                    ? Tutor.selectedUpperLocation
                    : '시/도',
                  gugun: Tutor.selectedUpperLocation,
                }}
                onChange={(e) => Tutor.handleChange(e, 'upperLocation')}
                getOptionLabel={(option) => option.name}
                options={LocationList}
                //  isSearchable={false}
                placeholder="시/도"
                // ml="15"
                domainType={Tutor.domainType}
              />

              <Select
                width={220}
                id="lowerLocation"
                styles={
                  Common.width > 767.98 ? customStyles : mobileCustomStyles
                }
                value={{
                  name: Tutor.selectedLowerLocation
                    ? Tutor.selectedLowerLocation
                    : '시/군/구',
                  gugun: Tutor.selectedLowerLocation,
                }}
                temp={Tutor.selectedLowerLocation}
                onChange={(e) => Tutor.handleChange(e, 'lowerLocation')}
                getOptionLabel={(option) => option.name}
                // options={locationAry[Tutor.locationIndex].value}
                options={Tutor.lowerLocationAry}
                isSearchable={false}
                placeholder={Tutor.selectedLowerLocation}
                // placeholder={`ㅣㅣ`}
                // onFocus={() => (this.placeholder = '')}
                ml={Common.width > 767.98 && '15'}
                domainType={Tutor.domainType}
              />
            </SelectBox>
            <SelectArea>
              {Tutor.selectedLocation.map((item, idx) => {
                return (
                  <div
                    onClick={() => {
                      console.info('sdf');
                      Tutor.selectedLocation.splice(idx, 1);
                    }}
                  >
                    <div>{item}</div>
                    <img src={deleteImg} />
                  </div>
                );
              })}
            </SelectArea>
          </Content>
        </ItemBox>
        <ItemBox>
          <Label>과목</Label>
          <Content>
            {' '}
            <SelectBox>
              <Select
                styles={
                  Common.width > 767.98 ? customStyles : mobileCustomStyles
                }
                value={{
                  label: Tutor.selectedUpperSubject
                    ? Tutor.selectedUpperSubject
                    : '상위 과목',
                  value: Tutor.selectedUpperSubject,
                }}
                onChange={(e) => Tutor.handleChange(e, 'upperSubject')}
                getOptionLabel={(option) => option.label}
                options={SubjectList}
                //  isSearchable={false}
                placeholder="시/도"
                // ml="15"
                domainType={Tutor.domainType}
              />

              <Select
                width={220}
                id="lowerLocation"
                styles={
                  Common.width > 767.98 ? customStyles : mobileCustomStyles
                }
                value={{
                  label: Tutor.selectedLowerSubject
                    ? Tutor.selectedLowerSubject
                    : '하위 과목',
                  value: Tutor.selectedLowerSubject,
                }}
                onChange={(e) => Tutor.handleChange(e, 'lowerSubject')}
                getOptionLabel={(option) => option.label}
                // options={locationAry[Tutor.locationIndex].value}
                options={Tutor.lowerSubjectAry}
                isSearchable={false}
                placeholder={Tutor.selectedLowerSubject}
                // placeholder={`ㅣㅣ`}
                // onFocus={() => (this.placeholder = '')}
                ml={Common.width > 767.98 && '15'}
                domainType={Tutor.domainType}
              />
            </SelectBox>
            <SelectArea>
              {Tutor.selectedSubject.map((item, idx) => {
                return (
                  <div
                    onClick={() => {
                      Tutor.selectedSubject.splice(idx, 1);
                    }}
                  >
                    <div>{item}</div>
                    <img src={deleteImg} />
                  </div>
                );
              })}
            </SelectArea>
          </Content>
        </ItemBox>
        <ItemBox>
          <Label mb={45}>예산</Label>
          <Content>
            <BoxContainer>
              <Slider
                color="warning"
                getAriaLabel={() => 'Temperature range'}
                value={Tutor.budgetValue}
                onChange={this.handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={this.valuetext}
                valueLabelDisplay="on"
                valueLabelFormat={(value) => <div>{`${value}만원`}</div>}
                // marks={Tutor.budgetMark}
              />
            </BoxContainer>
            <SelectBox>
              <Select
                //  id={this.props.id}
                //  className={this.props.className}
                styles={
                  Common.width > 767.98 ? customStyles : mobileCustomStyles
                }
                //  value={value}
                onChange={(e) => Tutor.handleChange(e, 'budgetType')}
                getOptionLabel={(option) => option.label}
                options={Tutor.budgetTypeAry}
                //  isSearchable={false}
                placeholder="선택하세요."
                ml="50"
                domainType={Tutor.domainType}
              />
            </SelectBox>
          </Content>
        </ItemBox>
        <ButtonBox>
          <Button
            color="#000000"
            bc="#aaaaaa"
            border="1px solid rgba(0, 0, 0, 0.1)"
          >
            <div>취소</div>
          </Button>
          <Button
            color="#fff"
            bc="rgba(235, 114, 82, 1)"
            // border="1px solid #707070"
            right={true}
          >
            <div>적용</div>
          </Button>
        </ButtonBox>
      </Container>
    );
  }
}

export default Filter;

const Container = styled.div`
  width: 100%;
  height: 100%;
  //   height: 350px;
  //   border: 1px solid #707070;
  border-radius: 10px;
  box-shadow: 0 1px 5px 3px rgba(0, 0, 0, 0.5);
  padding: 23px 0px 0 30px;
  box-sizing: border-box;

  @media (min-width: 0px) and (max-width: 767.98px) {
    padding: 8px 0px 0 18px;
  }
`;
const Label = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-right: 50px;
  min-width: 50px;

  @media (min-width: 0px) and (max-width: 767.98px) {
    min-width: 0px;
    font-size: 16px;
    margin-bottom: ${(props) => (props.mb ? props.mb : '0')}px;
  }
`;
const Content = styled.div`
  display: flex;
  padding: 0 15px;
  box-sizing: border-box;
  // border: 2px solid red;
  // flex-wrap: wrap;
  width: 100%;
  @media (min-width: 0px) and (max-width: 767.98px) {
    padding: 0;
    flex-direction: column;
    flex-wrap: wrap;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    flex-wrap: wrap;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    flex-wrap: wrap;
  }
`;
const ItemBox = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  @media (min-width: 0px) and (max-width: 767.98px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
  }
`;

const SelectBox = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 0px) and (max-width: 767.98px) {
    // flex-wrap: wrap;
    width: 80%;
    flex-direction: column;
    align-self: flex-start;
  }
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (min-width: 0px) and (max-width: 767.98px) {
    margin-top: 10px;
  }
`;
const Button = styled.button`
  cursor: pointer;
  width: 180px;
  height: 60px;
  color: ${(props) => (props.color ? props.color : '#000000')};
  background-color: ${(props) => (props.bc ? props.bc : '#ffffff')};
  border: ${(props) => (props.border ? props.border : 'none')};
  border-radius: ${(props) => (props.right ? '0 0 10px 0' : 'none')};
  > div {
    font-size: 18px;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 120px;
    height: 40px;
    > div {
      font-size: 14px;
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 150px;
    height: 50px;
    > div {
      font-size: 16px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 160px;
    height: 55px;
    > div {
      font-size: 17px;
    }
  }
`;

const Select = styled(SelectComponent)`
  width: ${(props) => (props.width ? props.width : '170')}px;
  height: 60px;
  margin-left: ${(props) => (props.ml ? props.ml : '0')}px;
  display: ${(props) => (props.domainType === 1 ? 'block' : 'none')};

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 100%;
    height: 40px;
    margin: 5px 0 5px 0;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: ${(props) => (props.width ? props.width - 55 : '155')}px;
    height: 45px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: ${(props) => (props.width ? props.width - 50 : '170')}px;
    height: 55px;
  }
`;

const SelectArea = styled.div`
  //   width: 600px;
  width: 65%;
  // height: 80px;
  // border: 1px solid #c7c7c7;
  padding: 10px 15px;
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

  @media (min-width: 0px) and (max-width: 767.98px) {
    > div {
      margin-right: 5px;
      margin-bottom: 3px;
      padding: 3px 7px;
      > div {
        font-size: 10px;
      }
      > img {
        width: 10px;
        height: 10px;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 89%;
    > div {
      margin-right: 8px;
      margin-bottom: 7px;
      > div {
        font-size: 11px;
      }
      > img {
        width: 11px;
        height: 11px;
      }
    }
  }
`;

const BoxContainer = styled(Box)`
  width: 300px;
  align-self: center;
  padding: 0 10px 0 20px;

  @media (min-width: 0px) and (max-width: 767.98px) {
    align-self: flex-start;
    width: 70%;
    .MuiSlider-valueLabelCircle {
      font-size: 0.525rem;
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    .MuiSlider-valueLabelCircle {
      font-size: 0.675rem;
    }
  }
`;
