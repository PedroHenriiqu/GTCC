// Importação das bibliotecas principais do React
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Importação do arquivo para medir performance (opcional)
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// Importação das páginas da aplicação
import Login from './pages/Login/Login.js';
import DashbBancas from './pages/DashBoard/DashBancas.js';
import DashbTcc from './pages/DashBoard/DashTcc.js';
import DashbSalas from './pages/DashBoard/DashSalas.js';
import CadastroAluno from './pages/CadastroAluno/CadastroAluno.js';
import CadastroTcc from './pages/CadastroTcc/CadastroTcc.js'
import CadastroSala from './pages/CadastroSala/CadastroSala.js';
import CadastroUsuario from './pages/CadastroUsuario/CadastroUsuario.js'

// rotas usando react-router-dom
const router = createBrowserRouter([
  { path: "/", element: <Login /> },   
  {path:"/login", element:<Login/>},
  {path:"/dashBancas", element:<DashbBancas />},
  {path:"/dashTcc", element:<DashbTcc />},
  {path:"/dashSalas", element:<DashbSalas />},
  {path:"/cadastroaluno", element:<CadastroAluno/>},
  {path:"/cadastrotcc", element:<CadastroTcc/>},
  {path:"/cadastrosala", element:<CadastroSala/>},
  {path:"/caduser", element:<CadastroUsuario/>},
])

// Cria a raiz da aplicação React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza a aplicação com o provedor de rotas
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();