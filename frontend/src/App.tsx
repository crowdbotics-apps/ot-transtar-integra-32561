import "./App.css"
import AdminRoutes from "./routes/adminRoutes"
import ClientRoutes from "./routes/clientRoutes"
import BrokerRoutes from "./routes/brokerRoutes"
import useIsMobileView from "hooks/useIsMobileView"
import warning from 'assets/warning.svg'
function App() {
  const url = window.location.host.replace("www.", "").split(".")[0]
  const isValidUrl = ["broker", "client", "admin"].includes(url)
  const isMobile = useIsMobileView()
  console.log("url", url)
  return <>
    {
      isMobile ? <div style={{ width: '100vw', height: '100vh', padding: '50px', textAlign: 'center', display: 'flex', flexFlow: 'column', gap: '30px', alignItems: 'center', justifyContent: 'center' }}>
        <img src={warning} style={{ width: '200px', height: 'auto' }} />
        Please switch to desktop device for a better experience
      </div> :
        <div className="App">
          <AdminRoutes />
          <BrokerRoutes />
          <ClientRoutes />
        </div>
    }
  </>
}

export default App
