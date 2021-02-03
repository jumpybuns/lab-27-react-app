import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from '../List/List.jsx';
import Detail from '../Detail/Detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <List {...routerProps} />}
            />
            <Route
              path="/detail"
              exact
              render={(routerProps) => <Detail {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
