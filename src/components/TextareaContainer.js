import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer, Provider } from 'mobx-react';
import authStore from '../stores/Account/Auth';

const placeholderText = `예) 수/금 16시, 주말 시간 가능(협의 가능)
                            시급 2만원
                            개념 설명부터 실전 문제 풀이까지 꼼꼼하게 해드립니다.
                            `;

class TextareaContainer extends Component {
  state = {
    minRows: 7,
    maxRows: 100,
    value: '',
    row: 1,
  };
  requestHandler = (event) => {
    const textareaLineHeight = 34;
    const { minRows, maxRows } = this.state;
    const previousRows = event.target.rows;
    event.target.rows = minRows; // reset number of rows in textarea

    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

    console.info(previousRows);
    console.info(currentRows);
    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }

    this.setState({
      value: event.target.value,
      row: currentRows < maxRows ? currentRows : maxRows,
    });

    authStore.introductionValue = event.target.value;
    console.info(authStore.introductionValue);
  };

  render() {
    return (
      <Provider Auth={authStore}>
        <Textarea
          placeholder={`${placeholderText}`}
          onFocus={(e) => (e.target.placeholder = '')}
          onBlur={(e) => {
            e.target.placeholder = `${placeholderText}`;
            if (this.state.value === '') {
              this.setState({ rows: 7 });
            }
          }}
          rows={this.state.rows}
          value={this.state.value}
          className={'textarea'}
          placeholderStyle={{ fontWeight: '400' }}
          onChange={this.requestHandler}
        />
      </Provider>
    );
  }
}

export default TextareaContainer;

const Textarea = styled.textarea`
  resize: none;
  border: 1px solid #c7c7c7;
  width: 100%;
  max-width: 630px;
  padding: 14px 16px;
  box-sizing: border-box;
  font-size: 15px;
  line-height: 34px;
  letter-spzcing: -0.45px;
  color: #282c36;
  border-radius: 5px;
  overflow: auto;
  height: auto;
  min-height: 300px;
  font-family: inherit;
  :focus {
    outline: none;
  }
  :placeholder {
    font-weight: 300;
  }
  white-space: pre-line;
`;
