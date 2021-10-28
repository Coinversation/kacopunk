import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { Homepage } from './containers';
import Layout from 'layout/LayoutLight';
import { Button } from '@kaco/uikit';
import { ConnectWalletButton } from 'components';
import './App.css';

import Animation from 'components/Animation';
import Animation2 from 'components/Animation2';

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
          <Animation />
          <Animation2 />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
