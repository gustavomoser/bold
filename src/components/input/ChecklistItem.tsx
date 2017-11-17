import * as React from 'react'
import * as isUndefined from 'lodash/isUndefined'
import * as isArray from 'lodash/isArray'
import { CheckboxProps, Checkbox } from './Checkbox'
import { excludeProps } from '../../util/Util'
import { List } from 'immutable'

export interface ChecklistItemProps extends CheckboxProps {
    optionValue: any
}

export class ChecklistItem extends React.Component<ChecklistItemProps> {
    constructor() {
        super()

        this.getCurrentValues = this.getCurrentValues.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    getCurrentValues() {
        const { value } = this.props

        let previousValues = []

        if (!isUndefined(value) && value !== '') {
            previousValues = value
        }

        const currentValues = isArray(previousValues) ? [...previousValues] : List.isList(previousValues) ? previousValues : [previousValues]

        return currentValues
    }

    handleChange(event) {
        const { onChange } = this.props
        let values: any = this.getCurrentValues()

        if (event.target.checked) {
            if (List.isList(values)) {
                values = values.push(this.props.optionValue)
            } else {
                values.push(this.props.optionValue)
            }
        } else {
            if (List.isList(values)) {
                values = values.splice(values.indexOf(this.props.optionValue), 1)
            } else {
                values.splice(values.indexOf(this.props.optionValue), 1)
            }
        }

        return onChange(values as any)
    }

    render() {
        const { optionValue } = this.props
        const values = this.getCurrentValues()

        const isChecked = values.indexOf(optionValue) > -1
        return (
            <Checkbox {...excludeProps(this.props, ...excludedProps) }
                onChange={this.handleChange}
                checked={isChecked}
                onBlur={() => { }}
                value={optionValue} />
        )
    }
}

const excludedProps = [
    'optionValue'
]
