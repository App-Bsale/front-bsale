import React, { useContext, useMemo } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { SessionContext } from "../../context/SessionContext";

const AdminProtectedRoutes = ({ user }) => {
  const ctx = useContext(SessionContext);

  if (user === "admin" && sessionStorage.getItem("tokenAdmin") && ctx.session) {
    return <Outlet />;
  } else {
    return <Navigate to="/admin" />;
  }
};

const UserProtectedRoutes = ({ user }) => {
  const { session } = useContext(SessionContext);

  const status = useMemo(() => {
    return session.userData.status;
  }, [session]);

  if (user === "user" && sessionStorage.getItem("tokenUser") && status) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export { AdminProtectedRoutes, UserProtectedRoutes };
