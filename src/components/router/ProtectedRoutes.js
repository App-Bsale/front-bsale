import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { SessionContext } from "../../context/SessionContext";

const AdminProtectedRoutes = ({ user }) => {
  
  const ctx = useContext(SessionContext)
  console.log(ctx.session)

  if (user === "admin" && sessionStorage.getItem("tokenAdmin") && ctx.session ){
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
