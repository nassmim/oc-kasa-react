import { createBrowserRouter } from "react-router-dom"

import Home from "./pages/Home.jsx"
import App from "./App.js"
import ErrorNotFound from "./pages/ErrorNotFound.jsx"
import Flat from "./pages/Flat.jsx"
import About from "./pages/About.jsx"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorNotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "flat/:id",
        element: <Flat />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
])
