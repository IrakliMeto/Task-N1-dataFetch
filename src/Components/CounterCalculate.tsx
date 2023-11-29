import React, { useContext } from 'react';
import { CounterContext } from '../Context/CounterContext';

export default function CounterCalculate() {
  const { increment, decrement } = useContext(CounterContext);

  return (
    <>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </>
  );
}
