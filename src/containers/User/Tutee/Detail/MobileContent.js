import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer, Provider } from 'mobx-react';
import Tutor from '../../../../stores/Matching/Tutor';
import emptyStarImg from '../../../../static/images/Common/emptyStar.png';
import starImg from '../../../../static/images/Common/star.png';
import viewImg from '../../../../static/images/Common/visibility.png';
import communicationImg from '../../../../static/images/Common/communication.png';
import maleImg from '../../../../static/images/Common/male.png';
import femaleImg from '../../../../static/images/Common/female.png';
import defaultImg from '../../../../static/images/Common/defaultUser.png';

const reviewData = [
  {
    id: 1,
    name: '김철수',
    writingDt: '2021-09-01',
    rating: '4.2',
    content:
      'dsfsdkfsdjfklsdfdfdsfdsfsdfdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsssdfsdfkljsdfjkldsfdfsdsldkjfsdlfjkdlsfdskjfkldsjfkldsjfkljdsfsdkfjsdlkfjsdkfjsdkljfklsd',
  },
  {
    id: 2,
    name: '김철수',
    writingDt: '2021-09-01',
    rating: '4.2',
    content:
      'dsfsdkfsdjfklsdfsldkjfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdlfjkdlsfdskjfkldsjfkldsjfkljdsfsdkfjsdlkfjsdkfjsdkljfklsd',
  },
  {
    id: 3,
    name: '김철수',
    writingDt: '2021-09-01',
    rating: '4.2',
    content:
      'ddsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfsdsfsdkfsdjfklsdfdfdsfdsfsdfssfsdkfsdjfklsdfsldkjfsdlfjkdlsfdskjfkldsjfkldsjfkljdsfsdkfjsdlkfjsdkfjsdkljfklsd',
  },
];

@inject('Tutee')
@observer
class MobileContent extends Component {
  render() {
    const { Tutee } = this.props;
    return (
      <Container>
        <Number>
          <View>
            <img src={viewImg} />
            <div>74</div>
          </View>
          <TotalRating>
            <img src={starImg} />
            <div>{Tutee.tuteeDetailAry.star}</div>
          </TotalRating>
          <Registration type={Tutee.tuteeDetailAry.registration !== 'CLOSE'}>
            {Tutee.tuteeDetailAry.registration === 'CLOSE'
              ? '모집마감'
              : '모집중'}
          </Registration>
        </Number>
        <MainContent>
          <Header>
            <ImgBox width={130} height={130} mb={40}>
              <div>
                {/* <div>Img</div> */}
                <img src={defaultImg} />
              </div>
            </ImgBox>
            <ItemBox>
              <Name mb={16}>
                <Label type="name" mr={15}>
                  {Tutee.tuteeDetailAry.name}
                </Label>
                {Tutee.tuteeDetailAry.sex === 'MALE' ? (
                  <img src={maleImg} />
                ) : (
                  <img src={femaleImg} />
                )}
              </Name>
              <Name>
                <Label>학력</Label>
                <Content>{Tutee.tuteeDetailAry.school}</Content>
              </Name>

              <Name>
                <Label>비용</Label>
                <Content>{Tutee.tuteeDetailAry.cost}</Content>
              </Name>
            </ItemBox>
          </Header>

          <Section>
            <Label>과목</Label>
            <Content>영어, 수학,dsf sdfsdfsdfsdfsdfsdf</Content>
          </Section>

          <Section>
            <Label>지역</Label>
            <Content>경기도 의왕시</Content>
          </Section>

          <Section>
            <Label mb={10}>소개</Label>
            <Content bd={true} pd={true}>
              {Tutee.tuteeDetailAry.detail}
            </Content>
          </Section>
        </MainContent>
      </Container>
    );
  }
}

export default MobileContent;

const Container = styled.div`
  margin-right: 20px;
  width: 95%;
  display: flex;
  flex-direction: column;
  border: 2px solid #000;
  border-radius: 10px;
  //   height: 1200px;
  padding: 20px 15px;
  box-sizing: border-box;
`;
const MainContent = styled.div``;
const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${(props) => (props.mb ? props.mb : '0')}px;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${(props) => (props.width ? props.width : '0')}px;
    height: ${(props) => (props.height ? props.height : '0')}px;

    // background-color: #ccc;
    // border: 1px solid #707070;
    > div {
      font-size: 20px;
      font-weight: bold;
    }
  }
  @media (min-width: 0px) and (max-width: 392px) {
    > div {
      width: 100%;
      > img {
        width: 92px;
        height: 92px;
      }
    }
  }
`;
const Section = styled.div`
  margin-bottom: 50px;
`;
// const Name = styled.div`
//   font-weight: bold;
//   font-size: 32px;
//   margin-bottom: 20px;
// `;
const Content = styled.div`
  width: 100%;
  border: ${(props) => (props.bd ? '1px solid #707070' : 'none')};
  word-break: break-all;
  padding: ${(props) => (props.pd ? '12px 12px' : '12px 0')};
  box-sizing: border-box;
  font-size: 12px;
`;
const ReviewContainer = styled.div``;
const ReviewHeader = styled.div`
  margin-bottom: 25px;
  //   padding-bottom: 15px;
  //   border-bottom: 1px solid #707070;
`;
const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => (props.mb ? props.mb : '0')}px;
`;
const Count = styled.div`
  font-size: 12px;
  > span {
    font-weight: bold;
  }
`;
const SortingBox = styled.div`
  > span {
    border-right: 1px solid #888;
    padding 0 5px;
    box-sizing: border-box;
    font-size: 10px;
  }
`;
const Rating = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-left: 13px;
    font-size: 14px;
  }
  img {
    margin: 0 1px;
    width: 14px;
    height: 14px;
  }
`;
const ReviewMainBox = styled.div``;
const Item = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding: 20px 0;
  box-sizing: border-box;
`;
const SubItem = styled.div`
  display: flex;
`;
const ReviewLabel = styled.div`
  margin-left: 20px;
`;
const ReviewSubLabel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;
const ReviewName = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-right: 15px;
`;
const ReviewWritingDt = styled.div`
  font-size: 11px;
  color: rgba(0, 0, 0, 0.5);
`;
const ReviewRating = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-left: 13px;
    font-size: 12px;
  }
  img {
    margin: 0 1px;
    width: 16px;
    height: 16px;
  }
`;
const ReviewContent = styled.div`
  width: 100%;
  margin-top: 25px;
  border: 1px solid #707070;
  > div {
    font-size: 11px;
    word-break: break-all;
    padding: 10px 15px;
    box-sizing: border-box;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const ItemBox = styled.div`
  width: 100%;
  margin-left: 15px;
  align-self: flex-start;
`;
const Name = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => (props.mb ? props.mb : '0')}px;
  > img {
    width: 16px;
    height: 16px;
  }
`;
const Number = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 30px;
`;
const View = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  > img {
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }
`;
const TotalRating = styled.div`
  display: flex;
  align-items: center;
  > img {
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }
`;
const Registration = styled.div`
  //   width: 60px;
  //   height: 20px;
  border-radius: 18px;
  background-color: ${(props) =>
    props.type ? 'rgba(0, 85, 225, 0.6)' : 'rgba(255, 0, 0, 0.6)'};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 15px;
  box-sizing: border-box;
  font-size: 10px;
  font-weight: bold;
  margin-left: 25px;
  > div {
    color: ${(props) => (props.type ? 'black' : 'white')};
  }
`;
const Main = styled.div``;
const SubMain = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  > img {
    width: 20px;
    height: 20px;
  }
`;
const Label = styled.div`
  font-weight: bold;
  margin-right: 20px;
  min-width: 40px;
  font-size: ${(props) => (props.type === 'name' ? '20' : '14')}px;
  margin-right: ${(props) => (props.mr ? props.mr : '5')}px;
  margin-bottom: ${(props) => (props.mb ? props.mb : '0')}px;
`;
