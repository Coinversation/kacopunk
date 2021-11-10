import React from 'react';
import { ModalProvider, light } from '@kaco/uikit';
import { Web3ReactProvider } from '@web3-react/core';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { getLibrary } from 'utils/web3React';
import store from 'stores';

const ThemeProviderWrapper = props => {
  // const [isDark] = useThemeManager();
  return <ThemeProvider theme={light} {...props} />;
};

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <ThemeProviderWrapper>
          <ModalProvider>{children}</ModalProvider>
        </ThemeProviderWrapper>
      </Provider>
    </Web3ReactProvider>
  );
};

export default Providers;
