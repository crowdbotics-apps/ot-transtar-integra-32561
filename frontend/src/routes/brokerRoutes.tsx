import { useContext } from "react";
import { AuthContext } from '../context/AuthContext'
import {
  Routes,
  Route,
  Navigate,
  useRoutes,
  useLocation
} from "react-router-dom"
import {
  Registration,
  Login,
  ChangePassword,
  PasswordReset,
  Home,
  FirmUsers,
  VerifyCertificate,
  VerifyDRS,
  Logout
} from "../screens/broker"

export default () => {
  const { isLoggedIn, } = useContext(AuthContext)
  const brokerRoutes = [
     {
          path: "*",
          element: <Navigate to={isLoggedIn ? 'dashboard' : "login"}/>
        },
    (isLoggedIn && {
      path: "/dashboard",
      element: <Home />,
      children: [
        {
          path: "",
          element: <Navigate to="users" />
        },
        {
          path: "users",
          element: <FirmUsers />,
          // index: true
        },
        { path: "verifycert", element: <VerifyCertificate /> },
        { path: "verifydrs", element: <VerifyDRS /> },
        
      ]
    }),
    { path: "/register", element: <Registration /> },
    { path: "/login", element: <Login />, index: true },
    { path: "/change-password", element: <ChangePassword /> },
    { path: "/reset-password", element: <PasswordReset /> }
  ]
  const location = useLocation()
  const background = location.state && (location.state as any).background
  return <>
    {useRoutes(brokerRoutes, background || location)}
    {background && useRoutes([{path: '/dashboard', element: <Home />, children: [{path: "logout", element: <Logout /> }]}])}
    </>
}
