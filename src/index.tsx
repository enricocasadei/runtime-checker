import React from "react";
import ReactDOM from "react-dom";
import { AppRouter } from "./route/Router";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
