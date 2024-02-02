import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store.tsx";

// import { store } from "../redux-old-school.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}> {/* provider do redux para fornecer a store nos componentes para acessar o estado */}
      <App />
    </Provider>
  </React.StrictMode>
);
