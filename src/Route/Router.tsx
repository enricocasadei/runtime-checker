import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ViewRuntypes } from "./ViewRuntypes";
import { ViewZod } from "./ViewZod";
import { ViewIots } from "./ViewIots";
import { ErrorBoundary } from "../Components/ErrorBoundary";

export function AppRouter() {
  return (
    <Router>
      <div style={{ width: "100%" }}>
        <h1 style={{ marginLeft: 40 }}>List of Planet</h1>
      </div>
      <div style={{ width: "100%" }}>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            width: "100%",
            gap: "25px",
          }}
        >
          <li>
            <a href="/runtypes">runtypes</a>
          </li>
          <li>
            <a href="/mock/runtypes">mock runtypes</a>
          </li>
          <li>
            <a href="/io-ts">IO-TS</a>
          </li>
          <li>
            <a href="/mock/io-ts">mock IO-TS</a>
          </li>
          <li>
            <a href="/zod">Zod</a>
          </li>
          <li>
            <a href="/mock/zod">mock Zod</a>
          </li>
        </ul>

        <hr />
        <ErrorBoundary>
          <Switch>
            <Route path="/:mock?/runtypes">
              <ViewRuntypes />
            </Route>
            <Route path="/:mock?/io-ts">
              <ViewIots />
            </Route>
            <Route path="/:mock?/zod">
              <ViewZod />
            </Route>
          </Switch>
        </ErrorBoundary>
      </div>
    </Router>
  );
}
