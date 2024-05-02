import { css } from '@emotion/css'
import { renderHook } from '@testing-library/react-hooks'
import React from 'react'

import { createTheme } from '../../theme/createTheme'
import { ThemeContext } from '../../theme/ThemeContext'
import { useCss } from '../useCss'

jest.unmock('../useTheme')

it('should return a "css" function that transforms a CSS properties object to a classname', () => {
  const { result } = renderHook(() => useCss())
  expect(JSON.stringify(result.current.css)).toEqual(JSON.stringify(css))
})

it('should return the current theme from ThemeContext', () => {
  const theme = createTheme()
  const wrapper = ({ children }) => <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  const { result } = renderHook(() => useCss(), { wrapper })
  expect(JSON.stringify(result.current.theme)).toEqual(JSON.stringify(theme))
})
