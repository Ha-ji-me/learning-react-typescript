import { memo, FC } from "react";
import React, { Route, Routes } from "react-router-dom";
import { Home } from "../practicalComponents/pages/Home";
import { Login } from "../practicalComponents/pages/Login";
import { Setting } from "../practicalComponents/pages/Setting";
import { UserManagement } from "../practicalComponents/pages/UserManagement";

export const PracticalRouter: FC = memo(() => {
  return (
    <Routes>
      <Route index element={ <Login /> } />
      {/* <Route index element={ <Home /> } /> */}
      <Route path="/home">
        <Route index={true} element={ <Home /> } />
        <Route path="setting" element={ <Setting /> } />
        <Route path="user-management" element={ <UserManagement /> } />
      </Route>
    </Routes>
  )
})