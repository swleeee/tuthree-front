import React, { Component } from 'react';
import styled from 'styled-components';

class Card extends Component {
  render() {
    const { name, rating, school, subject, location, budget, recruitment } =
      this.props;
    return (
      <Container>
        <Img></Img>
        <Content>
          <Name>{name}</Name>
          <Rating>{rating}</Rating>
          <School>{school}</School>
          <Subject>{subject}</Subject>
          <Location>{location}</Location>
          <Budget>{budget}</Budget>
          <Recruitment>{recruitment}</Recruitment>
        </Content>
      </Container>
    );
  }
}

export default Card;

const Container = styled.div`
  width: 250px;
  height: 350px;
  border: 1px solid #707070;
`;
const Img = styled.div``;
const Content = styled.div``;
const Name = styled.div``;
const Rating = styled.div``;
const School = styled.div``;
const Subject = styled.div``;
const Location = styled.div``;
const Budget = styled.div``;
const Recruitment = styled.div``;
