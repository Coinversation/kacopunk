import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { Homepage } from './containers';
import Layout from 'layout/LayoutLight';
import { Button } from '@kaco/uikit';
import { ConnectWalletButton } from 'components';
import './App.css';

const App = (): JSX.Element => {
  return (
    <Layout>
      <Switch>
        <Route path="/">
          {/* <Homepage /> */}
          adsfhjsadfhasdghjk
          <ConnectWalletButton />
          <Button>button</Button>
          <button className="app-logo transform animate-spin">Hover me</button>
          <button className="transform motion-safe:hover:animate-spin">
            Hover me
          </button>
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
