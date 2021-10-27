import React from 'react';
import { AppDispatch } from '../../stores';
import styles from './index.module.css';

interface CounterProps {
  count: number;
  incrementAmount: string;
  onIncrementAmountChange: (value: string) => void;
  onDecrement: () => ReturnType<AppDispatch>;
  onIncrement: () => ReturnType<AppDispatch>;
  onIncrementAsync: () => ReturnType<AppDispatch>;
  onIncrementByAmount: () => ReturnType<AppDispatch>;
  onIncrementIfOdd: () => ReturnType<AppDispatch>;
}

const Counter = ({
  count,
  incrementAmount,
  onIncrementAmountChange,
  onDecrement,
  onIncrement,
  onIncrementAsync,
  onIncrementByAmount,
  onIncrementIfOdd,
}: CounterProps): JSX.Element => (
  <div>
    <div className={styles.row}>
      <button
        className={styles.button}
        aria-label="Decrement value"
        onClick={onDecrement}
      >
        -
      </button>
      <span className={styles.value}>{count}</span>
      <button
        className={styles.button}
        aria-label="Increment value"
        onClick={onIncrement}
      >
        +
      </button>
    </div>
    <div className={styles.row}>
      <input
        className={styles.textbox}
        aria-label="Set increment amount"
        value={incrementAmount}
        onChange={e => onIncrementAmountChange(e.target.value)}
      />
      <button className={styles.button} onClick={onIncrementByAmount}>
        Add Amount
      </button>
      <button className={styles.asyncButton} onClick={onIncrementAsync}>
        Add Async
      </button>
      <button className={styles.button} onClick={onIncrementIfOdd}>
        Add If Odd
      </button>
      <div className="space-x-4">
        <div>1</div>
        <div>2</div>
      </div>
      <button className="transform hover:translate-x-10">Hover me</button>
      <button className="transform hover:scale-110 motion-reduce:hover:scale-1 ">
        Hover me
      </button>
      <button className="transform origin-left motion-safe:hover:scale-x-110">
        Hover me
      </button>
    </div>
  </div>
);

export default Counter;
