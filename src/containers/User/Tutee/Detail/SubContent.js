import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer, Provider } from 'mobx-react';
import viewImg from '../../../../static/images/Common/visibility.png';
import starImg from '../../../../static/images/Common/star.png';
import communicationImg from '../../../../static/images/Common/communication.png';
import maleImg from '../../../../static/images/Common/male.png';
import femaleImg from '../../../../static/images/Common/female.png';
import Modal from '../../../../components/Modal';
import Common from '../../../../stores/Common/Common';

@inject('Auth', 'Common', 'Tutee')
@observer
class SubContent extends Component {
  openModal = () => {
    Common.modalActive = false;
  };
  closeModal = () => {
    Common.modalActive = true;
  };

  render() {
    const { Tutee } = this.props;
    return (
      <>
        <Container width={Common.width}>
          <Header>
            <Number>
              <View>
                <img src={viewImg} />
                <div>74</div>
              </View>
              <Rating>
                <img src={starImg} />
                <div>{Tutee.tuteeDetailAry.star}</div>
              </Rating>
            </Number>
            <Registration type={Tutee.tuteeDetailAry.registration !== 'CLOSE'}>
              {Tutee.tuteeDetailAry.registration === 'CLOSE'
                ? '모집마감'
                : '모집중'}
            </Registration>
          </Header>
          <Main>
            <SubMain>
              <Label type="name">{Tutee.tuteeDetailAry.name}</Label>
              {Tutee.tuteeDetailAry.sex === 'MALE' ? (
                <img src={maleImg} />
              ) : (
                <img src={femaleImg} />
              )}
            </SubMain>

            <SubMain>
              <Label>학력</Label>
              <Content>
                {Tutee.tuteeDetailAry.school} {Tutee.tuteeDetailAry.major}
              </Content>
            </SubMain>

            <SubMain>
              <Label>과목</Label>
              <Content>영어, 수학,dsf sdfsdfsdfsdfsdfsdf</Content>
            </SubMain>

            <SubMain>
              <Label>지역</Label>
              <Content>경기도 의왕시</Content>
            </SubMain>

            <SubMain>
              <Label>비용</Label>
              <Content>{Tutee.tuteeDetailAry.cost}</Content>
            </SubMain>
          </Main>
          <ButtonBox>
            <Button
              onClick={() => {
                console.info('click');
                // Common.modalActive = true;
                window.location.href = '/chatting';
              }}
            >
              <img src={communicationImg} />
              <div>1:1 문의</div>
            </Button>
          </ButtonBox>
        </Container>
        {/* {Common.modalActive === true && (
          <Modal
            // width={width}
            open={this.openModal}
            close={this.closeModal}
          />
        )} */}
        <Modal />
      </>
    );
  }
}

export default SubContent;

const Container = styled.div`
  // margin-right: 20px;
  width: 340px;
  //   width: 25%;
  display: flex;
  flex-direction: column;
  border: 2px solid #000;
  border-radius: 10px;
  //   height: 420px;
  height: fit-content;
  //   height: 100%;
  padding: 14px 15px;
  box-sizing: border-box;
  position: sticky;
  //   position: static;
  //   position: fixed;
  top: 3%;
  right: 0;
  //   right: 10%;
  //   left: 85%;

  //   transform: translateX(-50%);

  @media (min-width: 768px) and (max-width: 991.98px) {
    padding: 10px 8px;
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const Number = styled.div`
  display: flex;
`;
const View = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  > img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
`;
const Rating = styled.div`
  display: flex;
  align-items: center;
  > img {
    width: 20px;
    height: 20px;
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
  font-size: 11px;
  // font-weight: bold;
  color: ${(props) => (props.type ? 'black' : 'white')};
  > div {
    // color: ${(props) => (props.type ? 'black' : 'white')};
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
  font-size: ${(props) => (props.type === 'name' ? '32' : '20')}px;
  font-weight: bold;
  margin-right: 20px;

  @media (min-width: 768px) and (max-width: 991.98px) {
    min-width: 36px;
    font-size: ${(props) => (props.type === 'name' ? '24' : '16')}px;
    margin-right: 15px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: ${(props) => (props.type === 'name' ? '28' : '18')}px;
    margin-right: 18px;
    min-width: 36px;
  }
`;
const Content = styled.div`
  font-size: 16px;
  word-break: break-all;

  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 13px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: 15px;
  }
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
const Button = styled.button`
  cursor: pointer;
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 1px solid #707070;
  border: none;
  border-radius: 24px;
  position: relative;
  background-color: rgba(235, 114, 82, 0.7);
  > img {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
  }
  > div {
    font-size: 16px;
    font-weight: bold;
  }
`;
