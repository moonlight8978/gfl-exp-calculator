import React from 'react'
import { render } from '@testing-library/react'

import App from '../app'

test('renders without crash', () => {
  render(<App />)
})
