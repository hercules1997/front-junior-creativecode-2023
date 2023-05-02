import PropTypes from 'prop-types'
import React from 'react'

import { Menu } from '../../components'
import paths from '../../constants/paths'

import { ContactList, EditContact, NewContact } from '..'

import { Container, ContainerItems } from './style'

// RENDERIZAÇÃO DAS PÁGINAS PARA NAVEGAR E APLICAÇÃO DOS BOTÕES ATIVADOS
export function Pages ({ match: { path } }) {
  return (
    <Container>
      <Menu path={path} />
      <ContainerItems>
        {path === paths.NewCtt && <NewContact />}
        {path === paths.List && <ContactList />}
        {path === paths.Edit && <EditContact />}
      </ContainerItems>
    </Container>
  )
}

Pages.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}
