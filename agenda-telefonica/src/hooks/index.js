import PropTypes from 'prop-types'
import React from 'react'

import { ContactProvider } from './ContactContext'
import { UserProvider } from './UserContext'

// PASSANDO PROPS DAS FUNÇÕES TORNANDO ELAS DISPONIVEL PARA APLICAÇÃO TODA

const AppProvider = ({ children }) => (
  <UserProvider>
    <ContactProvider>{children}</ContactProvider>
  </UserProvider>
)

AppProvider.propTypes = {
  children: PropTypes.node
}

export default AppProvider
