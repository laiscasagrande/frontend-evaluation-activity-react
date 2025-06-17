import './App.css';
import { Servicos } from './routes/Servicos';
import { TelaInicial } from './routes/TelaInicial';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <TelaInicial />,
      },
      {
        path: '/servicos',
        element: <Servicos />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
