import "./App.css"
import VerificationScreen from "./screens/client/Verification/VerificationScreen"
import AdminRoutes from "./routes/adminRoutes"
import ClientRoutes from "./routes/clientRoutes"
import BrokerRoutes from "./routes/brokerRoutes"
import AdminChangePasswordScreen from "./screens/admin/ChangePassword"
import Login from "./screens/client/Login/Login"
import Footer from "./components/Footer/Footer"
import { Routes, Route } from "react-router-dom"

function App() {
  const url = window.location.host.replace("www.", "").split(".")[0]
  const isValidUrl = ["broker", "client", "admin"].includes(url)
  console.log("url", url)
  return (
    <div className="App">
      {url === "client" && <ClientRoutes />}
      {url === "admin" && <AdminRoutes />}
      {url === "broker" && <BrokerRoutes />}
      {isValidUrl && <Footer />}
    </div>
  )
}

export default App
