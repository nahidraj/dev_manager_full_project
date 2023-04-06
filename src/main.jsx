import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContactProvider } from "./context/ContactsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContactProvider>
      <App />
    </ContactProvider>
  </BrowserRouter>
);
