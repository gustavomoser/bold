import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../../styles'
import { TextInput, TextInputProps } from '../../TextInput/TextInput'

import { SelectDownshift, SelectDownshiftProps, SelectDownshiftRenderProps } from './SelectDownshift'
import { SelectDownshiftMenu, SelectDownshiftMenuProps } from './SelectDownshiftMenu'

export interface DefaultItemType {
    value: any
    label: string
}

export interface SelectSingleProps<T = DefaultItemType> extends SelectDownshiftProps<T>, WithStylesProps {
    value?: T
    loading?: SelectDownshiftMenuProps<T>['loading']
    renderItem?: SelectDownshiftMenuProps<T>['renderItem']
    components?: SelectDownshiftMenuProps<T>['components']
    name?: TextInputProps['name']
    onBlur?: TextInputProps['onBlur']
    disabled?: TextInputProps['disabled']
    status?: TextInputProps['status']
    placeholder?: TextInputProps['placeholder']
    clearable?: TextInputProps['clearable']
    style?: TextInputProps['style']
}

@withStyles
export class SelectSingle<T> extends React.Component<SelectSingleProps<T>> {

    render() {
        const {
            css,
            theme,
            renderItem,
            loading,
            components,
            disabled,
            name,
            onBlur,
            status,
            clearable,
            style,
            value,
            placeholder,
            ...rest
        } = this.props

        return (
            <SelectDownshift<T>
                initialSelectedItem={value}
                {...rest}
            >
                {(downshift) => {
                    const {
                        isOpen,
                        getInputProps,
                        visibleItems,
                        inputValue,
                    } = downshift

                    return (
                        <div>
                            <TextInput
                                name={name}
                                icon={isOpen ? 'triangleUp' : 'triangleDown'}
                                disabled={disabled}
                                status={status}
                                clearable={clearable}
                                style={style}
                                placeholder={placeholder}
                                onClear={this.handleClear(downshift)}
                                onBlur={this.handleInputBlur(downshift)}
                                onIconClick={this.handleInputIconClick(downshift)}
                                onFocus={this.handleInputFocus(downshift)}
                                onClick={this.handleInputClick(downshift)}
                                {...getInputProps()}
                                value={inputValue ? inputValue : ''}
                            />
                            <SelectDownshiftMenu
                                downshift={downshift}
                                items={visibleItems}
                                loading={loading}
                                renderItem={renderItem}
                                components={components}
                            />
                        </div>
                    )
                }}
            </SelectDownshift>
        )
    }

    handleClear = (downshift: SelectDownshiftRenderProps<T>) => () => {
        downshift.clearSelection()
    }

    handleInputIconClick = ({ toggleMenu }: SelectDownshiftRenderProps<T>) => () => toggleMenu()
    handleInputFocus = ({ openMenu }: SelectDownshiftRenderProps<T>) => () => openMenu()
    handleInputClick = ({ openMenu }: SelectDownshiftRenderProps<T>) => () => openMenu()
    handleInputBlur = ({ closeMenu }: SelectDownshiftRenderProps<T>) => (e: React.FocusEvent<HTMLInputElement>) => {
        closeMenu()
        this.props.onBlur && this.props.onBlur(e)
    }
}
