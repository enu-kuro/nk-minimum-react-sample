import React from 'react'
import { render } from 'react-dom'
import App from './App.js';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import Main from './components/Main'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
      <Route path="*" component={Main} />
    </Route>
  </Router>
), document.getElementById('root'))
