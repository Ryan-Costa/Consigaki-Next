import { ReactNode } from "react";

import { checkUserAuthenticated } from "@/functions/check-user-authenticated";
import { AuthCheck } from "../AuthCheck";

type PrivateRouteProps = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  let isUserAuthenticated = false;

  if (typeof window !== "undefined") {
    isUserAuthenticated = checkUserAuthenticated();
  }

  
  return (
    <>
    <AuthCheck isUserAuthenticated={isUserAuthenticated}>
      {!isUserAuthenticated && null}
      {isUserAuthenticated && children}
    </AuthCheck>
    </>
  );
};

export default PrivateRoute;
