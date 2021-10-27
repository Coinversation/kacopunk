import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Homepage } from './containers';
import Layout from 'layout/LayoutLight';

const App = (): JSX.Element => {
  return (
    <Layout>
      <Switch>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
