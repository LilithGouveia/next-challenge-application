import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from './routes/Home/index.jsx';
import Login from './routes/Login/index.jsx';
import Dashboard from './routes/Dashboard/index.jsx';
import Error from './routes/Error/index.jsx';
import SobreNos from './routes/SobreNos/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/sobreNos', element: <SobreNos /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
