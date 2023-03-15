import React from "react";
import { Route, Routes } from "react-router-dom";
import { ClientView } from "../clientView/ClientView";
import { Access } from "../access/Access";
import { LoggedUserControl } from "../common/LoggedUserControl";

import { RoutePaths } from "./RoutePaths";

export const Router = () => (
  <Routes>
    <Route path={RoutePaths.LOGIN} element={<Access />} />
    <Route
      path={RoutePaths.CLIENT_VIEW}
      element={
        <LoggedUserControl>
          <ClientView />
        </LoggedUserControl>
      }
    />
  </Routes>
);
