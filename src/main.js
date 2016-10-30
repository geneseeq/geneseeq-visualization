import React from 'react';
import ReactDOM from 'react-dom';

function Hello(props) {
  return (
    <h1>hello</h1>
  );
}

ReactDOM.render(
  <Hello/>,
  document.getElementById('hello')
);
