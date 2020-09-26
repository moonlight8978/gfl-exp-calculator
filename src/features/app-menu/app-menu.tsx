import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import { screenPaths } from 'src/config'

const AppMenu = () => {
  return (
    <div>
      <div>navigationbar </div>
      <Link to={screenPaths.expCalculator}>EXP Calculator</Link>
    </div>
  )
}

export default memo(AppMenu)
