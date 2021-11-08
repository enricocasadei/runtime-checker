import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
            <Link to="/class-validator">Class Validator</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route path="/runtypes">
            <div>runtypes</div>
          </Route>
          <Route path="/io-ts">
            <div>io-ts</div>
          </Route>
          <Route path="/class-validator">
            <div>class-validator</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
