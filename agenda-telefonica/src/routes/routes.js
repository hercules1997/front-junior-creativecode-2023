import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import paths from '../constants/paths'
import { Pages, Cadastro, Login } from '../containers'
import { Private } from './private-route'

function AllRoutes () {
  return (
    <Router>
      <Switch>
        <Route component={Login} path={paths.SingIn} />
        <Route component={Cadastro} path={paths.Register} />

        {/* Rotas privadas */}
        <Private component={Pages} path={paths.Edit} auth />
        <Private component={Pages} path={paths.NewCtt} auth />
        <Private component={Pages} path={paths.List} auth />
      </Switch>
    </Router>
  )
}

export default AllRoutes
