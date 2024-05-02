import { createSerializer, matchers } from '@emotion/jest'
import { cleanup } from '@testing-library/react'

import { createTheme } from '../../src/styles'

expect.extend(matchers)

expect.addSnapshotSerializer(createSerializer())

// Polyfill for test context
// @ts-ignore
global.Intl = require('intl')

afterEach(cleanup)

jest.mock('../styles/hooks/useTheme', () => {
  return {
    useTheme: () => createTheme(),
  }
})
