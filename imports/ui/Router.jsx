import React from "react";
import { Route, Routes } from "react-router-dom";
import { ClientView } from "./ClientView";
import { Access } from "./Access";
import { LoggedUserControl } from "./components/LoggedUserControl";

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
