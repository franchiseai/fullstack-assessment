import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import './index.css';

const rootElement = document.querySelector("#root") as Element;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <React.Suspense fallback="loading">
        <App />
      </React.Suspense>
    </React.StrictMode>
  );
}
