import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ViewRuntypes } from "./ViewRuntypes";
import { ViewZod } from "./ViewZod";
import { ViewIots } from "./ViewIots";
import { ErrorBoundary } from "../Components/ErrorBoundary";

export function AppRouter() {
  return (
    <BrowserRouter>
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
            <a href="/runtypes/error">error runtypes</a>
          </li>
          <li>
            <a href="/io-ts">IO-TS</a>
          </li>
          <li>
            <a href="/io-ts/error">error IO-TS</a>
          </li>
          <li>
            <a href="/zod">Zod</a>
          </li>
          <li>
            <a href="/zod/error">error Zod</a>
          </li>
        </ul>

        <hr />
        <ErrorBoundary>
          <Routes>
            <Route path="/runtypes" element={<ViewRuntypes />}>
              <Route path=":error" element={<ViewRuntypes />} />
            </Route>
            <Route path="/io-ts" element={<ViewIots />}>
              <Route path=":error" element={<ViewIots />} />
            </Route>
            <Route path="/zod" element={<ViewZod />}>
              <Route path=":error" element={<ViewZod />} />
            </Route>

            <Route path="*" element={<div>404 not found</div>} />
          </Routes>
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
}
