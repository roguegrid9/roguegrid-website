import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import AppShell from './shell/AppShell'
import Home from './routes/Home'
import HowItWorks from './routes/HowItWorks'
import Download from './routes/Download'
import Pricing from './routes/Pricing'
import Docs from './routes/Docs'
import Roadmap from './routes/Roadmap'
import PressKit from './routes/PressKit'
import NotFound from './routes/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'how-it-works', element: <HowItWorks /> },
      { path: 'download', element: <Download /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'docs', element: <Docs /> },
      { path: 'roadmap', element: <Roadmap /> },
      { path: 'press-kit', element: <PressKit /> },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
