import './App.css';
import { Servicos } from './routes/Servicos';
import { TelaInicial } from './routes/TelaInicial';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { TelaNome } from './routes/TelaNomeUsuario';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <TelaNome />,
      },
      {
        path: '/servicos',
        element: <Servicos />,
      },
      {
        path: '/inicial',
        element: <TelaInicial />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
