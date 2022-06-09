import { Routes, Route, Navigate, useRoutes } from "react-router-dom";
import { VerficationScreen, LoginScreen } from "../screens/client";
export const brokerRoutes = [
  { path: "/", element: <VerficationScreen /> },
  { path: "login", element: <LoginScreen /> },
];

export default () => {
  return useRoutes(brokerRoutes);
};
