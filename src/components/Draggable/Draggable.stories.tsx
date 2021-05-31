import { action } from '@storybook/addon-actions'
import React from 'react'
import { DefaultDraggable } from './DefaultDraggable'
import { FilterDraggable } from './FilterDraggable'
import { KeyMapping } from './types/KeyMapping'

export default {
  title: 'Components/Draggable',
}

const origin = 'keys_avaible'

type Fruit = {
  name: String
}

const keyMapping = new Map<keyof Fruit, KeyMapping>([['name', { keyName: 'Name' }]])

const keyState: Array<keyof Fruit> = ['name']
const key: keyof Fruit = keyState[0]
const keys = new Map<keyof Fruit, string[]>([
  ['name', ['Apple', 'Banana', 'Blackberry', 'Lemon', 'Orange', 'Watermelon']],
])

export const Default = () => (
  <DefaultDraggable<Fruit>
    key={key as string}
    name={key}
    value={keyMapping.get(key).keyName || (key as string)}
    origin={origin}
    onDragEnd={action('onDragEnd')}
    onKeyNav={action('onKeyNav')}
  />
)

export const Filter = () => (
  <FilterDraggable<Fruit>
    key={key as string}
    name={key}
    value={keyMapping.get(key).keyName || (key as string)}
    formatter={keyMapping.get(key).formatter}
    origin={origin}
    filterItems={keys.get(key)}
    chosenItems={new Set<string>(['Apple'])}
    onFilterUpdate={action('onFilterUpdate')}
    onDragEnd={action('onDragEnd')}
    onKeyNav={action('onKeyNav')}
  />
)
