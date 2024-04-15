import { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertProps } from './Alert'

// export const Default = () => (
//   <VFlow>
//     <Alert type='info' onCloseClick={boolean('onCloseClick', true) && click}>
//       Information
//     </Alert>
//     <Alert type='success' onCloseClick={boolean('onCloseClick', true) && click}>
//       Success message
//     </Alert>
//     <Alert type='warning' onCloseClick={boolean('onCloseClick', true) && click}>
//       Alert message
//     </Alert>
//     <Alert type='danger' onCloseClick={boolean('onCloseClick', true) && click}>
//       Error message
//     </Alert>
//   </VFlow>
// )

// export const Inline = () => (
//   <VFlow>
//     <Alert type='info' onCloseClick={boolean('onCloseClick', true) && click} inline>
//       Information
//     </Alert>
//     <Alert type='success' onCloseClick={boolean('onCloseClick', true) && click} inline>
//       Success message
//     </Alert>
//     <Alert type='warning' onCloseClick={boolean('onCloseClick', true) && click} inline>
//       Alert message
//     </Alert>
//     <Alert type='danger' onCloseClick={boolean('onCloseClick', true) && click} inline>
//       Error message
//     </Alert>
//   </VFlow>
// )

const meta: Meta<AlertProps> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    onCloseClick: {
      control: { type: 'boolean' },
      defaultValue: false,
      // action('Close has been clicked')
    },
  },
  args: {
    children: 'Alert label',
    type: 'info',
    inline: false,
  },
}

export default meta
type Story = StoryObj<AlertProps>

export const Info: Story = {}
export const Success: Story = {
  args: {
    type: 'success',
  },
}
export const Warning: Story = {
  args: {
    type: 'warning',
  },
}
export const Danger: Story = {
  args: {
    type: 'danger',
  },
}

export const Inline: Story = {
  args: {
    inline: true,
  },
}
