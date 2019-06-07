import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { MonthPicker } from './MonthPicker'

const now = new Date()

describe('MonthPicker', () => {
  it('should render correctly with month and year', () => {
    const visibleDate = new Date('2019-01-31')
    const { container } = render(<MonthPicker month={visibleDate.getMonth()} year={visibleDate.getFullYear()} />)
    expect(container).toMatchSnapshot()
  })

  it('should change de visible year on "Previous year" button click', () => {
    const { getByTitle, getAllByText } = render(<MonthPicker month={now.getMonth()} year={now.getFullYear()} />)
    fireEvent.click(getByTitle('Previous year'))
    const expectedYear = now.getFullYear() - 1
    expect(getAllByText(expectedYear.toString())).toHaveLength(1)
  })

  it('should change de visible year on "Next year" button click', () => {
    const { getByTitle, getAllByText } = render(<MonthPicker month={now.getMonth()} year={now.getFullYear()} />)
    fireEvent.click(getByTitle('Next year'))
    const expectedYear = now.getFullYear() + 1
    expect(getAllByText(expectedYear.toString())).toHaveLength(1)
  })

  it('should call "onChange" when a month is selected', () => {
    const onChange = jest.fn()
    const { getByText } = render(<MonthPicker month={now.getMonth()} year={now.getFullYear()} onChange={onChange} />)
    fireEvent.click(getByText('Jan'))
    expect(onChange).toHaveBeenCalledWith({ month: 0, year: now.getFullYear() })
  })

  it('should call "onChange" when a month is selected, with the given year', () => {
    const onChange = jest.fn()
    const { getByText, getByTitle } = render(
      <MonthPicker month={now.getMonth()} year={now.getFullYear()} onChange={onChange} />
    )
    fireEvent.click(getByTitle('Previous year'))
    fireEvent.click(getByText('Jan'))
    const expectedYear = now.getFullYear() - 1
    expect(onChange).toHaveBeenCalledWith({ month: 0, year: expectedYear })
  })

  it('should fill the prop year if non is given', () => {
    const { rerender, getAllByText } = render(<MonthPicker month={now.getMonth()} year={now.getFullYear()} />)

    rerender(<MonthPicker month={now.getMonth()} />)
    expect(getAllByText(new Date().getFullYear().toString())).toHaveLength(1)
  })

  it('should change the visible year on re-render', () => {
    const { rerender, getAllByText } = render(<MonthPicker month={now.getMonth()} />)

    const newYear = now.getFullYear() + 1

    rerender(<MonthPicker month={now.getMonth()} year={newYear} />)
    expect(getAllByText(newYear.toString())).toHaveLength(1)
  })
})
