import React from 'react';
import ReactDOM from 'react-dom';
import readme from '../lessons/2.md';

ReactDOM.render(
  (<div>
    <span dangerouslySetInnerHTML={{__html: ( atob(readme.split(",")[1] ))}} />
  </div>),
  document.getElementById('root')
);
