import "./index.css";
import React from "react";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Photo,
  Video,
  FaqPage,
  NewsPage,
  NewsSeparatePage,
  ContactsPage,
  ExhibitionAbout,
  ExhibitionPlace,
  ExhibitionSupport,
  ExhibitionTheme,
  ParticipantsInfo,
  ParticipantsBenefits,
  ParticipantsApply,
  ParticipantsDocs,
  ParticipantsServicesEngineer,
  ParticipantsHotels,
  ParticipantsPoligraphy,
  ParticipantsStand,
  VisitorsInfo,
  VisitorsVisit,
  ParticipantsList,
  StandFormPage,
  B2bFormPage,
  SponsorFormPage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/media-photos",
        element: <Photo />,
      },
      {
        path: "/media-videos",
        element: <Video />,
      },

      {
        path: "/faq",
        element: <FaqPage />,
      },

      {
        path: "/news",
        element: <NewsPage />,
      },
      {
        path: "/news/:id",
        element: <NewsSeparatePage />,
      },
      {
        path: "/contacts",
        element: <ContactsPage />,
      },
      {
        path: "/exhibition-about",
        element: <ExhibitionAbout />,
      },
      {
        path: "/exhibition-theme",
        element: <ExhibitionTheme />,
      },
      {
        path: "/exhibition-venue",
        element: <ExhibitionPlace />,
      },
      {
        path: "/exhibition-support",
        element: <ExhibitionSupport />,
      },
      {
        path: "/participants-info",
        element: <ParticipantsInfo />,
      },
      {
        path: "/participants-benefits",
        element: <ParticipantsBenefits />,
      },
      {
        path: "/participants-apply",
        element: <ParticipantsApply />,
      },
      {
        path: "/participants-docs",
        element: <ParticipantsDocs />,
      },
      {
        path: "/participants-services",
        element: <ParticipantsServicesEngineer />,
      },
      {
        path: "/stand",
        element: <ParticipantsStand />,
      },
      {
        path: "/hotels",
        element: <ParticipantsHotels />,
      },
      {
        path: "/poligraphy",
        element: <ParticipantsPoligraphy />,
      },
      {
        path: "/visitors-info",
        element: <VisitorsInfo />,
      },
      {
        path: "/visitors-visit",
        element: <VisitorsVisit />,
      },
      {
        path: "/participants-list",
        element: <ParticipantsList />,
      },
      {
        path: "/stand-form",
        element: <StandFormPage />,
      },
      {
        path: "/b2b-form",
        element: <B2bFormPage />,
      },
      {
        path: "/sponsor-form",
        element: <SponsorFormPage />,
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
