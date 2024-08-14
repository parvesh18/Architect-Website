import React from "react";
import HomePage from "./components/HomePage";
import ClientsPage from "./components/ClientsPage";
import ContactPage from "./components/ContactPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import OurWork from "./components/OurWork";
import AboutPage from "./components/AboutPage";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/work",
          element: <OurWork />,
        },
        {
          path: "/client",
          element: <ClientsPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
