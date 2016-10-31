import React from 'react';
import ReactDOM from 'react-dom';

import ChartBox from './chartBox.js'

function Hello(props) {
  return (
    <ChartBox/>
  );
}

ReactDOM.render(
  <Hello/>,
  document.getElementById('hello')
);
