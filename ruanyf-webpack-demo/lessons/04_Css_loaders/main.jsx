const React = require('react');
const ReactDOM = require('react-dom');
var appcss = require('./app.css')
ReactDOM.render(
  <div>
    Hello, world!  this is from react 
    <span className={appcss.spanTip}> ddd</span>
  </div>,
  document.querySelector('#wrapper')
);