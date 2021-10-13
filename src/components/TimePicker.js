import TimeField from 'react-simple-timefield';
import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

@inject('Common', 'Chatting')
@observer
class TimePicer extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      time: '--:--',
    };

    this.onTimeChange = this.onTimeChange.bind(this);
  }

  onTimeChange(time) {
    const { type, Chatting } = this.props;
    this.setState({ time });
    // console.info(this.state.time);
    console.info(time);
    switch (type) {
      case 'start':
        console.info(`start_time : ${time}`);
        Chatting.startTimeValue = time;
        break;
      case 'end':
        console.info(`end_time : ${time}`);
        Chatting.endTimeValue = time;
        break;
      default:
        break;
    }
  }

  render() {
    const { time } = this.state;
    const { type } = this.props;

    return (
      <TimeContainer
        value={time}
        onChange={this.onTimeChange}
        style={{
          width: 52,
          height: 32,
          border: '1px solid #ccc',
          padding: '5px 8px',
          boxSizing: 'border-box',
          color: '#333',
          //   borderRadius: 3,
        }}
      />
    );
  }
}
export default TimePicer;

const TimeContainer = styled(TimeField)`
  margin: 0 10px;
  input {
    width: 100px;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    margin: 0;
  }
`;
