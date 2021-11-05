import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';

export function useBalance() {
  const { account, library, chainId } = useWeb3React();
  const [balance, setBalance] = useState();

  useEffect((): any => {
    if (!!account && !!library) {
      let stale = false;

      library
        .getBalance(account)
        .then((balance: any) => {
          if (!stale) {
            setBalance(balance);
          }
        })
        .catch(() => {
          if (!stale) {
            setBalance(null);
          }
        });

      return () => {
        stale = true;
        setBalance(undefined);
      };
    }
  }, [account, library, chainId]);

  return balance;
}
