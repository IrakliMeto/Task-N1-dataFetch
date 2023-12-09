import React, { useContext } from 'react';
import { CounterContext } from '../Context/CounterContext';
import { Obj, Func } from './test.type'; // Import the 'test' type/interface

export default function CounterResult() {
  const { count } = useContext(CounterContext);

  const myObject: Obj = {
    gurama: true,
    number: 42,
    boolean: false,
  };

  // const myFunction: Func = (arg1, arg2) => {
  //   if (arg2 === true) {
  //     return arg1;
  //   }
  //     return 'Boolean is not true';
  // };

  return (
    <div>
      <h2>Result</h2>
      <p>count: {count}</p>
    </div>
  );
}
