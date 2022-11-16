const React = require('react');
const ReactDOM = require('react-dom/client');
const { default: NumberBaseball } = require('./NumberBaseball');

ReactDOM.createRoot(document.querySelector('#root')).render(<NumberBaseball />);
