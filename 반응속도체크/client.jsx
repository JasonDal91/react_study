const React = require('react');
const ReactDOM = require('react-dom/client');
const { default: ResponseCheck } = require('./ResponseCheck');

ReactDOM.createRoot(document.querySelector('#root')).render(<ResponseCheck />);
