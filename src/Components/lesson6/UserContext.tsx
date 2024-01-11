import { createContext, FC, ReactNode, useState } from 'react';

export const UserContext = createContext<any>(null);

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  return <UserContext.Provider value={{ setUser, user }}>{children}</UserContext.Provider>;
};
