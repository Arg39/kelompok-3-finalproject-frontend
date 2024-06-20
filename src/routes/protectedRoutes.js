import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ allowedRoles }) => {
  const user = useSelector((state) => state.auth.user); // Assuming 'user' is singular here
  const status = useSelector((state) => state.auth.status);

  if (!status) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
