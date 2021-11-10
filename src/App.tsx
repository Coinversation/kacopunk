import React, { Suspense, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';

import { useEagerConnect, useInactiveListener } from 'hooks/useEagerConnect';
import { useAppSelector, useAppDispatch } from 'hooks';
import { selectActivatingConnector, setActivatingConnector } from 'containers/appSlice';
import Layout from 'layout/LayoutLight';
const Homepage = React.lazy(() => import('containers/Homepage'));

const App = (): JSX.Element => {
  const { connector } = useWeb3React<Web3Provider>();
  const dispatch = useAppDispatch();
  const activatingConnector = useAppSelector(selectActivatingConnector);

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      dispatch(setActivatingConnector(undefined));
    }
  }, [activatingConnector, connector]);

  const triedEager = useEagerConnect();

  useInactiveListener(!triedEager || !!activatingConnector);

  return (
    <Layout>
      <Suspense fallback="">
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
