import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import InnerContainer from '../../../components/InnerContainer';
import OuterContainer from '../../../components/OuterContainer';

import plannerImg from '../../../static/images/Home/planner.png';
import reportImg from '../../../static/images/Home/report.png';
import videoConferenceImg from '../../../static/images/Home/video-conference.png';
import gradingImg from '../../../static/images/Home/grading.png';

import Common from '../../../stores/Common/Common';

@inject('Common')
@observer
class ContentContainer extends Component {
  render() {
    return <Container>sdfsdfdf</Container>;
  }
}

export default ContentContainer;

const Container = styled.div`
  width: 100%;
  // height: 100px;
  height: 100%;
  // border: 3px solid red;
  margin-top: 180px;
`;
