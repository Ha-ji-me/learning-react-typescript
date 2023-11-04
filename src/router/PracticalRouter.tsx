import { memo, FC } from "react";
import React, { Route, Routes } from "react-router-dom";
import { Home } from "../practicalComponents/pages/Home";
import { Login } from "../practicalComponents/pages/Login";
import { Setting } from "../practicalComponents/pages/Setting";
import { UserManagement } from "../practicalComponents/pages/UserManagement";
import { Page404 } from "../practicalComponents/pages/Page404";
import { HeaderLayout } from "../practicalComponents/templates/HeaderLayout";

export const PracticalRouter: FC = memo(() => {
  return (
    <Routes>
      <Route index element={ <Login /> } />
      {/* <Route index element={ <Home /> } /> */}
      <Route path="/home">
        <Route index={true} element={ <HeaderLayout><Home /></HeaderLayout> } />
        <Route path="setting" element={ <HeaderLayout><Setting /></HeaderLayout> } />
        <Route path="user-management" element={ <HeaderLayout><UserManagement /></HeaderLayout> } />
      </Route>
      <Route path="*" element={ <Page404 /> } />
    </Routes>
  )
})