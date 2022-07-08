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
import AdminProvider from './context/AdminContext'
import NotificationsProvider from './context/NotificationsContext'

const engine = new Styletron();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <AuthProvider>
        <AdminProvider>
          <NotificationsProvider>
            <StyletronProvider value={engine}>
              <BaseProvider theme={theme}>
                <App />
                <ToastContainer />
              </BaseProvider>
            </StyletronProvider>
          </NotificationsProvider>
        </AdminProvider>
      </AuthProvider>
    </BrowserRouter>
);
