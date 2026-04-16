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
import FriendDetails from './pages/FriendDetails';
import { ToastContainer } from 'react-toastify';
import FriendProvider from './context/FriendProvider';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "timeline", Component: Timeline },
      { path: "stats", Component: Stats },
      { path: "/friendDetails/:id",
         Component: FriendDetails, loader: () => fetch('friends.json')},
    ], errorElement: <Error></Error>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProvider>

    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
    
    </FriendProvider>
  </StrictMode>,
)
