import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { BigNumber as BigNumberType } from '@ethersproject/bignumber';
import { formatUnits } from '@ethersproject/units';

export function useBalance() {
  const { account, library, chainId } = useWeb3React();
  const [balance, setBalance] = useState(0);

  useEffect((): any => {
    if (!!account && !!library) {
      let stale = false;

      library
        .getBalance(account)
        .then((balance: BigNumberType) => {
          if (!stale) {
            setBalance(Number(formatUnits(balance)));
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
