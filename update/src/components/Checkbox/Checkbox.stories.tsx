import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox'

const meta: Meta<CheckboxProps> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    name: 'check',
    label: 'Component label',
    checked: false,
    indeterminate: false,
    disabled: false,
    onChange: action('changed'),
  },
}

export default meta
type Story = StoryObj<CheckboxProps>

export const Unchecked: Story = {}
export const Checked: Story = {
  args: {
    checked: true,
  },
}
export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
}
export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
