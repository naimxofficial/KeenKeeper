import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Root from './layout/Root';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Stats from './pages/Stats';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "timeline", Component: Timeline },
      { path: "stats", Component: Stats },
    ], errorElement: <Error></Error>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
