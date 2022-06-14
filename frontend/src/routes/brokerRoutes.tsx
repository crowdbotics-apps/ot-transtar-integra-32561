import { Routes, Route, Navigate, useRoutes } from "react-router-dom"
import {
  Registration,
  Login,
  ChangePassword,
  PasswordReset,
  Home
} from "../screens/broker"
export const brokerRoutes = [
  {
    path: "/dashboard",
    element: <Home />,
    children: [
      {
        path: "",
        element: <Navigate to="users" />
      },
      {
        path: "users",
        element: (
          <h1 style={{ color: "red", marginLeft: "500px" }}>Hello user </h1>
        ),
        index: true
      },
      { path: "verifycert" },
      { path: "verifydrs" },
      { path: "logout" }
    ]
  },
  { path: "/register", element: <Registration /> },
  { path: "/login", element: <Login /> },
  { path: "/change-password", element: <ChangePassword /> },
  { path: "/reset-password", element: <PasswordReset /> }
]

export default () => {
  return useRoutes(brokerRoutes)
}
