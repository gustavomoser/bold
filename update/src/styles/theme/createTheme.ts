import { keyframes } from '@emotion/react'

import { Color } from '../colors'
import { Breakpoints, createBreakpoints } from './createBreakpoints'
import { Pallete, PalleteConfig, TextColor, createPallete, textColorMap } from './createPallete'
import { Shadows, createShadows } from './createShadows'
import { Typography, TypographyConfig, createTypography } from './createTypography'
import { Radius, radius } from './radius'
import { ZIndex, zIndex } from './zIndex'

export interface Theme {
  pallete: Pallete
  typography: Typography
  breakpoints: Breakpoints
  zIndex: ZIndex
  radius: Radius
  shadows: Shadows
  animation: any
}

export type ThemeConfig = Partial<{
  pallete: PalleteConfig
  typography: TypographyConfig
}>

export const createTheme = (config: ThemeConfig = {}): Theme => {
  const pallete = createPallete(config.pallete)
  const typography = createTypography(pallete, config.typography)

  return {
    pallete,
    typography,
    breakpoints: createBreakpoints(),
    zIndex,
    radius,
    shadows: createShadows(),
    animation: {
      spinAround: keyframes({
        from: {
          transform: 'rotate(0deg)',
        },
        to: {
          transform: 'rotate(359deg)',
        },
      }),
    },
  }
}

export const getTextColor = (theme: Theme, color: TextColor): Color => {
  return textColorMap[color](theme.pallete)
}

type FocusBoxShadow = 'single' | 'double' | 'inset'

export const focusBoxShadow = (theme: Theme, color: TextColor = 'primary', type: FocusBoxShadow = 'double') => {
  const c = getTextColor(theme, color)

  if (type === 'single') {
    return `0 0 0 2px ${c}`
  } else if (type === 'inset') {
    return `inset 0 0 0 2px ${c}`
  } else {
    return `0 0 0 2px ${theme.pallete.surface.background}, 0 0 0 4px ${c}`
  }
}
