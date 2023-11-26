import React, { useContext } from 'react';
import CounterContext from '../Context/CounterContext';

export default function CounterResult() {
  const { count } = useContext(CounterContext);

  return (
    <div>
      <h2>Result</h2>
      <p>count: {count}</p>
    </div>
  );
}
