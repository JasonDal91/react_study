import React, { Component } from 'react';
import Try from './try';

function getNumbers() {
  // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
}

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [],
  };

  onSubmitForm = () => {};

  onChangeInput = () => {};
  fruits = [
    { fruit: '사과', taste: '맛없다' },
    { fruit: '바나나', taste: '맛없다1' },
    { fruit: '포도', taste: '맛없다2' },
    { fruit: '귤', taste: '맛없다3' },
    { fruit: '감', taste: '맛없다4' },
    { fruit: '바나나', taste: '맛없다5' },
  ];
  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {this.fruits.map((v) => {
            return <Try key={v.fruit + v.taste} value={v} />;
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseball;
