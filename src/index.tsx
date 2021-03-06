import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./index.css";
import "./localization";
import store from "./stores";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import StateProvider from "./components/StateProvider";
import SnackbarProvider from "./components/Snackbar/SnackbarProvider";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StateProvider>
        <SnackbarProvider>
          <CssBaseline />

          <App />
        </SnackbarProvider>
      </StateProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
