import React, { Component } from 'react';
import Try from './try';

function getNumbers() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const randomNums = [];
  for (let i = 0; i < 4; i++) {
    const randomNum = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
    randomNums.push(randomNum);
  }
  console.log(randomNums);
  return randomNums;
}

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [],
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    let strikeCount = 0;
    let ballCount = 0;
    if (this.state.value === this.state.answer.join('')) {
      this.setState({
        result: '홈런',
        value: '',
        answer: getNumbers(),
        tries: [],
      });
      alert('축하합니다');
    } else if (this.state.tries.length < 9) {
      this.state.answer.forEach((v, i) => {
        if (v === Number(this.state.value[i])) {
          strikeCount += 1;
        } else if (this.state.value.includes(v)) {
          ballCount += 1;
        }
      });
      this.setState({
        result: `strike: ${strikeCount}, ball: ${ballCount}`,
        value: '',
        tries: [...this.state.tries, { strike: strikeCount, ball: ballCount }],
      });
    } else {
      this.setState({
        result: '끝',
        value: '',
        answer: getNumbers(),
        tries: [],
      });
      alert('실패했습니다');
    }
  };

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {this.state.tries.map((v, i) => {
            return <Try key={`${v.strike} + ${i}`} value={v} />;
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseball;
