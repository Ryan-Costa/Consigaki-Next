import { NEXT_PUBLIC_BASE_URL } from "@/constants/environment-variables";
import { ISignIn } from "@/interfaces/ISignIn";
import api from "./server/api";

export async function signIn({ cpf, password }: ISignIn) {
  const response = await api.post("/login", {
    cpf,
    password,
  });

  const data = await response.data;

  const requestOptions: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const res = await fetch(`${NEXT_PUBLIC_BASE_URL}/login`, requestOptions);

  const resData = await res.json();
  console.log(resData);
  return resData.token;
}
