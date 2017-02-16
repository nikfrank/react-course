import React from 'react';
import ReactDOM from 'react-dom';
import readme from '../../tahini/README.md';

ReactDOM.render(
  (<div>
    <span dangerouslySetInnerHTML={{__html: ( atob(readme.split(",")[1] ))}} />
  </div>),
  document.getElementById('root')
);
