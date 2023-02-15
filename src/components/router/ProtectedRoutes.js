import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoutes = ({ user }) => {
  if (user === "admin" && sessionStorage.getItem("tokenAdmin")){
    return <Outlet />
  }  else {
    return <Navigate to="/loginAdmin" />
  }
};

const UserProtectedRoutes = ({ user }) => {
  if (user === "user" && sessionStorage.getItem("tokenUser")){
    return <Outlet />
  }  else {
    return <Navigate to="/" />
  }
};


export { AdminProtectedRoutes, UserProtectedRoutes}
