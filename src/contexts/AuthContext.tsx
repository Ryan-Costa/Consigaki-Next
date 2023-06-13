import { createContext } from "react";
import { ISignIn } from "@/interfaces/ISignIn";
import { signIn } from "../services/signIn";

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (data: ISignIn) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const isAuthenticated = false;

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
