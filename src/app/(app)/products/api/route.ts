import { RequestInit } from "next/dist/server/web/spec-extension/request";
import { NextResponse } from "next/server";

async function authenticate() {
  const data = {
    cpf: "00000000000",
    password: "senhaConsigaki",
  };

  const requestOptions: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const res = await fetch(
    "http://consigaki-stg.eba-wfmmb8xh.sa-east-1.elasticbeanstalk.com/login",
    requestOptions
  );

  const resData = await res.json();
  return resData.token;
}

export async function GET(request: Request) {
  const token = await authenticate();

  const requestOptions: RequestInit = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await fetch(
    "http://consigaki-stg.eba-wfmmb8xh.sa-east-1.elasticbeanstalk.com/products",
    requestOptions
  );

  const data = await res.json();

  const jsonData = data.data;

  return NextResponse.json({ jsonData });
}
