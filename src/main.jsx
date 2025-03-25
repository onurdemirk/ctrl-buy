import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./components/root";
import GameDetails from "./pages/GameDetails";
import Games from "./pages/Games";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Games />,
      },
      {
        path: "/game/:id",
        element: <GameDetails />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
