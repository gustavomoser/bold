import { blue, gray } from '../../../styles/colors'
import { createTheme } from '../../../styles'
import * as localeModule from '../../../util/locale'
import { calculateCellColor, numberFormatter } from './utils'

afterAll(() => {
  jest.clearAllMocks()
})

describe('numberFormatter', () => {
  jest.spyOn(localeModule, 'getUserLocale').mockReturnValue('pt-BR')

  it('when value is integer, should keep it with zero digits', () => {
    const result = numberFormatter(1)
    expect(result).toEqual('1')
  })
  it('when value has one decimal digit, should add a digit in pt-BR format', () => {
    const result = numberFormatter(1.2)
    expect(result).toEqual('1,20')
  })
  it('when value has more than 2 decimal digits, should limit to two digits in pt-BR format', () => {
    const result = numberFormatter(1.234)
    expect(result).toEqual('1,23')
  })
})

describe('calculateCellColor', () => {
  const theme = createTheme()
  const defaultColor = theme.pallete.gray.c10
  const defaultBgColor = theme.pallete.surface.main
  const maxValue = 10

  it("when cell types dont include only 'value', should return default colors", () => {
    const isOnlyValue = false
    const cellContent = 1

    const { color, backgroundColor } = calculateCellColor(theme, isOnlyValue, maxValue, cellContent)

    expect(color).toEqual(defaultColor)
    expect(backgroundColor).toEqual(defaultBgColor)
  })

  it('when cell content isnt numeric, should return default colors', () => {
    const isOnlyValue = true
    const cellContent = 'Im not numeric'

    const { color, backgroundColor } = calculateCellColor(theme, isOnlyValue, maxValue, cellContent)

    expect(color).toEqual(defaultColor)
    expect(backgroundColor).toEqual(defaultBgColor)
  })

  describe("when cell types include only 'value' and cell content is numeric", () => {
    const isOnlyValue = true

    describe('text color', () => {
      it('when cell content is up to 40% of maximum value, should return default', () => {
        const cellContent = '4'
        const { color } = calculateCellColor(theme, isOnlyValue, maxValue, cellContent)
        expect(color).toEqual(defaultColor)
      })

      it('when cell content is above 40% of maximum value, should return correctly', () => {
        const cellContent = '4.1'
        const expected = gray.c100

        const { color } = calculateCellColor(theme, isOnlyValue, maxValue, cellContent)
        expect(color).toEqual(expected)
      })
    })

    describe('background color', () => {
      it.each([
        [1, blue.c100],
        [2, blue.c90],
        [3, blue.c80],
        [4, blue.c70],
        [5, blue.c60],
        [6, blue.c50],
        [7, blue.c40],
        [8, blue.c30],
        [9, blue.c20],
        [10, blue.c10],
      ])('when cell content is up to %i0%% of maximum value, should return %s', (cellContent, expected) => {
        const { backgroundColor } = calculateCellColor(theme, isOnlyValue, maxValue, cellContent)
        expect(backgroundColor).toEqual(expected)
      })

      it('when cell content is below 0% of maximum value, should return same color used for up to 10%', () => {
        const cellContent = '-0.1'
        const expected = blue.c100

        const { backgroundColor } = calculateCellColor(theme, isOnlyValue, maxValue, cellContent)
        expect(backgroundColor).toEqual(expected)
      })

      it('when cell content is above 100% of maximum value, should return same color used for up to 100%', () => {
        const cellContent = '10.1'
        const expected = blue.c10

        const { backgroundColor } = calculateCellColor(theme, isOnlyValue, maxValue, cellContent)
        expect(backgroundColor).toEqual(expected)
      })
    })
  })
})
