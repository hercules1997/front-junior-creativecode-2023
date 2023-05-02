import PropTypes from 'prop-types'
import React from 'react'

import { SingLink } from './style'

export function ButtonLink ({ children, ...rest }) {
  return <SingLink {...rest}>{children}</SingLink>
}
ButtonLink.propTypes = {
  children: PropTypes.array
}
