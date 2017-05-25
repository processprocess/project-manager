import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/style.css';
import App from './components/App';
import NoMatch from './components/NoMatch';

console.clear();

const Root = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/my-projects" component={App} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
}

render(<Root />, document.getElementById('root'));

