import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from 'layout/LayoutLight';
const Homepage = React.lazy(() => import('containers/Homepage'));

const App = (): JSX.Element => {
  return (
    <Layout>
      <Suspense fallback="loading">
        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default App;
