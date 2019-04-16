import React from 'react';
import { Route, Router, Switch } from 'react-router';
import { paths } from './config/routing';
import { createBrowserHistory } from 'history';
import { HomePage } from './components/HomePage';

const history = createBrowserHistory();

export const App = () => {
  return (
    <div className="container">
      <Router history={history}>
        <Switch>
          <Route exact path={paths.root} component={HomePage} />

          <Route exact path={paths.article} render={() => <h1>Article</h1>} />

          <Route render={() => <h1>Not found</h1>} />
        </Switch>
      </Router>
    </div>
  );
};
