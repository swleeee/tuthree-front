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
import { toJS } from 'mobx';

const mobileCustomStyles = {
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: '#000',
      fontSize: 12,
      //   fontWeight: 'normal',
    };
  },
  dropdownIndicator: () => ({
    backgroundColor: '#fff',
    color: '#000',
    width: 14,
    height: 14,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#000000' : '#999999',
    backgroundColor: '#fff',
    borderRadius: 0,
    padding: 12,
    fontSize: 12,
  }),
  control: () => ({
    fontSize: 12,
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
    width: 30,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#000000' : '#999999',
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

@inject('Common', 'Tutor', 'Tutee')
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
    const { type, Tutee } = this.props;
    return (
      <Container>
        {type === 'tutor' ? (
          <>
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
                {/* <BoxContainer>
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
                </BoxContainer> */}
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
                    mr="15"
                    domainType={Tutor.domainType}
                  />
                </SelectBox>
                <InputBox>
                  <Input
                    //  width="80"
                    // value={Chatting.budget ? Chatting.budget : ''}
                    mr={5}
                    domainType={2}
                    placeholder="최소 급여"
                    onChange={(e) =>
                      Tutor.handleChange(e.target, 'lowerBudget')
                    }
                    onFocus={(e) => (e.target.placeholder = '')}
                    onBlur={(e) => (e.target.placeholder = '최소 급여')}
                  />
                  <div> ~ </div>
                  <Input
                    //  width="80"
                    // value={Chatting.budget ? Chatting.budget : ''}
                    ml={5}
                    domainType={2}
                    placeholder="최대 급여"
                    onChange={(e) =>
                      Tutor.handleChange(e.target, 'upperBudget')
                    }
                    onFocus={(e) => (e.target.placeholder = '')}
                    onBlur={(e) => (e.target.placeholder = '최대 급여')}
                  />
                </InputBox>
              </Content>
            </ItemBox>
            <ButtonBox>
              <Button
                color="#000000"
                bc="#aaaaaa"
                border="1px solid rgba(0, 0, 0, 0.1)"
                onClick={() => {
                  Tutor.budgetType = '';
                  Tutor.lowerBudget = '';
                  Tutor.upperBudget = '';
                  Tutor.selectedSubject = [];
                  Tutor.selectedLocation = [];
                  Tutor.tutorCurrentPage = 1;
                  Tutor.getTutorList(1);
                }}
              >
                <div>취소</div>
              </Button>
              <Button
                color="#fff"
                bc="rgba(235, 114, 82, 1)"
                // border="1px solid #707070"
                right={true}
                onClick={() => {
                  console.info(
                    `${Tutor.selectedUpperLocation} ${Tutor.selectedLowerLocation}`
                  );
                  console.info(
                    `${Tutor.selectedUpperSubject} ${Tutor.selectedLowerSubject}`
                  );

                  console.info(toJS(Tutor.selectedLocation));
                  console.info(toJS(Tutor.selectedSubject));

                  console.info(Tutor.budgetType);
                  console.info(Tutor.budgetType + ' ' + Tutor.lowerBudget);
                  console.info(Tutor.budgetType + ' ' + Tutor.upperBudget);
                  console.info(Tutor.upperBudget);
                  Tutor.tutorCurrentPage = 1;
                  Tutor.getTutorList(1);
                }}
              >
                <div>적용</div>
              </Button>
            </ButtonBox>
          </>
        ) : (
          <>
            <ItemBox>
              <Label>지역</Label>
              <Content>
                <SelectBox>
                  <Select
                    styles={
                      Common.width > 767.98 ? customStyles : mobileCustomStyles
                    }
                    value={{
                      name: Tutee.selectedUpperLocation
                        ? Tutee.selectedUpperLocation
                        : '시/도',
                      gugun: Tutee.selectedUpperLocation,
                    }}
                    onChange={(e) => Tutee.handleChange(e, 'upperLocation')}
                    getOptionLabel={(option) => option.name}
                    options={LocationList}
                    //  isSearchable={false}
                    placeholder="시/도"
                    // ml="15"
                    domainType={Tutee.domainType}
                  />

                  <Select
                    width={220}
                    id="lowerLocation"
                    styles={
                      Common.width > 767.98 ? customStyles : mobileCustomStyles
                    }
                    value={{
                      name: Tutee.selectedLowerLocation
                        ? Tutee.selectedLowerLocation
                        : '시/군/구',
                      gugun: Tutee.selectedLowerLocation,
                    }}
                    temp={Tutee.selectedLowerLocation}
                    onChange={(e) => Tutee.handleChange(e, 'lowerLocation')}
                    getOptionLabel={(option) => option.name}
                    // options={locationAry[Tutee.locationIndex].value}
                    options={Tutee.lowerLocationAry}
                    isSearchable={false}
                    placeholder={Tutee.selectedLowerLocation}
                    // placeholder={`ㅣㅣ`}
                    // onFocus={() => (this.placeholder = '')}
                    ml={Common.width > 767.98 && '15'}
                    domainType={Tutee.domainType}
                  />
                </SelectBox>
                <SelectArea>
                  {Tutee.selectedLocation.map((item, idx) => {
                    return (
                      <div
                        onClick={() => {
                          console.info('sdf');
                          Tutee.selectedLocation.splice(idx, 1);
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
                      label: Tutee.selectedUpperSubject
                        ? Tutee.selectedUpperSubject
                        : '상위 과목',
                      value: Tutee.selectedUpperSubject,
                    }}
                    onChange={(e) => Tutee.handleChange(e, 'upperSubject')}
                    getOptionLabel={(option) => option.label}
                    options={SubjectList}
                    //  isSearchable={false}
                    placeholder="시/도"
                    // ml="15"
                    domainType={Tutee.domainType}
                  />

                  <Select
                    width={220}
                    id="lowerLocation"
                    styles={
                      Common.width > 767.98 ? customStyles : mobileCustomStyles
                    }
                    value={{
                      label: Tutee.selectedLowerSubject
                        ? Tutee.selectedLowerSubject
                        : '하위 과목',
                      value: Tutee.selectedLowerSubject,
                    }}
                    onChange={(e) => Tutee.handleChange(e, 'lowerSubject')}
                    getOptionLabel={(option) => option.label}
                    // options={locationAry[Tutee.locationIndex].value}
                    options={Tutee.lowerSubjectAry}
                    isSearchable={false}
                    placeholder={Tutee.selectedLowerSubject}
                    // placeholder={`ㅣㅣ`}
                    // onFocus={() => (this.placeholder = '')}
                    ml={Common.width > 767.98 && '15'}
                    domainType={Tutee.domainType}
                  />
                </SelectBox>
                <SelectArea>
                  {Tutee.selectedSubject.map((item, idx) => {
                    return (
                      <div
                        onClick={() => {
                          Tutee.selectedSubject.splice(idx, 1);
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
                {/* <BoxContainer>
                  <Slider
                    color="warning"
                    getAriaLabel={() => 'Temperature range'}
                    value={Tutee.budgetValue}
                    onChange={this.handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={this.valuetext}
                    valueLabelDisplay="on"
                    valueLabelFormat={(value) => <div>{`${value}만원`}</div>}
                    // marks={Tutee.budgetMark}
                  />
                </BoxContainer> */}
                <SelectBox>
                  <Select
                    //  id={this.props.id}
                    //  className={this.props.className}
                    styles={
                      Common.width > 767.98 ? customStyles : mobileCustomStyles
                    }
                    //  value={value}
                    onChange={(e) => Tutee.handleChange(e, 'budgetType')}
                    getOptionLabel={(option) => option.label}
                    options={Tutee.budgetTypeAry}
                    //  isSearchable={false}
                    placeholder="선택하세요."
                    mr="15"
                    domainType={Tutee.domainType}
                  />
                </SelectBox>
                <InputBox>
                  <Input
                    //  width="80"
                    // value={Chatting.budget ? Chatting.budget : ''}
                    mr={5}
                    domainType={2}
                    placeholder="최소 급여"
                    onChange={(e) =>
                      Tutee.handleChange(e.target, 'lowerBudget')
                    }
                    onFocus={(e) => (e.target.placeholder = '')}
                    onBlur={(e) => (e.target.placeholder = '최소 급여')}
                  />
                  <div> ~ </div>
                  <Input
                    //  width="80"
                    // value={Chatting.budget ? Chatting.budget : ''}
                    ml={5}
                    domainType={2}
                    placeholder="최대 급여"
                    onChange={(e) =>
                      Tutee.handleChange(e.target, 'upperBudget')
                    }
                    onFocus={(e) => (e.target.placeholder = '')}
                    onBlur={(e) => (e.target.placeholder = '최대 급여')}
                  />
                </InputBox>
              </Content>
            </ItemBox>
            <ButtonBox>
              <Button
                color="#000000"
                bc="#aaaaaa"
                border="1px solid rgba(0, 0, 0, 0.1)"
                onClick={() => {
                  Tutee.budgetType = '';
                  Tutee.lowerBudget = '';
                  Tutee.upperBudget = '';
                  Tutee.selectedSubject = [];
                  Tutee.selectedLocation = [];
                  Tutee.tuteeCurrentPage = 1;
                  Tutee.getTuteeList(1);
                }}
              >
                <div>취소</div>
              </Button>
              <Button
                color="#fff"
                bc="rgba(235, 114, 82, 1)"
                // border="1px solid #707070"
                right={true}
                onClick={() => {
                  console.info(
                    `${Tutee.selectedUpperLocation} ${Tutee.selectedLowerLocation}`
                  );
                  console.info(
                    `${Tutee.selectedUpperSubject} ${Tutee.selectedLowerSubject}`
                  );

                  console.info(toJS(Tutee.selectedLocation));
                  console.info(toJS(Tutee.selectedSubject));

                  console.info(Tutee.budgetType);
                  console.info(Tutee.budgetType + ' ' + Tutee.lowerBudget);
                  console.info(Tutee.budgetType + ' ' + Tutee.upperBudget);
                  console.info(Tutee.upperBudget);
                  Tutee.tuteeCurrentPage = 1;
                  Tutee.getTuteeList(1);
                }}
              >
                <div>적용</div>
              </Button>
            </ButtonBox>
          </>
        )}
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
  // align-items: center;
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
  height: 50px;
  margin-left: ${(props) => (props.ml ? props.ml : '0')}px;
  margin-right: ${(props) => (props.mr ? props.mr : '0')}px;
  display: ${(props) => (props.domainType === 1 ? 'block' : 'none')};

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 100%;
    height: 35px;
    margin: 5px 0 5px 0;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: ${(props) => (props.width ? props.width - 55 : '155')}px;
    height: 40px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: ${(props) => (props.width ? props.width - 50 : '170')}px;
    height: 45px;
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

const Input = styled.input`
  border: none;
  border: 1px solid #c7c7c7;
  // padding-bottom: 18px;
  outline: none;
  font-size: 15px;
  width: 100%;
  box-sizing: border-box;
  display: ${(props) => (props.domainType === 1 ? 'none' : 'block')};
  padding: 0 10px;
  // text-align: right;
  ::placeholder {
    font-size: 12px;
    text-align: left;
  }
  :focus {
  }
  margin-left: ${(props) => (props.ml ? props.ml : '0')}px;
  margin-right: ${(props) => (props.mr ? props.mr : '0')}px;
  @media (min-width: 0px) and (max-width: 767.98px) {
    width: ${(props) => (props.domainType === 2 ? '85px' : '200px')};
    // margin-left: ${(props) => (props.ml ? props.ml : '0')}px;

    height: 35px;
    font-size: 12px;
    // margin-bottom: 10px;
    padding: 0 5px;
    ::placeholder {
      font-size: 10px;
      text-align: left;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: ${(props) => (props.domainType === 2 ? '130px' : '250px')};
    height: 40px;
    // margin-left: ${(props) => (props.ml ? props.ml : '0')}px;
  }
  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: ${(props) => (props.domainType === 2 ? '140px' : '300px')};
    height: 45px;
    // margin-left: ${(props) => (props.ml ? props.ml : '0')}px;
  }
  @media (min-width: 1300px) {
    width: ${(props) => (props.domainType === 2 ? '140px' : '440px')};
    height: 50px;
    // margin-left: ${(props) => (props.ml ? props.ml : '0')}px;
  }
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
`;
