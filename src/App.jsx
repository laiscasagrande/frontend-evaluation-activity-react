import './App.css';
import { TelaInicial } from './TelaInicial';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <TelaInicial />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
