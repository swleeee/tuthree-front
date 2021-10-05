import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import Common from '../stores/Common/Common';
import Tutor from '../stores/Matching/Tutor';
import SelectComponent from '../components/Select';
import deleteImg from '../static/images/Signup/delete.png';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

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
                  label: Tutor.selectedUpperLocation
                    ? Tutor.selectedUpperLocation
                    : '시/도',
                  value: Tutor.selectedUpperLocation,
                }}
                onChange={(e) => this.handleChange(e, 'upperLocation')}
                getOptionLabel={(option) => option.label}
                options={Common.locationAry}
                //  isSearchable={false}
                placeholder="시/도"
                // ml="15"
                domainType={Tutor.domainType}
              />

              <Select
                width={170}
                id="lowerLocation"
                styles={
                  Common.width > 767.98 ? customStyles : mobileCustomStyles
                }
                value={{
                  label: Tutor.selectedLowerLocation
                    ? Tutor.selectedLowerLocation
                    : '시/군/구',
                  value: Tutor.selectedLowerLocation,
                }}
                temp={Tutor.selectedLowerLocation}
                onChange={(e) => Tutor.handleChange(e, 'lowerLocation')}
                getOptionLabel={(option) => option.label}
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
                options={Common.subjectAry}
                //  isSearchable={false}
                placeholder="시/도"
                // ml="15"
                domainType={Tutor.domainType}
              />

              <Select
                width={170}
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
          <Label>예산</Label>
          <Content>
            <Box sx={{ width: 300 }}>
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
            </Box>
          </Content>
        </ItemBox>
        <ButtonBox>
          <Button color="#000000" bc="#fff" border="1px solid #000000">
            <div>취소</div>
          </Button>
          <Button color="#000000" bc="rgba(235, 114, 82, 0.7)" right={true}>
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
  //   height: 350px;
  //   border: 1px solid #707070;
  border-radius: 10px;
  box-shadow: 0 1px 5px 3px rgba(0, 0, 0, 0.5);
  padding: 23px 0px 0 30px;
  box-sizing: border-box;
`;
const Label = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-right: 50px;
  min-width: 50px;
`;
const Content = styled.div`
  display: flex;
  padding: 0 15px;
  box-sizing: border-box;
`;
const ItemBox = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
`;

const SelectBox = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: end;
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
`;

const Select = styled(SelectComponent)`
  width: ${(props) => (props.width ? props.width : '170')}px;
  height: 60px;
  margin-left: ${(props) => (props.ml ? props.ml : '0')}px;
  display: ${(props) => (props.domainType === 1 ? 'block' : 'none')};

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 140px;
    height: 40px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
  }
`;

const SelectArea = styled.div`
  //   width: 600px;
  width: 65%;
  // height: 80px;
  // border: 1px solid #c7c7c7;
  padding: 3px 15px;
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
