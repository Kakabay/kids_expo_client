// Mo
import React from 'react';
// Styles
import './index.css';
// ReactDOM
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Components
import App from './App.tsx';
// Tanstack query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Pages
import FaqPage from './pages/FaqPage.tsx';
import HomePage from './pages/HomePage.tsx';
import ExhibitionAbout from './pages/exhibition/ExhibitionAbout.tsx';
import ParticipantsApply from './pages/participants/ParticipantsApply.tsx';
import { ExhibitionTheme } from './pages/exhibition/ExhibitionTheme.tsx';
import ExhibitionPlace from './pages/exhibition/ExhibitionPlace.tsx';
import { ParticipantsInfo } from './pages/participants/ParticipantsInfo.tsx';
import { ParticipantsBenefits } from './pages/participants/ParticipantsBenefits.tsx';
import { ExhibitionSupport } from './pages/exhibition/ExhibitionSupport.tsx';
import { VisitorsInfo } from './pages/visitors/VisitorsInfo.tsx';
import { VisitorsVisit } from './pages/visitors/VisitorsVisit.tsx';
import { ContactsPage } from './pages/ContactsPage.tsx';
import { NewsPage } from './pages/NewsPage.tsx';
import { ParticipantsDocs } from './pages/participants/ParticipantsDocs.tsx';
import { NewsSeperatePage } from './pages/NewsSeperatePage.tsx';
import ParticipantsStend from './pages/participants/ParticipantsStend.tsx';
import ParticipantsHotels from './pages/participants/ParticipantsHotels.tsx';
import ParticipantsPoligraphy from './pages/participants/ParticipantsPoligraphy.tsx';
import ParticipantsServices from './pages/participants/ParticipantsServices.tsx';
import ParticipantsServicesEngeener from './pages/participants/ParticipantsServicesEngeener.tsx';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },

      {
        path: '/faq',
        element: <FaqPage />,
      },

      {
        path: '/news',
        element: <NewsPage />,
      },
      {
        path: '/news/:id',
        element: <NewsSeperatePage />,
      },

      {
        path: '/contacts',
        element: <ContactsPage />,
      },

      {
        path: '/exhibition-about',
        element: <ExhibitionAbout />,
      },
      {
        path: '/exhibition-theme',
        element: <ExhibitionTheme />,
      },
      {
        path: '/exhibition-avenue',
        element: <ExhibitionPlace />,
      },
      {
        path: '/exhibition-support',
        element: <ExhibitionSupport />,
      },
      {
        path: '/participants-info',
        element: <ParticipantsInfo />,
      },
      {
        path: '/participants-benefits',
        element: <ParticipantsBenefits />,
      },
      {
        path: '/participants-apply',
        element: <ParticipantsApply />,
      },
      {
        path: '/participants-docs',
        element: <ParticipantsDocs />,
      },
      {
        path: '/participants-services',
        element: <ParticipantsServices />,
        children: [
          {
            path: '/participants-services',
            element: <ParticipantsServicesEngeener />,
          },
          {
            path: 'stend',
            element: <ParticipantsStend />,
          },
          {
            path: 'hotels',
            element: <ParticipantsHotels />,
          },
          {
            path: 'poligraphy',
            element: <ParticipantsPoligraphy />,
          },
        ],
      },

      {
        path: '/visitors-info',
        element: <VisitorsInfo />,
      },
      {
        path: '/visitors-visit',
        element: <VisitorsVisit />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
