'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { APP_ROUTES } from "@/constants/app-routes";

type AuthCheckProps = {
  children: any;
  isUserAuthenticated: boolean
};

export const AuthCheck = ({ children, isUserAuthenticated }: AuthCheckProps) => {
  const { push } = useRouter();

  useEffect(() => {
    if (!isUserAuthenticated) {
      push(APP_ROUTES.public.login);
    }
  }, [isUserAuthenticated, push]);

  return children
}