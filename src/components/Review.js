import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import fullStarImg from '../static/images/Common/full_star.png';
import TextAreaContainer from '../components/TextareaContainer';

@inject('Common', 'MyClass')
@observer
class Review extends Component {
  starCheckHandler = async (starId, bool) => {
    const { MyClass } = this.props;
    // console.log(`${star_id}번째 클릭 : ${bool}`);
    // MyClass.starAry.map((data) => {
    //   //   console.log(data.id - 1);
    //   if (starId === data.id - 1) {
    //     // console.log("TTTTTTTTTTT");
    //   }
    // });

    MyClass.starAry.map((data, idx) => {
      if (starId + 1 == data.id) {
        MyClass.starAry[idx].checked = bool;
      }
    });
    //console.log(this.state.star_ary);
  };

  starRatingHandler = async (starId) => {
    const { MyClass } = this.props;
    if (MyClass.starAry[starId - 1].checked) {
      //this.state.star_ary[star_id - 1].checked = false;
      const bool = false;

      for (let i = 0; i < starId - 1; i++) {}
      for (let i = starId; i < 5; i++) {
        await this.starCheckHandler(i, bool);
      }
    } else {
      const bool = true;
      for (let i = 0; i < starId; i++) {
        await this.starCheckHandler(i, bool);
      }
    }
    MyClass.ratingPoint = starId;
    // console.log(toJS(Partner.ratingPoint));
  };

  render() {
    const { open, MyClass } = this.props;
    console.info(MyClass.ratingPoint);
    return (
      <ModalBox
        modal={open ? 'openModal modal' : 'modal'}
        style={{ display: open ? 'block' : 'none' }}
      >
        {open ? (
          <>
            <button
              className="close"
              onClick={(e) => {
                console.info('close');
                e.stopPropagation();
                MyClass.reviewModalActive = false;
              }}
            >
              {' '}
              &times;{' '}
            </button>
            <Container>
              <Header>리뷰 작성</Header>
              <Main>
                <Section>
                  <Label>평점</Label>
                  <Content>
                    {MyClass.starAry &&
                      MyClass.starAry.map((item, idx) => {
                        return (
                          <StarImg starActive={item.checked}>
                            <img
                              src={fullStarImg}
                              onClick={() => this.starRatingHandler(idx + 1)}
                            />
                          </StarImg>
                        );
                      })}
                  </Content>
                </Section>
                <Section>
                  {/* <Description> */}
                  <Label />
                  <Description>
                    {MyClass.starAry &&
                      MyClass.starAry[MyClass.ratingPoint - 1].content2}
                  </Description>
                  {/* </Description> */}
                </Section>
                <Section>
                  <Label>리뷰내용</Label>
                  <Content width="100%">
                    {' '}
                    <TextArea
                      mih={150}
                      bd={true}
                      type="reviewWriting"
                      value={MyClass.reportContent}
                      placeholder="리뷰 내용을 자유롭게 작성해주세요."
                    />
                  </Content>
                </Section>
              </Main>
              <ButtonBox>
                <Button color="#fff" bcolor="rgb(235, 114, 82)">
                  <div>리뷰 등록</div>
                </Button>
              </ButtonBox>
            </Container>
          </>
        ) : null}
      </ModalBox>
    );
  }
}

export default Review;

const ModalBox = styled.div`
  // display: none;
  //   position: fixed;
  //top: 40%;
  //right: 14%;
  // bottom: 0;
  // left: 0;
  z-index: 101;
  background-color: white;
  //   height: 635px;
  //   height: 800px;
  padding-bottom: 30px;
  box-sizing: border-box;
  width: 80%;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 40%);
  border-radius: 10px;
  //   max-height: 75vh;
  //   top: 0;
  overflow-y: scroll !important;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  > button {
    outline: none;
    cursor: pointer;
    border: 0;
    font-size: 21px;
    font-weight: 700;
    //margin-left: 10px;
    margin: 10px 10px 0 0;
    float: right;
    color: #000000;
    border-radius: 50%;
    background-color: #f1f1f1;
  }
  @media (min-width: 0px) and (max-width: 767.98px) {
    width: 95%;
    // position: fixed;
    // z-index: 101;
    // height: 150px;
    // width: 90%;

    > button {
      // font-size: 14px;
      margin: 5px 5px 0 0;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
  }
  @media (min-width: 992px) and (max-width: 1299.98px) {
  }
  @media (min-width: 1300px) {
  }
`;

const Container = styled.div`
  max-width: 900px;
  width: 90%;
  //   height: 90%;
  //   height: 500px;
  min-height: 400px;

  margin: 0 auto;
  border-radius: 0.3rem;
  //background-color: blanchedalmond;
  //border: 1px solid blue;
  @media (min-width: 0px) and (max-width: 767.98px) {
    max-width: 100%;
    width: 90%;
    height: 40%;
  }
`;

const Header = styled.div`
  position: relative;
  padding: 16px;
  //padding-top: 0;
  //background-color: #f1f1f1;
  font-weight: 700;
  // margin-bottom: 30px;
  text-align: center;
  border-bottom: 2px solid #333;
  font-size: 30px;
  @media (min-width: 0px) and (max-width: 767.98px) {
    position: relative;
    padding: 8px;
    font-weight: 700;
    font-size: 22px;
    margin-top: 30px;
  }
`;
const Main = styled.div`
  background-color: white;
  font-color: white;

  display: flex;

  flex-direction: column;

  justify-content: center;

  height: 80%;
  width: 100%;
  margin-top: 10px;

  @media (min-width: 0px) and (max-width: 767.98px) {
    height: 100%;
    font-size: 16px;
    font-weight: 600;
  }
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  margin: 5px 0;
`;

const Label = styled.div`
  width: 20%;
  font-size: 18px;
  font-weight: bold;
  min-width: 100px;

  @media (min-width: 0px) and (max-width: 767.98px) {
    font-size: 13px;
    min-width: 70px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 15%;
    font-size: 16px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 15%;
    font-size: 17px;
  }
`;
const Content = styled.div`
  position: relative;
  width: ${(props) => (props.width ? props.width : '')};
  display: flex;
  align-items: center;

  font-size: 14px;
  margin-left: 5px;
  word-break: break-word;
  font-weight: 400;

  @media (min-width: 0px) and (max-width: 767.98px) {
    font-size: 11px;
    margin-left: 5px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 12px;
    margin-left: 5px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: 13px;
    margin-left: 5px;
  }
`;
const StarImg = styled.div`
  width: 100%;
  margin-right: 5px;
  > img {
    filter: ${(props) =>
      props.starActive
        ? 'sepia(80%) saturate(10)'
        : 'invert(0.5) opacity(0.5)'};
    cursor: pointer;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    > img {
      width: 18px;
      height: 18px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    > img {
      width: 20px;
      height: 20px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    > img {
      width: 22px;
      height: 22px;
    }
  }
`;
const Description = styled.div`
  color: #1c44c0;
  font-weight: bold;
  font-size: 14px;

  @media (min-width: 0px) and (max-width: 767.98px) {
    font-size: 10px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 12px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: 13px;
  }
`;

const TextArea = styled(TextAreaContainer)`
  width: 100%;
  border: 3px solid red;
  height: 300px;
`;

const ButtonBox = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  //   width: 180px;
  height: 50px;
  color: ${(props) => (props.color ? props.color : '')};
  background-color: ${(props) => (props.bcolor ? props.bcolor : '')};
  border: ${(props) => (props.border ? props.border : 'none')};
  margin: 0 50px;
  //   margin-bottom: 200px;
  border-radius: 3px;
  cursor: pointer;
  width: 70%;
  > div {
    font-size: 18px;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    min-width: 120px;
    height: 32px;
    margin: 0 30px;
    > div {
      font-size: 14px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    // width: 180px;
    height: 36px;
    > div {
      font-size: 16px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    // width: 180px;
    height: 40px;
    > div {
      font-size: 17px;
    }
  }
`;
