import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./Pages/Home";
import Length from './Pages/Length';
import Area from './Pages/Area';
import Volume from './Pages/Volume';
import Time from './Pages/Time';
import Speed from './Pages/Speed';
import Temperature from './Pages/Temperature';
import Angle from './Pages/Angle';
import Currency from './Pages/Currency';
import Weight from './Pages/Weight';
import Energy from './Pages/Energy';
import Pressure from './Pages/Pressure';
import Frequency from './Pages/Frequency';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Length",
    element: <Length />,
  },
  {
    path: "/Area",
    element: <Area />,
  },
  {
    path: "/Volume",
    element: <Volume />,
  },
  {
    path: "/Time",
    element: <Time />,
  },
  {
    path: "/Speed",
    element: <Speed />,
  },
  {
    path: "/Temperature",
    element: <Temperature />,
  },
  {
    path: "/Angle",
    element: <Angle />,
  },
  {
    path: "/Currency",
    element: <Currency />,
  },
  {
    path: "/Weight",
    element: <Weight />,
  },
  {
    path: "/Energy",
    element: <Energy />,
  },
  {
    path: "/Pressure",
    element: <Pressure />,
  },
  {
    path: "/Frequency",
    element: <Frequency />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);