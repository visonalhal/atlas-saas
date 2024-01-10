import React from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from "./App"

import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
])

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
