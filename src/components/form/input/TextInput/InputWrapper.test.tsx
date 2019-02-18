import { render } from 'enzyme'
import React from 'react'

import { withTheme } from '../../../../test'
import { Input } from '../Input/Input'

import { InputWrapper } from './InputWrapper'

it('should render correctly', () => {
    const wrapper = render(withTheme(
        <InputWrapper clearVisible={true}>
            <Input />
        </InputWrapper>
    ))
    expect(wrapper).toMatchSnapshot()
})

it('should render correctly with button', () => {
    const wrapper = render(withTheme(
        <InputWrapper icon='zoomOutline' clearVisible={true} onIconClick={jest.fn()}>
            <Input />
        </InputWrapper>
    ))
    expect(wrapper).toMatchSnapshot()
})

it('should render correctly with left position', () => {
    const wrapper = render(withTheme(
        <InputWrapper icon='zoomOutline' clearVisible={true} iconPosition='left'>
            <Input />
        </InputWrapper>
    ))
    expect(wrapper).toMatchSnapshot()
})

it('should render correctly without clear icon', () => {
    const wrapper = render(withTheme(
        <InputWrapper icon='zoomOutline' clearVisible={false}>
            <Input />
        </InputWrapper>
    ))
    expect(wrapper).toMatchSnapshot()
})

it('should render correctly without clear icon AND left position', () => {
    const wrapper = render(withTheme(
        <InputWrapper icon='zoomOutline' clearVisible={false} iconPosition='left' >
            <Input />
        </InputWrapper>
    ))
    expect(wrapper).toMatchSnapshot()
})
