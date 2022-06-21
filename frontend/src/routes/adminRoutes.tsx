import { useContext } from "react"
import { Routes, Route, Navigate, useRoutes, useLocation } from "react-router-dom"
import {AuthContext} from "../context/AuthContext"
import {
  Login,
  ChangePassword,
  ResetPassword,
  Dashboard,
  Notifications,
  Notification,
  Firms,
  Users
} from "../screens/admin"

export default () => {
const { isLoggedIn, } = useContext(AuthContext)
  const adminRoutes = [
  { path: "/", element: <Navigate to="login" /> },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      { path: "", element: <Navigate to="notifications" /> },
      { path: "notifications", element: <Notifications />, children: [] },
      {path: 'notifications/:notificationId', element: <Notification />},
      { path: "firms", element: <Firms />},
      { path: "users", element: <Users />},
    ]
  },
  { path: "login", element: <Login /> },
  { path: "change-password", element: <ChangePassword /> },
  { path: "reset-password", element: <ResetPassword /> }
]
  const location = useLocation()
  const background = location.state && (location.state as any).background
  return <>
    {useRoutes(adminRoutes, background || location)}
    {background && useRoutes([{path: '/dashboard', element: <Dashboard />, children: [{path: "logout", element: <> </> }]}])}
    </>
}
