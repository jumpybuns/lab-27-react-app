import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <MainPage {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
