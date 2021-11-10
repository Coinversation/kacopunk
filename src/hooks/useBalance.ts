import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';

export function useBalance() {
  const { account, library, chainId } = useWeb3React();
  const [balance, setBalance] = useState(0);

  useEffect((): any => {
    if (!!account && !!library) {
      let stale = false;

      library
        .getBalance(account)
        .then((balance: any) => {
          console.log('---ddddd', balance.toNumber());
          if (!stale) {
            setBalance(balance.toNumber());
          }
        })
        .catch(() => {
          if (!stale) {
            setBalance(0);
          }
        });

      return () => {
        stale = true;
        setBalance(0);
      };
    }
  }, [account, library, chainId]);

  return balance;
}
