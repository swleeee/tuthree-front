import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer, Provider } from 'mobx-react';
import Tutor from '../../../../stores/Matching/Tutor';
import emptyStarImg from '../../../../static/images/Common/emptyStar.png';
import starImg from '../../../../static/images/Common/star.png';
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
class DetailContent extends Component {
  render() {
    const { Tutee } = this.props;
    return (
      <Container>
        <MainContent>
          <ImgBox width={300} height={300} mb={60}>
            <div>
              {/* <div>Img</div> */}
              {Tutee.tuteeDetailAry.post ? (
                <img
                  src={`data:image/png;base64,${Tutee.tuteeDetailAry.post}`}
                />
              ) : (
                <img src={defaultImg} />
              )}
            </div>
          </ImgBox>
          <Introduction>
            <Name>소개</Name>
            <Content>{Tutee.tuteeDetailAry.detail}</Content>
          </Introduction>
        </MainContent>
      </Container>
    );
  }
}

export default DetailContent;

const Container = styled.div`
  margin-right: 20px;
  width: 75%;
  display: flex;
  flex-direction: column;
  border: 2px solid #000;
  border-radius: 10px;
  //   height: 1200px;
  padding: 40px 50px;
  box-sizing: border-box;

  @media (min-width: 768px) and (max-width: 991.98px) {
    padding: 24px 30px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    padding: 32px 40px;
  }
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
      font-size: 30px;
      font-weight: bold;
    }
    > img {
      width: 256px;
      height: 256px;
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    margin-bottom: ${(props) => (props.mb ? props.mb - 20 : '0')}px;
    > div {
      img {
        width: 192px;
        height: 192px;
      }
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    margin-bottom: ${(props) => (props.mb ? props.mb - 10 : '0')}px;
    > div {
      img {
        width: 228px;
        height: 228px;
      }
    }
  }
`;
const Introduction = styled.div`
  margin-bottom: 100px;
`;
const Name = styled.div`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 20px;
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 22px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: 26px;
  }
`;
const Content = styled.div`
  width: 100%;
  border: 1px solid #707070;
  word-break: break-all;
  padding: 16px 12px;
  box-sizing: border-box;
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 14px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: 16px;
  }
`;
const ReviewContainer = styled.div``;
const ReviewHeader = styled.div`
  margin-bottom: 50px;
  @media (min-width: 768px) and (max-width: 991.98px) {
    margin-bottom: 24px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    margin-bottom: 36px;
  }
`;
const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => (props.mb ? props.mb : '0')}px;
`;
const Count = styled.div`
  font-size: 18px;
  > span {
    font-weight: bold;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 14px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: 16px;
  }
`;
const SortingBox = styled.div`
  > span {
    border-right: 1px solid #888;
    padding 0 5px;
    box-sizing: border-box;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 12px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: 14px;
  }
`;
const Rating = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-left: 13px;
  }
  img {
    margin: 0 1px;
    width: 16px;
    height: 16px;
  }
`;
const ReviewMainBox = styled.div``;
const Item = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding: 20px 0;
  box-sizing: border-box;

  @media (min-width: 768px) and (max-width: 991.98px) {
    padding: 12px 0;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    padding: 16px 0;
  }
`;
const SubItem = styled.div`
  display: flex;
`;
const ReviewLabel = styled.div`
  margin-left: 20px;
`;
const ReviewSubLabel = styled.div`
  display: flex;
  margin-bottom: 18px;
`;
const ReviewName = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-right: 15px;
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 14px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: 15px;
  }
`;
const ReviewWritingDt = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 12px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: 13px;
  }
`;
const ReviewRating = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-left: 13px;
  }
  img {
    margin: 0 1px;
    width: 16px;
    height: 16px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 13px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: 14px;
  }
`;
const ReviewContent = styled.div`
  width: 100%;
  margin-top: 25px;
  border: 1px solid #707070;
  > div {
    word-break: break-all;
    padding: 20px 30px;
    box-sizing: border-box;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 14px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: 15px;
  }
`;
