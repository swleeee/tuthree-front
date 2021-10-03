import React, { Component } from 'react';
import styled from 'styled-components';
import SelectComponent from '../../../../../components/Select';
import { inject, observer } from 'mobx-react';
import AdminCommunity from '../../../../../stores/Admin/Community';
import Common from '../../../../../stores/Common/Common';
import TextAreaContainer from '../../../../../components/TextareaContainer';

@inject('AdminCommunity', 'Common')
@observer
class DetailContent extends Component {
  componentWillUnmount = () => {
    AdminCommunity.faqDetailList = [];
  };
  render() {
    return (
      <Container>
        <Item>
          <Section>
            <SubSection width={100}>
              <Name>
                <div>제목</div>
              </Name>
              <Content>
                {AdminCommunity.faqDetailList &&
                  AdminCommunity.faqDetailList[0] &&
                  AdminCommunity.faqDetailList[0].title}
              </Content>
            </SubSection>
            <SubSection width={30} bl={true}>
              <Name>
                <div>분류</div>
              </Name>
              <Content width={30}>
                {AdminCommunity.faqDetailList &&
                  AdminCommunity.faqDetailList[0] &&
                  AdminCommunity.faqDetailList[0].type.korType}
              </Content>
            </SubSection>

            <SubSection width={40} bl={true}>
              <Name>
                <div>날짜</div>
              </Name>
              <Content width={40}>
                {AdminCommunity.faqDetailList &&
                  AdminCommunity.faqDetailList[0] &&
                  AdminCommunity.faqDetailList[0].writeAt}
              </Content>
            </SubSection>
          </Section>
          <Section mb={true}>
            <Name>
              <div>내용</div>
            </Name>
            <Content height={500}>
              {AdminCommunity.faqDetailList &&
                AdminCommunity.faqDetailList[0] &&
                AdminCommunity.faqDetailList[0].content}
            </Content>
          </Section>
          <ButtonBox>
            <Button
              color="#fff"
              bcolor="rgb(235, 114, 82)"
              onClick={() => (AdminCommunity.state = 1)}
            >
              <div>목록</div>
            </Button>

            <Button
              color="#fff"
              bcolor="#0b7def"
              onClick={() => {
                AdminCommunity.state = 2;
                AdminCommunity.faqWritingState = 1;
                AdminCommunity.pushToDetailFaq(AdminCommunity.faqDetailList[0]);
              }}
            >
              <div>수정</div>
            </Button>

            <Button
              color="#fff"
              bcolor="#ff0000"
              onClick={() => {
                AdminCommunity.delAdminFaq(AdminCommunity.faqDetailList[0].id);
              }}
            >
              <div>삭제</div>
            </Button>

            {/* <Button
              color="#fff"
              bcolor="rgb(235, 114, 82)"              
            >
              <div>등록</div>
            </Button> */}
          </ButtonBox>
        </Item>
      </Container>
    );
  }
}

export default DetailContent;

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

  border: 1px solid #707070;
  border-bottom: ${(props) => (props.mb ? '1px solid #707070' : 'none')};
  box-sizing: border-box;

  width: 100%;
`;

const SubSection = styled.div`
  width: ${(props) => (props.width ? props.width : '')}%;
  //   border: 2px solid black;
  display: flex;
  border-left: ${(props) => (props.bl ? '1px solid #707070' : '')};
`;

const Name = styled.div`
  background-color: #cccccc;
  width: 100px;
  border-right: 1px solid #707070;
  box-sizing: border-box;
  flex-grow: 3;
  display: felx;
  justify-content: center;
  align-items: center;
  min-width: 100px;

  > div {
    font-size: 24px;
  }
`;

const Content = styled.div`
  flex-grow: 8;
  padding: 5px 20px;
  box-sizing: border-box;
  min-height: ${(props) => (props.height ? props.height : '70')}px;
  display: flex;
  align-items: center;
  width: ${(props) => (props.width ? props.width : '100')}%;
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
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  color: ${(props) => (props.color ? props.color : '')};
  background-color: ${(props) => (props.bcolor ? props.bcolor : '')};
  border: ${(props) => (props.border ? props.border : 'none')};
  margin: 0 10px;
  margin-bottom: 200px;
  border-radius: 3px;
  cursor: pointer;
  > div {
    font-size: 18px;
  }
`;
