import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import "./index.css";
import Authprovider from "./probider/Authprovider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={routes}></RouterProvider>
    </Authprovider>
  </React.StrictMode>
);
