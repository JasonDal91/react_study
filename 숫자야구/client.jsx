const React = require('react');
const ReactDOM = require('react-dom/client');
const { default: Test } = require('./RenderTest');
// const { default: NumberBaseball } = require('./NumberBaseball');

ReactDOM.createRoot(document.querySelector('#root')).render(<Test />);
