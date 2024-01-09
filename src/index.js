import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Store from "./redux/Store";
import { Provider } from "react-redux";
import { Auth0Provider } from '@auth0/auth0-react';
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Auth0Provider
    domain="dev-nlvt5dubgwtxzuk1.us.auth0.com"
    clientId="CwwsLzBJ9mst0ql4nXEQMGtKgembpDiE"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

    <React.StrictMode>
        <Provider store={Store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>
  </Auth0Provider>
);
