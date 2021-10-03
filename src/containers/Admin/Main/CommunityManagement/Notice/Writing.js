import React, { Component } from 'react';
import styled from 'styled-components';
import SelectComponent from '../../../../../components/Select';
import { inject, observer } from 'mobx-react';
import AdminCommunity from '../../../../../stores/Admin/Community';
import Common from '../../../../../stores/Common/Common';
import TextAreaContainer from '../../../../../components/TextareaContainer';
import { toJS } from 'mobx';

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

const noticeStateAry = [
  { label: '중요', value: '중요' },
  { label: '일반', value: '일반' },
];

@inject('AdminCommunity', 'Common')
@observer
class Writing extends Component {
  componentDidMount = () => {
    console.info('didmount');
    if (AdminCommunity.noticeWritingState === 1) {
      console.info(toJS(AdminCommunity.noticeDetailList));
      AdminCommunity.noticeTitle = AdminCommunity.noticeDetailList[0].title;
      AdminCommunity.noticeContent = AdminCommunity.noticeDetailList[0].content;
      AdminCommunity.noticeState =
        AdminCommunity.noticeDetailList[0].type.korType;
      console.info(AdminCommunity.noticeState);
      this.setState({ g: 3 });
    }
  };

  componentWillUnmount = () => {
    AdminCommunity.noticeDetailList = [];
    AdminCommunity.noticeWritingState = 0;
    AdminCommunity.state = 1;
    AdminCommunity.noticeTitle = '';
    AdminCommunity.noticeContent = '';
  };

  render() {
    console.info('render');
    return (
      <Container>
        <Item>
          <Section>
            <Name>
              <div>분류</div>
            </Name>
            <Content>
              <Select
                //  id={this.props.id}
                //  className={this.props.className}
                styles={
                  Common.width > 767.98 ? customStyles : mobileCustomStyles
                }
                value={{
                  label: AdminCommunity.noticeState,
                  value: AdminCommunity.noticeState,
                }}
                onChange={(e) =>
                  AdminCommunity.onSelectHandler(e, 'noticeState')
                }
                getOptionLabel={(option) => option.label}
                options={noticeStateAry}
                //  isSearchable={false}
                placeholder="선택하세요."
                domainType={1}
              />
            </Content>
          </Section>
          <Section>
            <Name>
              <div>제목</div>
            </Name>
            <Content>
              {/* <TextArea type="noticeTitle" placeholder="입력하세요" /> */}
              <Input
                placeholder="제목을 입력하세요."
                onChange={(e) =>
                  AdminCommunity.onInputHandler(e.target, 'noticeTitle')
                }
                onFocus={(e) => (e.target.placeholder = '')}
                onBlur={(e) => (e.target.placeholder = '제목을 입력하세요')}
                value={AdminCommunity.noticeTitle}
              />
            </Content>
          </Section>
          <Section mb={true}>
            <Name>
              <div>내용</div>
            </Name>
            <Content>
              <TextArea
                value={AdminCommunity.noticeContent}
                type="noticeContent"
                placeholder="입력하세요"
              />
            </Content>
          </Section>
          <ButtonBox>
            <Button color="#000" bcolor="#fff" border="1px solid #000">
              <div>취소</div>
            </Button>

            <Button
              color="#fff"
              bcolor="rgb(235, 114, 82)"
              onClick={() => {
                console.info('click');
                if (AdminCommunity.noticeWritingState === 0) {
                  AdminCommunity.setAdminNotice();
                } else {
                  AdminCommunity.putAdminNotice(
                    AdminCommunity.noticeDetailList[0].id
                  );
                }
              }}
            >
              {AdminCommunity.noticeWritingState === 0 ? (
                <div>등록</div>
              ) : (
                <div>수정</div>
              )}
            </Button>
          </ButtonBox>
        </Item>
      </Container>
    );
  }
}

export default Writing;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

const Item = styled.div`
  width: 80%;
  height: 100%;
  //   border: 2px solid black;
`;

const Section = styled.div`
  display: flex;
  // height:
  border: 1px solid #707070;
  border-bottom: ${(props) => (props.mb ? '1px solid #707070' : 'none')};
  box-sizing: border-box;

  width: 100%;
`;
const Name = styled.div`
  background-color: #cccccc;
  width: 150px;
  border-right: 1px solid #707070;
  box-sizing: border-box;
  flex-grow: 1;
  display: felx;
  justify-content: center;
  align-items: center;

  > div {
    font-size: 24px;
  }
`;

const Content = styled.div`
  flex-grow: 8;
  padding: 5px 20px;
  box-sizing: border-box;
  min-height: 100px;
  display: flex;
  align-items: center;
  width: 100%;
`;

const Select = styled(SelectComponent)`
  width: 170px;
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

const TextArea = styled(TextAreaContainer)`
  //   width: 100%;
  //   border: 3px solid red;
  //   height: 300px;
`;

const ButtonBox = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 200px;
  height: 60px;
  color: ${(props) => (props.color ? props.color : '')};
  background-color: ${(props) => (props.bcolor ? props.bcolor : '')};
  border: ${(props) => (props.border ? props.border : 'none')};
  margin: 0 50px;
  margin-bottom: 200px;
  border-radius: 3px;
  > div {
    font-size: 20px;
  }
`;

const Input = styled.input`
  border: none;
  // border: 1px solid #c7c7c7;
  // padding-bottom: 18px;
  outline: none;
  font-size: 15px;
  // width: 100%;
  box-sizing: border-box;
  // display: ${(props) => (props.domainType === 1 ? 'none' : 'block')};
  // padding-left: 10px;
  :focus {
  }
  @media (min-width: 0px) and (max-width: 767.98px) {
    height: 40px;
    font-size: 12px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    height: 60px;
  }
  @media (min-width: 992px) and (max-width: 1299.98px) {
    height: 60px;
  }
  @media (min-width: 1300px) {
    width: 100%;
    height: 60px;
  }
`;
