import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from '../List/List.jsx';
import Detail from '../Detail/Detail';
import Header from '../Header/Header';
import Music from '../Music/Music';
import background from '../../../public/background.jpg';

export default class App extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <Header />
        <Music />
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <List {...routerProps} />}
            />
            <Route
              path="/detail/:name"
              exact
              render={(routerProps) => <Detail {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
