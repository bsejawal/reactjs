import React, { createContext, ReactChild, useState, ReactNode } from "react";

type AuthProviderProps = {
  children: ReactNode;
};

export type IAuth = {
  user: string;
  pwd: string;
  roles: string[];
  accessToken: string;
};

export type AuthContextType = {
  auth: IAuth | null;
  setAuth: React.Dispatch<React.SetStateAction<IAuth | null>>;
};
const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<IAuth | null>(null);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
