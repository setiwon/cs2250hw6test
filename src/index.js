import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createRoot, BrowserRouter, Routes, Route } from "react-dom/client";
import "./styles.css";

import App from "./App";
import ApiIntegration from './ApiIntegration';


const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <ApiIntegration />
  </StrictMode>,
);
