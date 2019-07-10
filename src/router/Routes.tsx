import * as React from 'react'
import { Route, HashRouter } from 'react-router-dom'
import App from '../components/App';

export default class Routes extends React.Component {
  public render() {
    return (
      <HashRouter>
        <Route exact={true} path='/' component={ App } />
      </HashRouter>
    );
  }
}
