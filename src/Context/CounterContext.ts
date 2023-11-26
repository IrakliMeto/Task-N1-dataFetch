import { createContext, Dispatch, SetStateAction } from 'react';

interface CounterContextType {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

const defaultValue: CounterContextType = {
  count: 0,
  setCount: () => {},
};

const CounterContext = createContext<CounterContextType>(defaultValue);

export default CounterContext;
