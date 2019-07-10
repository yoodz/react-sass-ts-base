import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Router from './router/Routes';
import './index.scss';

ReactDOM.render(
  <Router />,
  document.getElementById('root') as HTMLElement
);
