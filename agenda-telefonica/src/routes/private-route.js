import PropTypes from 'prop-types'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export function Private ({ component, ...rest }) {
  const user = localStorage.getItem('agendaTel:users')
  // Verificação se o usuário existe para acessar
  if (!user) {
    return <Redirect to="/login" />
  }

  return <Route {...rest} component={component} />
}

Private.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
