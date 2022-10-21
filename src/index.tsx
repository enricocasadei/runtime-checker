import React from "react";
import { createRoot } from "react-dom/client";

import { AppRouter } from "./route/Router";

const root = document.getElementById("root");

if (root) {
  const container = createRoot(root);
  container.render(<AppRouter />);
}
