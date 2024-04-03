import { Interpolation } from '@emotion/react'

import * as palletes from './colors'
import { CSSProperties } from 'react'

export { DefaultGlobalCss, GlobalCss } from './global/GlobalCss'
export * from './hooks'
export * from './theme'
export * from './utils'

export const colors = palletes

export type ExternalStyles = Interpolation<CSSProperties>
