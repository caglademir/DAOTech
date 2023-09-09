import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CreateDao from "./CreateDao.jsx";
import Dao from "./Dao.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/createDao",
    element: <CreateDao />,
  },
  {
    path: "/dao",
    element: <Dao />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
