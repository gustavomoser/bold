import React from 'react'

export interface PivotTableContextType {
  /**
   * The maximum expected value for all the table
   */
  maxValue: number
  /**
   * The suffix to append to the cell value
   */
  suffix?: string
}

interface PivotTableProviderProps {
  value: PivotTableContextType
  children: React.ReactNode
}

export const PivotTableContext = React.createContext<PivotTableContextType>(undefined)

export const PivotTableProvider = (props: PivotTableProviderProps) => {
  const { children, value } = props

  return <PivotTableContext.Provider value={value}>{children}</PivotTableContext.Provider>
}
