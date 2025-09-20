import React from "react";
import { RouteObject, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import Tracking from "../pages/Tracking";
import PageNotFound from "../pages/PageNotFound";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "door-to-door", element: <Home /> },
      {
        path: "door-to-door/",
        element: <Navigate to="/door-to-door" replace />,
      },

      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "gallery", element: <Gallery /> },
      { path: "contact", element: <Contact /> },
      { path: "trackshipment", element: <Tracking /> },

      // Catch-all 404
      { path: "*", element: <PageNotFound /> },
    ],
  },
];

export default routes;
