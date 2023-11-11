import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./routes/Home/Home.jsx";
import Login from "./routes/Login/Login.jsx";
import Dashboard from "./routes/Dashboard/Dashboard.jsx";
import Error from "./routes/Error/Error.jsx";
import AboutUs from "./routes/AboutUs/AboutUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/sobreNos", element: <AboutUs /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
