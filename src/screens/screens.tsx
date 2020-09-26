import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { screenPaths } from 'src/config'

import ExpCalculatorScreen from './exp-calculator'

const Screens = () => {
  return (
    <Switch>
      <Route path={screenPaths.expCalculator}>
        <ExpCalculatorScreen />
      </Route>
    </Switch>
  )
}

export default Screens
