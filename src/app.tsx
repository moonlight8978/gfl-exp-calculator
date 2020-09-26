import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppMenu from './features/app-menu'
import Screens from './screens'

const App = () => {
  return (
    <BrowserRouter>
      <>
        <AppMenu />
        <Screens />
      </>
    </BrowserRouter>
  )
}

export default App
