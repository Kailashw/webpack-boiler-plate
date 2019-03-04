import React from "react";
import { Router } from "@reach/router"

import Home from '../containers/Home'
import Dashboard from '../containers/Dashboard'

const Routes = () => (
    <Router>
      <Home path="/" />
      <Dashboard path="/dashboard" />
    </Router>
)

export default Routes