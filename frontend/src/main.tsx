import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider } from "baseui";
import { theme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from './context/AuthContext'

const engine = new Styletron();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <StyletronProvider value={engine}>
        <BaseProvider theme={theme}>
          <App />
          <ToastContainer />
        </BaseProvider>
      </StyletronProvider>
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
