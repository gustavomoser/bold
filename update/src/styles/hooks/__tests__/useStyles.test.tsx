import { css } from '@emotion/css'
import { renderHook } from '@testing-library/react-hooks'
import React from 'react'

import { createTheme } from '../../theme/createTheme'
import { ThemeContext } from '../../theme/ThemeContext'
import { useStyles } from '../useStyles'

jest.unmock('../useTheme')

it('should return a map of classNames generated from a map of css properties', () => {
  const factory = () => ({
    class1: {
      color: 'red',
    },
    class2: {
      color: 'blue',
    },
  })

  const styles = factory()

  const { result } = renderHook(() => useStyles(factory))
  expect(result.current.classes).toEqual({
    class1: css(styles.class1),
    class2: css(styles.class2),
  })
})

it('should call the factory with additional arguments passed to the function', () => {
  const factory = jest.fn(() => ({}))
  const theme = createTheme()

  const wrapper = ({ children }) => <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  renderHook(() => useStyles(factory, 'foo', 42, { obj: true }), { wrapper })
  expect(factory).toHaveBeenLastCalledWith(theme, 'foo', 42, { obj: true })
})

it('should call the factory with current theme from ThemeContext', () => {
  const factory = jest.fn(() => ({}))
  const theme = createTheme()

  const wrapper = ({ children }) => <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  renderHook(() => useStyles(factory), { wrapper })
  expect(factory).toHaveBeenLastCalledWith(theme)
})

it('should return the current theme from ThemeContext', () => {
  const theme = createTheme()
  const wrapper = ({ children }) => <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  const { result } = renderHook(() => useStyles(), { wrapper })
  expect(JSON.stringify(result.current.theme)).toEqual(JSON.stringify(theme))
})

it('should return the "css" function', () => {
  const { result } = renderHook(() => useStyles())
  expect(result.current.css).toEqual(css)
})

it('should memoize the return on rerender', () => {
  const factory = jest.fn(() => ({}))
  const theme = createTheme()
  const wrapper = ({ children }) => <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  const { result, rerender } = renderHook(() => useStyles(factory, 'foo', 42), { wrapper })

  const first = result.current.classes
  rerender()
  const second = result.current.classes

  expect(second).toBe(first)
  expect(factory).toHaveBeenCalledTimes(1)
  expect(factory).toHaveBeenLastCalledWith(theme, 'foo', 42)
})
