import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Layout } from '../../Layout.tsx'
import App from '../../App.tsx'

const router = createBrowserRouter([
  {
    element: <Layout />, children: [
      { path: '/', element: <App /> },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
