import React from "react";
import { Navigate } from "react-router-dom";
import { useLoggedUser } from "meteor/quave:logged-user-react";
import { Loading } from "./Loading";
import { RoutePaths } from "../RoutePaths";

export const LoggedUserControl = ({ children }) => {
  const { loggedUser, isLoadingLoggedUser } = useLoggedUser();
  if (isLoadingLoggedUser) {
    return <Loading />;
  }
  console.log(loggedUser);
  if (!loggedUser) {
    return <Navigate to={RoutePaths.LOGIN} />;
  }

  return children;
};
