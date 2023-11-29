import React, { createContext, Dispatch, SetStateAction, useState, ReactNode } from 'react';

interface CounterProviderProps {
  children: ReactNode;
}

interface CounterContextType {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  increment: () => void;
  decrement: () => void;
}

const defaultValue: CounterContextType = {
  count: 0,
  setCount: () => {},
  increment: () => {},
  decrement: () => {},
};

const CounterContext = createContext<CounterContextType>(defaultValue);

const CounterProvider = ({ children }: CounterProviderProps) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prevCount) => (prevCount ? prevCount + 1 : 1));
  const decrement = () => setCount((prevCount) => (prevCount ? prevCount - 1 : prevCount));

  const contextValue: CounterContextType = {
    count,
    setCount,
    increment,
    decrement,
  };

  return <CounterContext.Provider value={contextValue}>{children}</CounterContext.Provider>;
};

export { CounterProvider, CounterContext };
