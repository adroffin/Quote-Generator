import { StrictMode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CssBaseline />
    <App />
  </StrictMode>
);
