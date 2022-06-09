import { Routes, Route, Navigate, useRoutes } from "react-router-dom";
import { Login, ChangePassword, ResetPassword } from "../screens/admin";
export const adminRoutes = [
  { path: "/", element: <Navigate to="login" /> },
  { path: "login", element: <Login /> },
  { path: "change-password", element: <ChangePassword /> },
  { path: "reset-password", element: <ChangePassword /> },
];

export default () => {
  return useRoutes(adminRoutes);
};
