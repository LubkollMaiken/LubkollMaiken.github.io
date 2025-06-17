import ReactDOM from "react-dom/client";
import React from "react";
import { HashRouter } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Navigationbar from "./components/Navigationbar";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);


