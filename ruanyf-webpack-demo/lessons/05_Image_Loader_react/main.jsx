const React = require('react');
const ReactDOM = require('react-dom');
var appcss = require('./app.css')
console.log(appcss, 'cssObject')
var tagImage = require('./static/tag.png')
ReactDOM.render(
  <div>
    Hello, world!  this is from react 
    <span className={appcss.spanTip}> ddd</span>
    <img className={appcss.imagee} src={tagImage}></img>
    <img src="./static/tag.png"></img>
  </div>,
  document.querySelector('#wrapper')
);