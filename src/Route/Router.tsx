import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ViewRuntypes } from "./ViewRuntypes";
import { ViewZod } from "./ViewZod";
import { ViewIots } from "./ViewIots";

export function AppRouter() {
  return (
    <Router>
      <div style={{ width: "100%" }}>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            width: "100%",
            gap: "25px",
          }}
        >
          <li style={{ display: "flex" }}>
            <Link to="/runtypes">runtypes</Link>
          </li>
          <li>
            <Link to="/io-ts">IO-TS</Link>
          </li>
          <li>
            <Link to="/zod">Zod</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route path="/runtypes">
            <ViewRuntypes />
          </Route>
          <Route path="/io-ts">
            <ViewIots />
          </Route>
          <Route path="/zod">
            <ViewZod />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
