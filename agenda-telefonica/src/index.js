import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer, Flip } from 'react-toastify'

import AppProvider from './hooks'
import Routes from './routes/routes'
import GlobalStyles from './styles/globalStyles'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    {/* Disponibilizando context */}
    <AppProvider>
      {/* Rotas */}
      <Routes />
    </AppProvider>

    {/* Configuração do TOAST */}
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      transition={Flip}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    {/* Estilos globais */}
    <GlobalStyles />
  </>
)
