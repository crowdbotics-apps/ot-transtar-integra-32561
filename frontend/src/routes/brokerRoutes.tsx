import { useContext, Suspense, lazy } from "react";
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
import Spinner from 'components/Spinner'
import Footer from "components/Footer/Footer";

export default () => {
  const { isLoggedIn, } = useContext(AuthContext)
  const brokerRoutes = [
    {
      path: 'broker', children: [

        {
          path: "",
          element: <Navigate to={isLoggedIn ? 'dashboard' : "broker/login"} />
        },
        (isLoggedIn ? {
          path: "dashboard",
          element: <Suspense fallback={<Spinner />}><Home /></Suspense>,
          children: [
            {
              path: "",
              element: <Suspense fallback={<Spinner />}><Navigate to="users" /></Suspense>
            },
            {
              path: "*",
              element: <Suspense fallback={<Spinner />}><Navigate to="users" /></Suspense>
            },
            {
              path: "users",
              element: <Suspense fallback={<Spinner />}><FirmUsers /></Suspense>,
              // index: true
            },
            { path: "verifycert", element: <Suspense fallback={<Spinner />}><VerifyCertificate /></Suspense> },
            { path: "verifydrs", element: <Suspense fallback={<Spinner />}><VerifyDRS /></Suspense> },

          ]
        } : {}),
        { path: "register", element: <Suspense fallback={<Spinner />}><Registration /></Suspense> },
        { path: "login", element: <Suspense fallback={<Spinner />}><Login /></Suspense>, index: true },
        { path: "changepassword", element: <Suspense fallback={<Spinner />}><ChangePassword /></Suspense> },
        { path: "resetpassword", element: <Suspense fallback={<Spinner />}><PasswordReset /></Suspense> }
      ]
    }
  ]
  const location = useLocation()
  const background = location.state && (location.state as any).background
  return <>
    {useRoutes(brokerRoutes, background || location)}
    {background && useRoutes([{
      path: 'broker/dashboard', element: <Home />, children: [{
        path: "logout", element: <Suspense fallback={<Spinner />}><Logout /></Suspense>
      }]
    }])}
    <Footer />

  </>
}
