import React, { useLayoutEffect } from "react";
import { Routes,Route, useLocation } from "react-router-dom";
import { UserContextProvider } from "../pages/pre-built/user-manage/UserContext";

import Homepage from "../pages/Homepage";
import TransListCrypto from "../pages/pre-built/trans-list/TransListCrypto";
import DataTablePage from "../pages/components/table/DataTable";
import UserDetails from "../pages/pre-built/user-manage/UserDetailsRegular";

import BasicTable from "../pages/components/table/BasicTable";
import SpecialTablePage from "../pages/components/table/SpecialTable";
import ChartPage from "../pages/components/charts/Charts";
import EmailTemplate from "../pages/components/email-template/Email";
import NioIconPage from "../pages/components/crafted-icons/NioIcon";
import SVGIconPage from "../pages/components/crafted-icons/SvgIcons";

import UserListRegular from "../pages/pre-built/user-manage/UserListRegular";
import UserProfileRegular from "../pages/pre-built/user-manage/UserProfileRegular";
import UserProfileSetting from "../pages/pre-built/user-manage/UserProfileSetting";
import UserProfileNotification from "../pages/pre-built/user-manage/UserProfileNotification";
import UserProfileActivity from "../pages/pre-built/user-manage/UserProfileActivity";

import KnobPreview from "../pages/components/charts/KnobPreview";

import Error404Modern from "../pages/error/404-modern";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Success from "../pages/auth/Success";

import Layout from "../layout/Index";
import LayoutNoSidebar from "../layout/Index-nosidebar";

const Router = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<Homepage />}></Route>


          <Route element={<UserContextProvider />} >
            <Route path="parent" element={<UserListRegular />}></Route>
            <Route path="school" element={<UserListRegular />}></Route>
            <Route path="user-details-regular/:userId" element={<UserDetails />}></Route>
          </Route>

          <Route >
            <Route path="user-profile-notification" element={<UserProfileNotification />} ></Route>
            <Route path="user-profile-regular" element={<UserProfileRegular />}></Route>
            <Route path="user-profile-activity" element={<UserProfileActivity />}></Route>
            <Route path="user-profile-setting" element={<UserProfileSetting />}></Route>
          </Route>

          <Route path="transactions" element={<TransListCrypto />}></Route>

          <Route path="charts">
            <Route path="chartjs" element={<ChartPage />}></Route>
            <Route path="knobs" element={<KnobPreview />}></Route>
          </Route>
          
          <Route path="table-basic" element={<BasicTable />}></Route>
          <Route path="table-datatable" element={<DataTablePage />}></Route>
          <Route path="table-special" element={<SpecialTablePage />}></Route>
          <Route path="email-template" element={<EmailTemplate />}></Route>
          <Route path="nioicon" element={<NioIconPage />}></Route>
          <Route path="svg-icons" element={<SVGIconPage />}></Route>

        </Route>
        
        <Route path={``} element={<LayoutNoSidebar />}>
          <Route path="auth-success" element={<Success />}></Route>
            <Route path="auth-reset" element={<ForgotPassword />}></Route>
            <Route path="auth-register" element={<Register />}></Route>
            <Route path="auth-login" element={<Login />}></Route>

            <Route path="*" element={<Error404Modern />}></Route>
        </Route>
      </Routes>
  );
};
export default Router;
