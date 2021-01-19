import { Interpolation } from 'emotion'
import React, { CSSProperties, MouseEvent, useCallback, useMemo } from 'react'

import { Theme, useStyles } from '../../styles'
import { HFlow } from '../HFlow'

import { MonthControl } from './MonthControl'
import { MonthView, MonthViewProps } from './MonthView'
import { isSameDay, isSameWeek } from './util'
import { YearControl } from './YearControl'

export interface CalendarProps extends MonthViewProps {
  /**
   * Map of modifier predicates to apply custom or pre-defined styles to dates.
   */
  modifiers?: Partial<ModifierPredicateMap>

  /**
   * Map of modifier styles to be applied to a date if the respective modifier predicate applies.
   */
  modifierStyles?: Partial<ModifierStyleMap>

  /**
   * Called when the current visible date changes.
   * You might want to change the current `visibleDate` prop when this occurs.
   * @param visibleDate The new visible date.
   */
  onVisibleDateChange(visibleDate: Date): void

  /**
   *
   */
  onMouseLeave?(e: MouseEvent<HTMLDivElement>): void

  /**
   *
   */
  isDaySelected?(day: Date): boolean
}

export function Calendar(props: CalendarProps) {
  const {
    onlyWeeks,
    visibleDate,
    modifiers,
    modifierStyles,
    onVisibleDateChange,
    onMouseLeave,
    isDaySelected,
    onWeekClick,
    ...rest
  } = props
  const { classes, theme } = useStyles(createStyles)

  const allModifiers = useMemo(() => ({ ...createDefaultModifiers(onlyWeeks), ...modifiers }), [modifiers, onlyWeeks])
  const allModifierStyles = useMemo(() => ({ ...createDefaultModifierStyles(onlyWeeks), ...modifierStyles }), [
    modifierStyles,
    onlyWeeks,
  ])
  const createDateStyles = useMemo(() => createStylesFn(allModifiers, allModifierStyles, theme), [
    allModifiers,
    allModifierStyles,
    theme,
  ])

  const handleDayClick = useCallback(
    (day: Date) => {
      if (!allModifiers.disabled(day, props)) {
        onVisibleDateChange(day)
        return props.onDayClick && props.onDayClick(day)
      }
    },
    [allModifiers, onVisibleDateChange, props]
  )

  const handleWeekClick = useCallback(
    (week: Date[]) => {
      if (!allModifiers.disabled(week, props)) {
        onVisibleDateChange(week[0])
        return props.onWeekClick && props.onWeekClick(week)
      }
    },
    [allModifiers, onVisibleDateChange, props]
  )

  if (onlyWeeks && onlyWeeks === true) {
    return (
      <div className={classes.root} onMouseLeave={onMouseLeave}>
        <HFlow hSpacing={0.5} justifyContent='space-around' style={classes.controls}>
          <MonthControl visibleDate={visibleDate} onChange={onVisibleDateChange} />
          <YearControl visibleDate={visibleDate} onChange={onVisibleDateChange} />
        </HFlow>
        <MonthView
          visibleDate={visibleDate}
          createDateStyles={createDateStyles}
          onWeekClick={handleWeekClick}
          onlyWeeks={true}
          {...rest}
        />
      </div>
    )
  } else {
    return (
      <div className={classes.root} onMouseLeave={onMouseLeave}>
        <HFlow hSpacing={0.5} justifyContent='space-around' style={classes.controls}>
          <MonthControl visibleDate={visibleDate} onChange={onVisibleDateChange} />
          <YearControl visibleDate={visibleDate} onChange={onVisibleDateChange} />
        </HFlow>
        <MonthView
          visibleDate={visibleDate}
          createDateStyles={createDateStyles}
          onDayClick={handleDayClick}
          isDaySelected={isDaySelected}
          onlyWeeks={false}
          {...rest}
        />
      </div>
    )
  }
}

export const createStyles = () => ({
  root: {
    width: 288,
  } as CSSProperties,
  controls: {
    marginBottom: '0.5rem',
    fontWeight: 'bold',
  } as CSSProperties,
})

export type ModifierFn = (element: any, props: MonthViewProps) => boolean

export interface ModifierPredicateMap {
  disabled: ModifierFn
  selected: ModifierFn
  today: ModifierFn
  adjacentMonth?: ModifierFn
  [key: string]: ModifierFn
}

export type ModifierStyleMap = { [key in keyof ModifierPredicateMap]: (theme: Theme) => Interpolation }

export const createDefaultModifiers = (onlyWeeks: boolean): ModifierPredicateMap => {
  if (onlyWeeks) {
    return {
      today: (week: Date[]) => isSameWeek(new Date(), week),
      disabled: () => false,
      selected: () => false,
    }
  }
  return {
    today: (day: Date) => isSameDay(new Date(), day),
    disabled: () => false,
    selected: () => false,
    adjacentMonth: (day: Date, { visibleDate }) => visibleDate.getMonth() !== day.getMonth(),
  }
}

export const createDefaultModifierStyles = (onlyWeeks: boolean): ModifierStyleMap => {
  let stylemap: ModifierStyleMap = {
    today: () => ({
      fontWeight: 'bold',
    }),
    disabled: (theme: Theme) => ({
      color: theme.pallete.text.disabled,
      ':hover': {
        background: 'initial',
        cursor: 'not-allowed',
      },
    }),
    selected: (theme: Theme) => ({
      background: theme.pallete.primary.main,
      color: theme.pallete.surface.main,
      fontWeight: 'bold',
      ':hover': {
        background: theme.pallete.primary.main,
        color: theme.pallete.surface.main,
      },
    }),
  }
  if (!onlyWeeks) {
    stylemap.adjacentMonth = (theme: Theme) => ({
      color: theme.pallete.text.disabled,
    })
  }
  return stylemap
}

export const createStylesFn = (modifiers: ModifierPredicateMap, styles: ModifierStyleMap, theme: Theme) => (
  element: any,
  props: MonthViewProps
): Interpolation => {
  return Object.keys(modifiers).reduce((s, modifier) => {
    if (!styles[modifier]) {
      throw new Error(`You must provied a modifierStyle for predicate "${modifier}"`)
    }
    return {
      ...s,
      ...(modifiers[modifier](element, props) ? (styles[modifier](theme) as any) : {}),
    }
  }, {})
}
