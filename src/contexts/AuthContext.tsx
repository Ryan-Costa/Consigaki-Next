"use client";

import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import api from "@/services/server/api";
import { useRouter } from "next/navigation";

type Data = {
  id: number;
  name: string;
  codeToken: string;
  temp: boolean;
  active: boolean;
  role: number;
  blocked: boolean;
  userToken: string;
  email: string;
};

type SignInData = {
  cpf: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (data: SignInData) => Promise<void>;
  data?: Data;
};

type LoginResponseType = {
  data: Data;
  token: string;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const [data, setData] = useState<Data>();
  const router = useRouter();

  const isAuthenticated = !!data;

  // const { 'consigaki.token': token } = parseCookies()

  async function signIn({ cpf, password }: SignInData) {
    try {
      const response = await api.post<LoginResponseType>("/login", {
        cpf,
        password,
      });

      const { data, token } = response.data;

      setCookie(undefined, "consigaki.token", token, {
        maxAge: 60 * 60 * 1, // 1 hour
      });

      setData(data);

      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{ data, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}