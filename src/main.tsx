// Mo
import React from "react";
// Styles
import "./index.css";
// ReactDOM
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Components
import App from "./App.tsx";
// Tanstack query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Pages
import FaqPage from "./pages/FaqPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import ExhibitionAbout from "./pages/exhibition/ExhibitionAbout.tsx";
import ParticipantsApply from "./pages/participants/ParticipantsApply.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/faq",
        element: <FaqPage />,
      },
      {
        path: "/about-exhibition",
        element: <ExhibitionAbout />,
      },
      {
        path: "/participants-apply",
        element: <ParticipantsApply />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
