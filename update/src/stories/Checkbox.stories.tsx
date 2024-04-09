import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import React from 'react'
import { Checkbox, CheckboxProps } from '../components/Checkbox'
import { ThemeProvider, lightTheme } from '../styles'

const meta: Meta<CheckboxProps> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<CheckboxProps>

export const Default: Story = {
  args: {
    onClick: fn(),
  },
}
// import { action } from '@storybook/addon-actions'
// import { boolean, text } from '@storybook/addon-knobs'
// import React from 'react'

// export default {
//   title: 'Components/Checkbox',
// }

// export const Default = () => (
//   <Checkbox
//     name='check'
//     label={text('label', 'Component label')}
//     disabled={boolean('disabled', false)}
//     indeterminate={boolean('indeterminate', false)}
//     onChange={action('changed')}
//   />
// )
