import React from 'react'
import { useDrag } from 'react-dnd'
import { Button, HFlow, Icon } from '..'
import { useStyles } from '../../styles'
import { DefaultDraggableProps } from './DefaultDraggable'
import { draggableCreateStyles } from './RealFilterDraggable'
import { DraggableItemTypes } from './types/ItemTypes'
import { getKeyDirection } from './util'

export function RealDefaultDraggable<T>(props: DefaultDraggableProps<T>) {
  const { name, origin, value, onDragEnd, onKeyNav } = props

  const { classes, css } = useStyles(draggableCreateStyles)

  const [{ isDragging }, drag] = useDrag({
    item: { type: DraggableItemTypes.DEFAULT, name: name, origin },
    end: (_item, monitor) => {
      if (monitor.getDropResult() != null) onDragEnd()
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  const handleKeyDown = (event: any) => {
    onKeyNav(getKeyDirection(event.nativeEvent.key), origin)
    onDragEnd()
  }

  return (
    <div ref={drag} className={css(classes.dndBox, isDragging && classes.dndBoxDragging)}>
      <Button
        style={[classes.button, 'padding-right: 1.25rem;']}
        onKeyDown={handleKeyDown}
        size='small'
        kind='primary'
        skin='ghost'
      >
        <HFlow hSpacing={0.5}>
          <Icon icon='dragdrop' />
          {value}
        </HFlow>
      </Button>
    </div>
  )
}
