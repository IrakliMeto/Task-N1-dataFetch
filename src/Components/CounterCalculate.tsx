import React, { useContext } from 'react';
import CounterContext from '../Context/CounterContext';

export default function CounterCalculate() {
  const { setCount } = useContext(CounterContext);

  return (
    <>
      <button onClick={() => setCount((prevCount) => (prevCount ? prevCount + 1 : 1))}>
        Increase
      </button>

      <button onClick={() => setCount((prevCount) => (prevCount ? prevCount - 1 : prevCount))}>
        Decrease
      </button>
    </>
  );
}
