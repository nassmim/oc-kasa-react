import { createBrowserRouter } from "react-router-dom"

import { getFlatsLoader } from "./pages/Home.jsx"

import Home from "./pages/Home.jsx"
import App from "./App.js"
import ErrorNotFound from "./pages/ErrorNotFound.jsx"
import Flat, { getFlatLoader } from "./pages/Flat.jsx"
import About from "./pages/About.jsx"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorNotFound />,
    children: [
      {
        errorElement: <ErrorNotFound />,
        children: [
          {
            index: true,
            element: <Home />,
            loader: getFlatsLoader,
          },
          {
            path: "flat/:id",
            element: <Flat />,
            loader: getFlatLoader,
          },
          {
            path: "about",
            element: <About />,
          },
        ],
      },
    ],
  },
])
