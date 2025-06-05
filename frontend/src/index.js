import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppAdmin from "./AppAdmin"; 
import "bootstrap/dist/css/bootstrap.min.css";
import 'leaflet/dist/leaflet.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

// Smart routing based on URL
const isAdmin = window.location.pathname.startsWith("/admin");

root.render(
  <React.StrictMode>
    {isAdmin ? <AppAdmin /> : <App />}
  </React.StrictMode>
);
