import { LogoutOutlined } from '@mui/icons-material'
import PropTypes from 'prop-types'
import React from 'react'

import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import {
  ContainerItems,
  ContainerMenu,
  ListLink,
  Profile,
  Avatar,
  P,
  ContainerLogout
} from './style'

/*
  Estrutura do menu de navegação
*/

export function Menu ({ path }) {
  const { logout, userData } = useUser()
  return (
    <ContainerMenu>
      <Profile>
        <Avatar />
        <P>
          Olá, {userData.name}
        </P>
      </Profile>

      <hr />
      {listLinks.map((item) => (
        <ContainerItems key={item.id}>
          <ListLink to={item.link} isActive={path === item.link}>
            <item.icon className="icon" to={item.link} />
            {item.label}
          </ListLink>
        </ContainerItems>
      ))}
      <ContainerLogout onClick={logout}>
        <ListLink to={'/login'} style={{ color: 'yellow' }}>
          <LogoutOutlined className="iconLogout" />
          Sair
        </ListLink>
      </ContainerLogout>
    </ContainerMenu>
  )
}

Menu.propTypes = {
  path: PropTypes.string
}
