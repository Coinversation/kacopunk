import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Homepage } from './containers';
import logo from './logo.svg';
import Layout from 'layout/LayoutLight';

const App = (): JSX.Element => {
  return (
    <Layout>
      <Switch>
        <Route path="/">
          <img src={logo} alt="" className="w-10 h-10" />
          <Homepage />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
