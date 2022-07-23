import { lazy } from 'react'

export const Registration = lazy(() => import('./Registration/RegistrationScreen'))
export const Login = lazy(() => import('./Login/Login'))
export const ChangePassword = lazy(() => import('./ChangePassword/ChangePassword'))
export const PasswordReset = lazy(() => import('./PasswordReset/PasswordReset'))
export const Home = lazy(() => import('./Dashboard/Dashboard'))
export const FirmUsers = lazy(() => import('./Dashboard/FirmUsers/FirmUsers'))
export const VerifyDRS = lazy(() => import('./Dashboard/VerifyDRS/VerifyDRS'))
export const VerifyCertificate = lazy(() => import('./Dashboard/VerifyCertificate/VerifyCertificate'))
export const Logout = lazy(() => import('./Dashboard/Logout/Logout'))
