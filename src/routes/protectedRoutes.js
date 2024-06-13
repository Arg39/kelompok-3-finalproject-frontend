import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { users, status } = useSelector((state) => state.auth);

  if (!status) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(users["role"])) {
    return <Navigate to="/notfound" />;
  }

  return children;
};

export default ProtectedRoute;
