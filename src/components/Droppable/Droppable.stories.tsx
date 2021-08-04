import React, { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { HFlow } from '../HFlow'
import { Box } from '../PivotTable/Box/Box'
import { Droppable } from './Droppable'

export default {
  title: 'Components/PivotTable/Droppable',
}

type Fruit = {
  name: string
  size?: string
  taste?: string
}
type KeyMapping = {
  keyName: string
  formatter?: (value: string) => string
  ordenator?: (a: string, b: string) => number
}

const keyMapping = new Map<keyof Fruit, KeyMapping>([
  ['name', { keyName: 'Name' }],
  ['size', { keyName: 'Size' }],
])
const keys = new Map<keyof Fruit, string[]>([
  ['name', ['Apple', 'Banana', 'Blackberry', 'Lemon', 'Orange', 'Watermelon']],
  ['size', ['Medium', 'Small', 'Big']],
])

const deepCopy = new Map<keyof Fruit, Set<string>>()

keys.forEach((value, key) => deepCopy.set(key, new Set(value)))

export const Default = () => {
  const [defaultKeys, setDefaultKeys] = useState<Array<keyof Fruit>>(Array.from(keys.keys()))
  const [rowKeys, setRowKeys] = useState<Array<keyof Fruit>>([])
  const [filterState, setFilterState] = useState<Map<keyof Fruit, Set<string>>>(
    new Map<keyof Fruit, Set<string>>(deepCopy)
  )
  const handleFilterUpdate = (key: keyof Fruit, filtro: Set<string>) => {
    if (filtro.size < 1) {
      filterState.delete(key)
    } else {
      filterState.set(key, filtro)
    }
    setFilterState(new Map(filterState))
  }
  return (
    <DndProvider backend={HTML5Backend}>
      <HFlow>
        <Box label='Table 1'>
          <Droppable<Fruit>
            name='table1'
            keyState={defaultKeys}
            filterState={filterState}
            hasFilter={true}
            type={'fruit-table'}
            keyMapping={keyMapping}
            keys={keys}
            handleKeyUpdate={setDefaultKeys}
            handleFilterUpdate={handleFilterUpdate}
          />
        </Box>
        <Box label='Table 2'>
          <Droppable<Fruit>
            name='table2'
            keyState={rowKeys}
            filterState={filterState}
            hasFilter={false}
            type={'fruit-table'}
            keyMapping={keyMapping}
            keys={keys}
            handleKeyUpdate={setRowKeys}
            handleFilterUpdate={handleFilterUpdate}
          />
        </Box>
      </HFlow>
    </DndProvider>
  )
}
