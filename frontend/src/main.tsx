import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes.tsx";
import Auth0ProviderWithNagvigate from "./auth/Auth0ProviderWithNagvigate.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithNagvigate>
      <AppRoutes />
      </Auth0ProviderWithNagvigate>
    </Router>
  </React.StrictMode>
);
