import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { DatePicker } from '@y0c/react-datepicker';

// import calendar style
// You can customize style by copying asset folder.
// import '@y0c/react-datepicker/assets/styles/calendar.scss';

// Please include the locale you want to use.
// and delivery props to calendar component
// import "dayjs/locale/ko";
// import "dayjs/locale/en";
import './styles.css';
class TimePicker extends React.Component {
  state = {
    open: true,
  };
  handler = (e) => {
    console.info(e);
    console.info(e.$H);
    console.info(e.$m);
  };
  onChange =
    (title) =>
    (...args) =>
      console.log(title, args);
  render() {
    const Panel = ({ header, children }) => (
      <div style={{ height: '100px' }}>
        <h1>{header}</h1>
        <div>{children}</div>
      </div>
    );

    return (
      <Container className="App">
        <Panel header="">
          <DatePicker
            open={this.state.open}
            showTimeOnly
            onChange={(e) => this.handler(e)}
            // onMouseOver={this.setState({ open: true })}
            // onBlur={this.setState({ open: false })}
          />
        </Panel>
      </Container>
    );
  }
}

export default TimePicker;
// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);

const Container = styled.div`
  .picker__container {
    cursor: pointer;
    border: 2px solid black;
    width: 100px;
    // margin: 0 10px;
    // display: ${(props) => (props.open ? 'flex' : 'none')};
  }
  .time__container {
    display: flex;
  }
  input {
    width: 80px;
    padding-left: 0;
  }
  button {
    background-color: #fff;
    border: 1px solid #707070;
  }
`;
