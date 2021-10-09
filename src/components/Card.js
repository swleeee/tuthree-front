import React, { Component } from 'react';
import styled from 'styled-components';
import starImg from '../static/images/Common/star.png';
import maleImg from '../static/images/Common/male.png';
import femaleImg from '../static/images/Common/female.png';

class Card extends Component {
  render() {
    const {
      type,
      name,
      rating,
      gender,
      school,
      subject,
      location,
      budget,
      registration,
    } = this.props;
    return (
      <Container>
        <Img>
          <div>Img</div>
        </Img>
        <Content>
          <Box>
            {' '}
            <Label ml={5} fw="bold">
              {name}
              {gender === 'MALE' ? (
                <img src={maleImg} />
              ) : (
                <img src={femaleImg} />
              )}
            </Label>
            <Label mr={5}>
              <img src={starImg} />
              {rating}
            </Label>
          </Box>

          <Label>{school}</Label>
          <Label>{subject}</Label>
          <Label>{location}</Label>
          <Box>
            {' '}
            <Label>{budget}</Label>
            <Label>
              <Recruitment type={registration === 'OPEN'}>
                {registration === 'OPEN' ? (
                  <div>모집중</div>
                ) : (
                  <div>모집마감</div>
                )}
              </Recruitment>
            </Label>
          </Box>
        </Content>
      </Container>
    );
  }
}

export default Card;

const Container = styled.div`
  cursor: pointer;
  width: 250px;
  height: 350px;
  border: 2px solid #707070;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  @media (min-width: 0px) and (max-width: 767.98px) {
    margin: 0 15px 20px 15px;
    // width: 225px;
  }
`;
const Img = styled.div`
  width: 100%;
  height: 150px;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #707070;
  > div {
    font-size: 20px;
    font-weight: bold;
  }
`;
const Content = styled.div`
  padding: 15px 15px 0 15px;
  box-sizing: border-box;
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Label = styled.div`
  margin-bottom: 15px;
  font-weight: ${(props) => (props.fw ? props.fw : 'normal')};
  > img {
    margin-right: ${(props) => (props.mr ? props.mr : '5')}px;
    margin-left: ${(props) => (props.ml ? props.ml : '5')}px;
  }
`;

const Recruitment = styled.div`
  // width: 60px;
  // height: 20px;
  border-radius: 18px;
  background-color: ${(props) =>
    props.type ? 'rgba(0, 85, 225, 0.6)' : 'rgba(255, 0, 0, 0.6)'};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 15px;
  box-sizing: border-box;
  > div {
    color: ${(props) => (props.type ? 'black' : 'white')};
    font-size: 12px;
  }
`;
