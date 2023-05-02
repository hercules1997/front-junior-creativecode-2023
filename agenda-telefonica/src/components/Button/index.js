/*
Componente de botão para as telas de login, cadastro, edição e adicionar produto.
*/

import PropTypes from 'prop-types'
import React from 'react'

import { ComponentButton } from './style'

export function Button ({ children, ...rest }) {
  return <ComponentButton {...rest}>{children}</ComponentButton>
}

Button.propTypes = {
  children: PropTypes.string
}
